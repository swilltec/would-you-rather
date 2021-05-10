import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateQuestion from "./pages/CreateQuestion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Poll from "./pages/Poll";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/poll/:id">
          <Poll />
        </Route>
        <Route exact path="/create-question">
          <CreateQuestion />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
