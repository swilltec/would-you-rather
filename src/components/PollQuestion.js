import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Button, Form, Radio } from 'semantic-ui-react';
import { addQuestionAnswer } from '../actions';

class PollQuestion extends React.Component {
  
  state = {
    value: ''
  };
  
  inputOnChange = (e, { value }) => this.setState({ value });
  
  formOnSubmit = e => {
    e.preventDefault();
    if (this.state.value !== '') {
      const { authUser, question, addQuestionAnswer } = this.props;
      addQuestionAnswer(authUser, question.id, this.state.value);
    }
  };
  
  render() {
    const { question } = this.props;
    const disabled = this.state.value === '' ? true : false;

    return (
      <>
        <Header as="h4">Would you rather</Header>
        <Form onSubmit={this.formOnSubmit}>
          <Form.Field>
            <Radio
              label={question.optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={this.state.value === 'optionOne'}
              onChange={this.inputOnChange}
            />
            <br />
            <Radio
              label={question.optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={this.state.value === 'optionTwo'}
              onChange={this.inputOnChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              color="blue"
              size="big"
              fluid
              disabled={disabled}
              content="Submit"
            />
          </Form.Field>
        </Form>
      </>
    );
  }

  static propTypes = {
    authUser: PropTypes.string.isRequired,
    addQuestionAnswer: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired
  };
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(
  mapStateToProps,
  { addQuestionAnswer }
)(PollQuestion);