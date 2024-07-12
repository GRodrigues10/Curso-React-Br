import React from 'react';
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/Index";
import Card from './components/Card/Index';
import Category, {categories, filterCategory}  from './components/Category/Index';


function App() {
  return (
    <>
      <Header />
      <Banner image="imgg" />
      <Container>

      {
  categories.map((category, index) => (
    <Category category={category} key={index}>
      {filterCategory(index).map(video => (
        <Card id={video.id} key={video.id} />
      ))}
    </Category>
  ))
}

       

     



      </Container>
      <Footer />
    </>
  );
}

export default App;