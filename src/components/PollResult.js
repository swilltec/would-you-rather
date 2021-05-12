
import React, { Component,  } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Header,
  Segment,
  Progress,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';


const VoteLabel = () => (
  <Label color="#667292" ribbon="left" className="vote">
    <Icon name="check circle outline" size="big" className="compact" />
    <div style={{ float: 'right' }}>
      Your
      <br />
      Vote
    </div>
  </Label>
);

class PollResult extends Component {

  addHistory = () => {
    this.props.history.push('/');
  };

  render() {
    const { question, user } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

    let option1 = '#e6e2d3',
      option2 = '#e6e2d3';
    if (optionOneVotes > optionTwoVotes) {
      option1 = "#c4b7a6";
    } else if (optionTwoVotes > optionOneVotes) {
      option2 = "#c4b7a6";
    }

    return (
      <>
        <Header as="h3">
          Results:
          <Header.Subheader style={{ fontWeight: 'bold' }}>
            Would you rather
          </Header.Subheader>
        </Header>
        <Segment
          color={option1}
          style={{ backgroundColor: `${option1}` }}
        >
          {userVote === 'optionOne' && <VoteLabel />}
          <p style={{ fontWeight: 'bold' }}>{question.optionOne.text}</p>
          <Progress
            percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
            progress
            color={option1}
          >
            {optionOneVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        <Segment
          color={option2}
          style={{ backgroundColor: `${option2}` }}
        >
          {userVote === 'optionTwo' && <VoteLabel />}

          <p style={{ fontWeight: 'bold' }}>{question.optionTwo.text}</p>
          <Progress
            percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
            progress
            color={option2}
          >
            {optionTwoVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        <Button size="tiny" floated="right" onClick={this.addHistory}>
          Back
        </Button>
      </>
    );
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user
  };
}

export default withRouter(connect(mapStateToProps)(PollResult))