import logo from './logo.svg';
import './App.css';
import User from './pages/Users/User';
import SaveUser from './pages/SaveUser/SaveUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={User} exact/>
        <Route path="/saveuser" component={SaveUser} />
      </Switch>
    </div>
  );
}

export default App;
