import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

class PollPreview extends React.Component {
  state = {
    viewQuestion: false,
  };

  buttonClick = (e) => {
    this.setState((prevState) => ({
      viewQuestion: !prevState.viewQuestion,
    }));
  };

  render() {
    const { question, unanswered } = this.props;
    
    const buttonColor = unanswered === true ? "blue" : "red";
    if (this.state.viewQuestion === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    return (
      <>
        <Header as="h5" textAlign="center">
          Would you rather
        </Header>
        <p style={{ textAlign: "center" }}>
          {question.optionOne.text}
          <br />
          or...
        </p>
        <Button
          color={buttonColor}
          size="big"
          fluid
          onClick={this.buttonClick}
          content={unanswered === true ? "Answer Poll" : "Results"}
        />
      </>
    );
  }

  static propTypes = {
    question: PropTypes.object.isRequired,
    unanswered: PropTypes.bool.isRequired,
    color: PropTypes.string,
  };
}

export default PollPreview;
