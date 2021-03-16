import logo from './logo.svg';
import './App.css';
import Header from './Components/app/Header';
import KnowMore from './Components/app/KnowMore';
import Services from './Components/app/Services';
import Perviousworks from './Perviousworks';
import Skills from './Components/app/Skills';
import Contact from './Components/app/Contact';
// import Work from './Components/app/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './Components/app/Banner';
import Works from './Components/app/Works';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact>
              <Banner />
          </Route>
          <Route path='/knowmore' exact>
            <KnowMore />
          </Route>
          <Route path='/skills'>
              <Skills/>
          </Route>
          <Route path='/services'>
              <Services/>
          </Route>
          <Route path='/works'>
            <Works/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
