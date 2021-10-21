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
import GetQoute from './pages/GetQuote/GetQoute';
import DashboardPage from './pages/Landingpage/LandingPage'
import PaymentPage from './pages/PaymentPage/PaymentPannel';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes path="/" component={DashboardPage} exact/>
          <Routes path="/login" component={Login} />
          <Routes path="/sign-up" component={Signup} />
          <Routes path="/forgot-password" component={Forgot} />
          <Routes path="/get-quote" component={GetQoute}/>
          <Routes path="/payment" component={PaymentPage}/>
      </div>
    </Router>
  );
}

export default App;