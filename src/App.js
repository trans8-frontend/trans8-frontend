import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './Layout/Routes';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
