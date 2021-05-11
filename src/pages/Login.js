// Login.js
import React, { Component } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import bg from "../images/bg.png";

export class Login extends Component {
  state = {
    loading: false,
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <>
        <Segment.Group>
          <Header as="h4" color='blue' style={{bgColor: "black"}} block attached="top" textAlign="center">
            <Header.Content>
              Welcome to the Would You Rather App!
            </Header.Content>
            <Header.Subheader>Please sign in to continue</Header.Subheader>
          </Header>
          <Grid padded textAlign="center">
            <Grid.Row className="login">
              <Grid.Column width={16}>
                {this.state.loading === true && (
                  <Dimmer active inverted>
                    <Loader inverted content="Loading" />
                  </Dimmer>
                )}
                <Image src={bg} size="medium" centered />
                <br />
                <LoginForm onLoading={this.handleLoading} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </>
    );
  }
}



export default Login;
