import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome'

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
      <h1 style={{
        color: "gold",
        backgroundColor:"gray"
      }}>Hello, {name}
      <p>{2+3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
