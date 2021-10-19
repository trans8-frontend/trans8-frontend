import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './Layout/Routes';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Forgot from './pages/ForgotPassword/Forgot';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes path="/" component={Login} exact/>
          <Routes path="/sign-up" component={Signup} />
          <Routes path="/forgot-password" component={Forgot} />
      </div>
    </Router>
  );
}

export default App;
