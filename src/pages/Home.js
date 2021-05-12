import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import UserCard from "../components/UserCard";

export class Home extends Component {
  render() {
    const { userAndQuestionData } = this.props;

    return <Tab panes={panes({ userAndQuestionData })} className="tab" />;
  }
  static propTypes = {
    userAndQuestionData: PropTypes.object.isRequired,
  };
}

const panes = props => {
  const { userAndQuestionData } = props;
  return [
    {
      menuItem: 'Aanswered',
      render: () => (
        <Tab.Pane>
          {userAndQuestionData.unanswered.map(question => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Unanswered',
      render: () => (
        <Tab.Pane>
          {userAndQuestionData.unanswered.map(question => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      )
    }
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
    userAndQuestionData: {
      answered,
      unanswered,
    },
  };
}

export default connect(mapStateToProps)(Home);
