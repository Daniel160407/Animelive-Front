import axios from "axios";
import { useEffect, useState } from "react";
import '../style/Home.scss';

const Home = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/anime?page=0')
            .then(response => {
                setAnimes(response.data);
            });
    }, []);

    return (
        <div className="animes">
            {animes.map(anime => (
                <div className="anime" key={anime.name}>
                    <img src={anime.imageUrl} alt={anime.name}></img>
                    <h1>{anime.name}</h1>
                    <p>{anime.genre}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;