import React from 'react';
import Header from '../../components/Header/Index';
import Container from '../../components/Container/index';
import Footer from '../../components/Footer';
import styles from './watch.module.css';
import { useParams } from 'react-router-dom';
import videos from '../../Json/videos.json';
import PageNotFound from '../PageNotFound/index';

function Watch() {
    const { id } = useParams(); // Destructuring para extrair o id diretamente
    const video = videos.find((video) => video.id === id);

    if (!video) {return <PageNotFound/>}

    return (
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <iframe
                        width="854"
                        height="480"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;