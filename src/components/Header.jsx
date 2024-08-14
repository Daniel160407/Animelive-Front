import '../style/Header.scss';

const Header = () => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="header">
            <h1 onClick={handleReload} style={{ cursor: 'pointer' }}>AnimeLive</h1>
            <p>Смотри лучшие Аниме на нашем сайте с комфортом</p>
        </div>
    );
};

export default Header;
