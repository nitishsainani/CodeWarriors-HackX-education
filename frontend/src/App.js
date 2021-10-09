import "./App.css";
import Navigation from "./components/navigation";
import Home from "./Layouts/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navigation />
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
