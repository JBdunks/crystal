import { PiKnifeBold } from "react-icons/pi"
import { GiPistolGun } from "react-icons/gi";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { GiDramaMasks } from "react-icons/gi";
import { GiMonsterGrasp } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";

import { useState } from 'react';
import MoviesList from './MoviesList';

const SearchBar = ({ data }) => {

    const [title, setTitle] = useState('')
    const [ratings, setRatings] = useState([])
    const [decade, setDecade] = useState([])
    const [genre, setGenre] = useState('')

    const handleChange = (event) =>{
        setGenre('')
        setRatings([])
        setDecade([])
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
    }

// filter methods-----------
    const getRatings =(r) => {
        setGenre('')
        setDecade([])
        setRatings(data.filter((movie)=> movie.rated == r))
    }

    const getDecade = (begin, end) =>{
        setGenre('')
        setRatings([])
        setDecade(data.filter((movie)=> movie.released >= begin && movie.released < end))
    }

    const getGenre =(g) => { 
        setDecade([])
        setRatings([])
        setGenre(data.filter((movie) => movie.genres.includes(g)))
        console.log(genre)
    }
    
    return(
        <>
        <div className = 'bg-gray-400 '>
            <div className = 'max-w-4xl mx-auto p-6 space-y-6'>
            <h3></h3>
            <form onSubmit ={handleSubmit} className = 'relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-black rounded-lg md:flex-row md:space-y-0 md:space-x-3'>
                <input type="text"  value={title} onChange= {handleChange} className = 'flex-1 p-3 border-2 rounded-lg placeholder-gray-700 focus:outline-none'placeholder ='enter title'/>
                <button className="px-10 py-3 border border-red-900 bg-white text-gray-700 rounded-lg focus:outline-none md:py-2
                 hover:bg-red-200 hover:text-red-600 hover:shadow-md hover:border-red-600 hover:border-2">Search Movies</button>
            </form>
        {/* turn into modal */}
            <div className="flex flex-row">
                <div>
                    <p>By Decade</p>
                        <div className="flex flex-row flex-wrap space-x-2 space-y-1 items-center">
                            <button onClick ={()=>getDecade(1930,1940)}className="g-btn">1930's</button>
                            <button onClick ={()=>getDecade(1940,1950)}className="g-btn">1940's</button>
                            <button onClick ={()=>getDecade(1950,1960)}className="g-btn">1950's</button>
                            <button onClick ={()=>getDecade(1960,1970)}className="g-btn">1960's</button>
                            <button onClick ={()=>getDecade(1970,1980)} className="g-btn">1970's</button>
                            <button onClick ={()=>getDecade(1980,1990)} className="g-btn">1980's</button>
                            <button onClick ={()=>getDecade(1990,2000)} className="g-btn">1990's</button>
                            <button onClick ={()=>getDecade(2000,2010)} className="g-btn">2000's</button>
                            <button onClick ={()=>getDecade(2010,2020)} className="g-btn">2010's</button>
                            <button onClick ={()=>getDecade(2020,2030)} className="g-btn">2020's</button>
                        </div>
                </div>
                <div>
                    <p>By Genre</p>
                        <div className="flex flex-row flex-wrap space-x-2 space-y-1 items-center">
                            <button onClick ={()=>getGenre('Action')} className="g-btn"><GiPistolGun /><p>Action</p></button>
                            <button onClick ={()=>getGenre('Comedy')} className="g-btn"><MdOutlineTheaterComedy /><p>Comedy</p></button>
                            <button onClick ={()=>getGenre('Drama')} className="g-btn"><GiDramaMasks /> <p>Drama</p></button>
                            <button onClick ={()=>getGenre('Horror')} className="g-btn"><GiMonsterGrasp /><p>Horror</p></button>
                            <button onClick ={()=>getGenre('Romance')} className="g-btn"><FaRegHeart /><p>Romance</p></button>
                            <button onClick ={()=>getGenre('Thriller')} className="g-btn"><PiKnifeBold /><p>Thriller</p></button>
                        </div>
                </div>
                <div>
                    <p>By Rating</p>
                    <div className="flex flex-row flex-wrap space-x-2 space-y-1 items-center">
                            <button onClick ={()=>getRatings('G')} className="g-btn">Rated G</button>
                            <button onClick ={()=>getRatings('PG')} className="g-btn">Rated PG</button>
                            <button onClick ={()=>getRatings('PG-13')} className="g-btn">Rated PG-13</button>
                            <button onClick ={()=>getRatings('R')} className="g-btn">Rated R</button>
                            <button onClick ={()=>getRatings('Approved')} className="g-btn">Approved</button>
                            <button onClick ={()=>getRatings('NR')} className="g-btn">Not Rated</button>
                        </div>
                </div>
            </div>
            </div>
        </div>
        {   ratings.length !== 0 ? 
            <MoviesList data={ratings.map((movie)=>movie)}/> 
            :
            decade.length !== 0 ? 
            <MoviesList data ={decade.map((movie)=>movie)} />
            :
            genre ? 
            <MoviesList data={genre.map((movie)=>movie)}/> 
            :
            <MoviesList data ={data.filter((movie)=>movie.title.includes(title))}/>
        }
        </>
    )
}

export default SearchBar;

//border-red-900 bg-white text-gray-700 shadow-gray-700 hover:bg-red-200 hover:text-red-600 hover:shadow-md hover:border-red-600 hover:border-2