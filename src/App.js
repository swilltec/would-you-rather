import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePoll from "./pages/CreatePoll";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainGrid from "./components/MainGrid";
import { connect } from "react-redux";
import { initializeData } from "./actions/initializeData";
import LeaderBoard from "./pages/LeaderBoard";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import UserCard  from "./components/UserCard";



class App extends React.Component {
  componentDidMount() {
    this.props.initializeData();
  }

  unAuthenticatedUser() {
    return (
      <MainGrid>
        <Login />
      </MainGrid>
    );
  }

  AuthenticatedUser() {
    return(
    <>
      <Nav />
      <MainGrid>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/questions/bad_id" component={NotFound} />
          <Route path="/questions/:question_id" component={UserCard} />
          <Route path="/create-question" component={CreatePoll} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route component={NotFound} />
        </Switch>
      </MainGrid>
    </>)
  }
  render() {
    return (
      <Router>
     
        <MainGrid />
        <div className="App">
       

          {this.props.authUser === null
            ? this.unAuthenticatedUser()
            : this.AuthenticatedUser()}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
  };
}

export default connect(mapStateToProps, { initializeData })(App);
