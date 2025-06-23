import '../css/Favourites.css'
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';




function Favourites() {
    const { favourites } = useMovieContext();
    
    if (!favourites || favourites.length === 0) {
        return <div className="favourites-empty">
            <h2>No Favourites yet</h2>
        </div>
    }
    
    return (
        <div className='favourites'>
            <h2>Your Favourites</h2>
            <div className="movies-grid">
                {favourites.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
export default Favourites;