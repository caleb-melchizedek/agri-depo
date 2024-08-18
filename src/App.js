import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  LandingPage from './pages/landing'
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
