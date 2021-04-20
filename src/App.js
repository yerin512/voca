import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  const name ="yerin";
  const naver= {
    name: "네이버",
    url: "https://naver.com",
  }
  return (
    <div className="App">
      <Hello />
      <Welcome />
      <h1>Hello, {name}
      </h1>
      <a href={naver.url}>{naver.name}</a>
      <div className={styles.box}>box</div>
    </div>
  );
}

export default App;
