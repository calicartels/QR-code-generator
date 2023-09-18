
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import QR from './components/QR';
import Home from './components/pro/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInComponent from './components/signin/SignInComponent';
import Dashboard from './components/pro/Dashboard/Dashboard';
import Profile from './components/pro/Profile';
import Website from './components/pro/pro qrs/Website';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <SignInComponent signin />
          </Route>
          <Route path='/register'>
            <SignInComponent  />
          </Route>
          <Route path='/pro'>
            <Header pro />
            <Home />
          </Route>
          <Route path='/dashboard'>
            <Header pro />
            <Dashboard />
          </Route>
          <Route path='/profile'>
            <Header pro />
            <Profile />
          </Route>

          <Route path={`/website`} >
            <Header pro />
            <Website />
            
          </Route>


          
           <Route path="/">
            <Header></Header>
              <Body />

          </Route>
        </Switch>


      </Router>
      
    </div>
  );
}

export default App;
