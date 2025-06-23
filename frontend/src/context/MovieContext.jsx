import { createContext , useState , useEffect , useContext } from "react";

const MovieContext = createContext()
export const useMovieContext =()=> useContext(MovieContext)

export const MovieProvider = ({children}) =>{

    const [favourites , setFavourites] = useState(() => {
        // Initialize from localStorage on component mount
        const storedFavs = localStorage.getItem("favourites")
        return storedFavs ? JSON.parse(storedFavs) : []
    })

    // This useEffect is no longer needed since we initialize from localStorage in useState
    // useEffect(()=>{
    //     const storedFavs = localStorage.getItem("favourites")
    //     if(storedFavs)setFavourites(JSON.parse(storedFavs))
    // },[])

    useEffect(()=>{
        localStorage.setItem('favourites',JSON.stringify(favourites))
    },[favourites])

    const addToFavourites = (movie) =>{
        // Check if movie is already in favourites to avoid duplicates
        if (!isFavourite(movie.id)) {
            setFavourites(prev => [...prev, movie])
            console.log(`Added movie to favorites: ${movie.title}`)
        }
    }

    const removeFromFavourites = (movieId) =>{
        setFavourites(prev => {
            const newFavs = prev.filter(movie => movie.id !== movieId)
            console.log(`Removed movie from favorites, ID: ${movieId}`)
            return newFavs
        })
    }
    
    const isFavourite = (movieId) => {
        return favourites.some(movie => Number(movie.id) === Number(movieId))
    }

    const value = {
        favourites ,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}