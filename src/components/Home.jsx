import axios from "axios";
import { useEffect, useState } from "react";
import '../style/Home.scss';
import Episodes from "./Episodes";

const Home = () => {
    const [animes, setAnimes] = useState([]);
    const [showEpisodes, setShowEpisodes] = useState(false);
    const [selectedAnime, setSelectedAnime] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/anime?page=0')
            .then(response => {
                setAnimes(response.data);
            });
    }, []);

    const handleAnimeClick = (anime) => {
        setSelectedAnime(anime);
        setShowEpisodes(true);
    }

    return (
        <>
        {!showEpisodes ? (
            <div className="animes">
            {animes.map(anime => (
                <div className="anime" key={anime.name} onClick={() => handleAnimeClick(anime)}>
                    <img src={anime.imageUrl} alt={anime.name}></img>
                    <h1>{anime.name}</h1>
                    <p>{anime.genre}</p>
                </div>
            ))}
        </div>
        ) : (
            <Episodes anime={selectedAnime}/>
        )}
        </>  
    );
}

export default Home;