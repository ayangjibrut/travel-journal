// import logo from './logo.svg';
import Header from "./components/Header"
import Section from "./components/Section";
import Footer from "./components/Footer"
import data from "./components/data"
import "./style.css"
// import './App.css';

function App() {
  const cards = data.map(function(item) {
    return (
      <Section
        key={item.id}
        {...item}
        // item={item}
      />
    )
  })

  return (
    <div>
      <Header />
      <section>
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;

/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */