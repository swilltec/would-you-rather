import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Segment, Header, Grid, Image } from "semantic-ui-react";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";
import PollPreview from "./PollPreview";

const pollTypes = {
  POLL_PREVIEW: "POLL_PREVIEW",
  POLL_QUESTION: "POLL_QUESTION",
  POLL_RESULT: "POLL_RESULT",
};

const PollContent = (props) => {
    console.log(props)
  const { pollType, question, unanswered } = props;
  switch (pollType) {
    case pollTypes.POLL_PREVIEW:
      return <PollPreview question={question} unanswered={unanswered} />;
    case pollTypes.POLL_QUESTION:
      return <PollQuestion question={question} />;
    case pollTypes.POLL_RESULT:
      return <PollResult question={question} />;
    default:
      return;
  }
};

class UserCard extends Component {
  render() {
    const {
      author,
      question,
      pollType,
      badPath,
      unanswered = null,
    } = this.props;

    if (badPath === true) {
      return <Redirect to="/questions/bad_id" />;
    }

    const tabColor = unanswered === true ? "blue" : "red";
    const borderTop =
      unanswered === null ? `1px solid blue` : `2px solid ${tabColor}`;

    return (
      <Segment.Group>
        <Header
          as="h5"
          textAlign="center"
          block
          attached="top"
          style={{ borderTop: borderTop }}
        >
          {author.name} asks
        </Header>

        <Grid padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={author.avatarURL} />
            </Grid.Column>
            <Grid.Column width={11}>
              <PollContent
                pollType={pollType}
                unanswered={unanswered}
                question={question}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
  static propTypes = {
    question: PropTypes.object,
    author: PropTypes.object,
    pollType: PropTypes.string,
    unanswered: PropTypes.bool,
    question_id: PropTypes.string,
  };
}

function mapStateToProps(
  { users, questions, authUser },
  { question_id, match }
) {
  let question,
    author,
    pollType,
    badPath = false;
  if (question_id !== undefined) {
    question = questions[question_id];
    author = users[question.author];
    pollType = pollTypes.POLL_PREVIEW;
  } else {
    const { question_id } = match.params;
    question = questions[question_id];
    const user = users[authUser];

    if (question === undefined) {
      badPath = true;
    } else {
      author = users[question.author];
      pollType = pollTypes.POLL_QUESTION;
      if (Object.keys(user.answers).includes(question.id)) {
        pollType = pollTypes.POLL_RESULT;
      }
    }
  }

  return {
    badPath,
    question,
    author,
    pollType,
  };
}

export default connect(mapStateToProps)(UserCard);
