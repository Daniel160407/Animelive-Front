import axios from "axios";
import { useEffect, useState } from "react";
import '../style/Episodes.scss';
import Player from "./Player";

const Episodes = ({ anime }) => {
    const [episodesBySeason, setEpisodesBySeason] = useState({});
    const [showPlayer, setShowPlayer] = useState(false);
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/episode?anime=${anime.name}`)
            .then(response => {
                const groupedEpisodes = response.data.reduce((acc, episode) => {
                    if (!acc[episode.season]) {
                        acc[episode.season] = [];
                    }
                    acc[episode.season].push(episode);
                    return acc;
                }, {});
                setEpisodesBySeason(groupedEpisodes);
            });
    }, [anime.name]);

    const handleEpisodeClick = (episode) => {
        setSelectedEpisode(episode);
        setShowPlayer(true);
    }

    return (
        <>
        {!showPlayer ? (
          <div className="episodes">
            {Object.keys(episodesBySeason).map(season => (
                <div key={season} className="season">
                    <h2>{season} Сезон</h2>
                    <div className="episode-list">
                        {episodesBySeason[season].map((episode, index) => (
                            <div 
                                key={index} 
                                className="episode"
                                onClick={() => handleEpisodeClick(episode)}
                            >
                                {episode.episode} серия
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>  
        ) : (
            <Player episode={selectedEpisode}/>
        )}
        </>
        
    );
}

export default Episodes;
