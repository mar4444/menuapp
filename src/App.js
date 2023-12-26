import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
       <Switch>
        <Route exact path="/">
          <Home />
        </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
