import MovieCard from './MovieCard';

const MoviesList = ({ data }) => {
    const renderedMoviesList = data.map((movie)=>{
        return <MovieCard key ={movie.index} title ={movie.title}  released ={movie.released} rated ={movie.rated}  director ={movie.director} stars ={movie.stars} genres ={movie.genres} viewed ={movie.viewed} image ={movie.image} imdb ={movie.imdb}/>
    })
    return(
        <div className='flex flex-col space-y-2 bg-black items-center pt-4'>
            {renderedMoviesList}

        </div>
    )
}

export default MoviesList;