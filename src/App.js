import "./App.css";

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("../public/imgs", false, /\.(png|jpe?g|svg)$/));
  console.log("images: ", images);

  const rand = Math.floor(images.length * Math.random());
  console.log("rand: ", rand);

  const dickSource = images[rand].default;
  console.log("dickSource: ", dickSource);

  return (
    <div className="App">
      <header className="App-header">
        <img src={dickSource} className="App-logo" alt="logo" />
        <p>
          Welcome to the Future home of <code>DickSpiders.com</code>
        </p>
        <p>Reload to see a new dick spider</p>
      </header>
    </div>
  );
}

export default App;
