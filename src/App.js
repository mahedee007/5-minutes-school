
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import Erorr from './components/Erorr/Erorr';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path= '/'>
            <Home></Home>

          </Route>
          <Route exact path= '/home'>
            <Home></Home>

          </Route>
          <Route path= '/about'>
            <About></About>

          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/contacts'>
            <Contacts></Contacts>
          </Route>
          <Route path='*'>
            <Erorr></Erorr>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
