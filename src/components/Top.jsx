import { useState } from 'react'
import SearchBar from './SearchBar'
import Info from './Info'
import clcc from '../assets/clcc.webp'

const Top = ({ total, data }) => {
    const [page, setPage] = useState(true)

    const handleClick = () =>{
        setPage(!page)
    }

    return(
        <>
        <div className = 'relative flex flex-row bg-black justify-between w-screen'>
           <img className = 'max-w-32' src={clcc} alt="" />
           <button className ='g-btn absolute top-0 right-0 mt-1 mr-4' onClick ={handleClick}>
           { page? 'Info' : "Search"}
            </button>
           <p className = 'absolute bottom-0 right-0 text-white font-mono mr-4 mb-1'><span className ='text-red-600'>{total} </span>Tuesday Nights</p>
        </div>
        {
            page ? <SearchBar data= {data}/> : <Info />
        }
        </>
    )
}

export default Top;