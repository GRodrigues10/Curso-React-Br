import styles from './Search.module.css'
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import VideoList from '../../components/VideoList';
import videos from '../../Json/videos.json'

function Search(){
    return(<>
                <Header/>
                <Container>
                    <section className={styles.search}>
            
                            <h2>Pesquisar</h2>
                            <VideoList videos={videos}/>
                       
                    </section>
                </Container>
                <Footer/>
           </>)
}

export default Search;