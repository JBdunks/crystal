const MovieCard =({ title, released, rated, director, stars, genres, viewed, image, imdb }) => {
    return(
        <div className = 'w-full md:w-96 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 p-2 pt-6 border border-black rounded-xl'>
            <div className='flex justify-center'>
                <img src={image} alt='poster' className = 'w-62 h-96 shadow-sm border border-black duration-200 hover:scale-110'/>
            </div>
           <h2 className ='font-bold text-xl text-center text-wrap mb-2 mt-3 text-white'>{title}</h2>
           <div>
                <div className='flex flex-row justify-between border-b border-black text-white'>
                    <p className = 'font-bold'>{released}</p>
                    <p className ='font-bold'>Rated: <span className ='text-white'>{rated}</span ></p>
                    <p>{new Date(viewed).toString().slice(3,15)}</p>
                </div>
                <div className = ' border-b border-black mb-2 text-white'>
                    <p className = 'font-bold text-lg'>Director:<span className ='font-medium text-normal ml-2 text-black'>{director}</span></p>
                    <p className = 'font-bold text-lg'>Stars:<span className ='font-medium text-normal text-pretty ml-2 text-black'>{stars.join(', ')}</span></p>
                    <p className = 'font-bold text-lg'>Genres:<span className ='font-medium text-normal ml-2 text-black'>{genres.join(', ')}</span></p>
                </div>
           </div>
           <div><a href={imdb} target ="_blank" className ='font-bold  text-white hover:text-red-500'>IMDB</a></div>
        </div>
    )
}

export default MovieCard;