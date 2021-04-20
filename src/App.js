import './App.css';
import Header from './component/Header';
// import styles from './App.module.css';
import DayList from './component/DayList';
import Day from './component/Day';


function App() {
  return (
    <div className="App"> 
      <Header />
      <DayList />
      <Day />
    </div>
  );
}

export default App;
