import "./App.css";

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const images = importAll(require.context("../public/imgs", false, /\.(png|jpe?g|svg)$/));

  const randomImages = shuffle(images);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Future home of <code>DickSpiders.com</code>
        </p>
        <div className="spiders">
          {randomImages.map((image) => (
            <img src={image.default} className="App-logo" alt="logo" />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
