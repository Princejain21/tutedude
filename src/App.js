import './App.css';
import Breadcrumb from './Component/Breadcrumb';
import MainCard from './Component/MainCard';
import Nav from './Component/Nav';
import ReferCode from './Component/ReferCode';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Screen2 from './Component/Screen2';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Breadcrumb />
            <Screen2/>
          </Route>
          <Route exact path="/:referEarn">
            <Breadcrumb />
            <ReferCode />
            <MainCard />
          </Route>


        </Switch>

      </Router>

    </div>
  );
}

export default App;
