import styles from './PageNotFound.module.css';
import erro404 from './erro404.png';
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer';


function PageNotFound(){

    return(<>
            <Header></Header>
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={erro404} alt='logo da página não localizada!'/>
            </section>
            <Footer></Footer>

           </>);
}

export default PageNotFound;