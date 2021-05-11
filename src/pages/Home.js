import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import UserCard from "../components/UserCard";
import QuestionCard from "../components/QuestionCard";

export class Home extends Component {
  render() {
    const { userQuestionData } = this.props;

    return <Tab panes={panes({ userQuestionData })} className="tab" />;
  }
  static propTypes = {
    userQuestionData: PropTypes.object.isRequired,
  };
}

const panes = (props) => {
  const { userQuestionData } = props;
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map((question) => (
            <UserCard
              key={question.id}
              userId={question.author}
              color="#6A5ACD"
            >
              <QuestionCard
                question={question}
                unanswered={true}
                color="blue"
              />
            </UserCard>
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map((question) => (
            <UserCard
              key={question.id}
              userId={question.author}
              color="#FF4500"
            >
              <QuestionCard question={question} unanswered={false} color="" />
            </UserCard>
          ))}
        </Tab.Pane>
      ),
    },
  ];
};

function mapStateToProps({ authUser, users, questions }) {
  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestionData: {
      answered,
      unanswered,
    },
  };
}

export default connect(mapStateToProps)(Home);
