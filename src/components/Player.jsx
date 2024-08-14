import '../style/Player.scss';

const Player = ({episode}) => {
    return (
        <div className="player">
            <h1>Сезон {episode.season}, серия {episode.episode}</h1>
            <video controls>
                <source src={episode.url} type="video/mp4" />
                Ваш браузер не поддерживает тег видео.
            </video>
        </div>
    );
}

export default Player;