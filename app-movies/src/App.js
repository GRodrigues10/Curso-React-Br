import React from 'react';
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/Index";
import Card from './components/Card/Index';
import videos from './Json/db.json';

function App() {
  return (
    <>
      <Header />
      <Banner image="imgg" />
      <Container>
      <h2>Geografia</h2>
       <section className='cards'>
          

       {

          videos.map(video=>{
            return <Card id={video.id} key={video.id}></Card>
          })

       }


       </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;