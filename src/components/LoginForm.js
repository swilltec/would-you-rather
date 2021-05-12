import { Component } from "react";
import PropTypes from "prop-types";
import { Header, Form } from "semantic-ui-react";
import { setAuthUser } from "../actions";
import { connect } from "react-redux";


class LoginForm extends Component {
  state = {
    value: "",
  };

  onChange = (e, { value }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onLoading, setAuthUser } = this.props;
    const authUser = this.state.value;

    new Promise((res, rej) => {
      onLoading();
      setTimeout(() => res(), 500);
    }).then(() => setAuthUser(authUser));
  };

  generateDropdownData = () => {
    const { users } = this.props;

    return users.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };

  render() {
    const { value } = this.state;
    const disabled = value === "" ? true : false;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h3">
          Please select an account below
        </Header>
        <Form.Dropdown
          placeholder="Select a Friend"
          fluid
          selection
          scrolling
          options={this.generateDropdownData()}
          value={value}
          onChange={this.onChange}
          required
        />
        <Form.Button content="Login" primary disabled={disabled} fluid />
      </Form>
    );
  }

  static propTypes = {
    onLoading: PropTypes.func.isRequired,
  };
}



function mapStateToProps({ users }) {
    return {
        users: Object.values(users),
    };
}

export default connect(mapStateToProps, { setAuthUser })(LoginForm);