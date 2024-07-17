import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ id }) {
    return (
        <>
            <section className={styles.card}>
                <Link to={`/Watch/${id}`}>
                    <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Thumbnail do vídeo" />
                </Link>
            </section>
        </>
    );
}

export default Card;