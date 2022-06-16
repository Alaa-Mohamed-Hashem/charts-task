import './App.css';
import Users from './components/users/Users';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Gender from './components/charts/Gender';
import AgeChart from './components/charts/AgeChart';
import CountryChart from './components/charts/CountryChart';
import RegisteredDate from './components/charts/RegisteredDate';
import ArrayTask from './components/arrayTask/ArrayTask';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/array'>
          <ArrayTask />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/genderChart'>
          <Gender />
        </Route>
        <Route path='/ageChart'>
          <AgeChart />
        </Route>
        <Route path='/countryChart'>
          <CountryChart />
        </Route>
        <Route path='/dateChart'>
          <RegisteredDate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
