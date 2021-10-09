import Navigation from "./components/navigation";
import Home from "./Layouts/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentDashboard from "./components/studentsDashboard/StudentDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/student-dashboard" component={StudentDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
