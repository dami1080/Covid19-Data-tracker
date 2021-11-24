import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import { loadContinent } from './redux/contries/countries';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContinent());
  }, [dispatch]);

  return (
    <div className="App text-light">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:name">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
