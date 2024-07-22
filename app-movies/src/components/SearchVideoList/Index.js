import { useState } from 'react';
import styles from './Search.module.css';
import VideoList from '../../components/VideoList/index'

function filterVideos(videos, searchText ){
    // Filtrando vídeos por categoria ou títulos.
    return videos.filter((video)=> video.category.includes(searchText) || video.title.includes(searchText)
    )
}


function SearchVideoList({videos}){
    const [searchText, setSearchText] = useState();
    const foundVideos = filterVideos(videos, searchText);
    return (<>

            <section className={styles.container}>
                <input 
                type='search'
                placeholder='Digite um vídeo...' value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                />
                <VideoList videos={foundVideos}
                emptyHeading={`Sem vídeo sobre o ${searchText}`}/>
            </section>

    </>)
}

export default SearchVideoList;