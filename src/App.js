import "./App.css";
// import { quotes } from "./quotes";

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const quotes = [
    "Fear is temporary and useless, glory is forever",
    "The hills are alive with fucks I give on select topics.",
    "Punch a velociraptor in its dick",
    "You are the protagonist",
    "After these messages, we'll be right back",
    "Go deep throat a cactus.",
    "Anything is a dildo if you're brave enough",
    "What kind of fuckery is this?",
    "If you don't like something it's okay to shut the fuck up about it and find something you do like.",
    "Life is like a sewer… what you get out of it depends on what you put into it.",
    "Bad decisions make good stories.",
    "Well-behaved women seldom make history.",
    "I didn’t fail the test. I just found 100 ways to do it wrong.",
    "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    "Don't Panic.",
    "If there's anything more important than my ego around, I want it caught and shot now.",
    "I never could get the hang of Thursdays.",
    "Nicky had to stop fucking John because John's plague of dickspiders were irritating her twat.",
    "Merv aka 'The Cactai' was handed his nickname due to the appearance of his erect penis with an excessive amount of dickspiders.",
    "Murray was scared to shower in the changerooms after the footy due to the boys ribbing him about his dickspider epidemic.",
  ];

  const images = importAll(require.context("../public/imgs", false, /\.(png|jpe?g|svg|gif)$/));

  // const randomImages = shuffle(images);

  const randomSrc = images[Math.floor(Math.random() * images.length)].default;
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Future home of <code>DickSpiders.com</code>
        </p>
        <div className="spiders">
          <img
            src={randomSrc}
            className={Math.round(Math.random()) === 1 ? "App-logo" : "App-logo2"}
            alt="logo"
          />
        </div>
        <h1 style={{ maxWidth: "80%", margin: "0px auto" }}>{randomQuote}</h1>
      </header>
    </div>
  );
}

export default App;
