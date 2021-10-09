
import React, { lazy, Suspense } from "react";
import Navbar from "./components/navigation";
import Loading from "./components/base/loading";
import NotFound from "./components/base/notFound";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const Home = lazy(() => {
  return import("./pages/home");
});
const Login = lazy(() => {
  return import("./pages/login");
});
const Signup = lazy(() => {
  return import("./pages/signup");
});
const StudentDashboard=lazy(()=>{
  return import("./pages/StudentDashboard")
})

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />  
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route path="/student-dashboard" component={StudentDashboard} />
            <Route exact path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
