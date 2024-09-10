import MovieCard from './MovieCard';

const MoviesList = ({ data }) => {
    const renderedMoviesList = data.map((movie)=>{
        return <MovieCard key ={movie.index} title ={movie.title}  released ={movie.released} rated ={movie.rated}  director ={movie.director} stars ={movie.stars} genres ={movie.genres} viewed ={movie.viewed} image ={movie.image} imdb ={movie.imdb}/>
    })
    return(
        <div className='flex flex-col flex-wrap space-y-2 md:flex-row md:space-y-2 md:space-x-4'>
            {renderedMoviesList}

        </div>
    )
}

export default MoviesList;