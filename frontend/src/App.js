import Header from './components/layout/Header' ;
import Nav from './components/layout/Nav' ;
import Footer from './components/layout/Footer' ;
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import InfoPage from './pages/InfoPage';

import "./App.css";


function App() {
  return (
  <div className="App">
  <Router>
      <Header></Header>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/info" exact component={InfoPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer/>
    </Router>
  </div>     
  );
}

export default App;
