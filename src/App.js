import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import styles from './App.module.css';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';


function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
