import Header from '../../components/Header/Index'
import Container from '../../components/Container/index'
import Footer from '../../components/Footer';
import styles from './watch.module.css';



function Watch(){
    return(<>

        <Header></Header>
        <Container>
            <section className={styles.watch}>
                        <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=UzBhjkWg5CLbi5VE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </Container>
        <Footer></Footer>
        
               
           </>)
}

export default Watch;