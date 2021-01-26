import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/products" exact component={Product}/>
        <Route path="/contact-us" exact component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
