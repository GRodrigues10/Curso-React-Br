import React from 'react';
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/Index";

function App() {
  return (
    <>
      <Header />
      <Banner image="imgg" />
      <Container>
        <h2>Testando</h2>
        <p>Safosadjfóasjfgóasgsdhsfghg</p>
      </Container>
      <Footer />
    </>
  );
}

export default App;