import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import data from "./components/data"
import "./style.css"

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

export default App