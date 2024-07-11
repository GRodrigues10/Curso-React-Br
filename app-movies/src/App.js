import React from 'react';
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/Index";
import Card from './components/Card/Index';
import videos from './Json/videos.json';
import Category from './components/Category/Index';

const categories = [
  'Geografia',
  'Como fazer e usar',
  'Astronomia e Geografia',
  'Climatologia, Meteorologia, Vegetação',
  'Geologia e Hidrografia'
]

function filterCategory(id){
  return videos.filter(video=>video.category === categories[id]);
}



function App() {
  return (
    <>
      <Header />
      <Banner image="imgg" />
      <Container>

       <Category category={categories[0]}>

       {filterCategory(0).map(video=>{return <Card id={video.id} key={video.id}></Card>})}

       </Category>

       <Category category={categories[1]}>

       {filterCategory(1).map(video=>{return <Card id={video.id} key={video.id}></Card>})}

       </Category>

       <Category category={categories[2]}>

       {filterCategory(2).map(video=>{return <Card id={video.id} key={video.id}></Card>})}

       </Category>

       <Category category={categories[3]}>

       {filterCategory(3).map(video=>{return <Card id={video.id} key={video.id}></Card>})}

       </Category>


       <Category category={categories[4]}>

       {filterCategory(4).map(video=>{return <Card id={video.id} key={video.id}></Card>})}

       </Category>



      </Container>
      <Footer />
    </>
  );
}

export default App;