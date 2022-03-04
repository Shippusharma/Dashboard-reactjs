import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import DarkMode from './context/DarkMode';

function App() {
  return (
    <DarkMode>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/about"> <About /> </Route>
        </Switch>
        <Footer />
      </Router>
    </DarkMode>
  );
}

export default App;
