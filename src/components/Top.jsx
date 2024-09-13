import clcc from '../assets/clcc.webp'

const Top = ({ total}) => {
    return(
        <div className = 'relative flex flex-row bg-black justify-between w-screen'>
           <img className = 'max-w-32' src={clcc} alt="" />
           <p className = 'absolute bottom-0 right-0 text-white font-mono mr-4 mb-1'><span className ='text-red-600'>{total} </span>Tuesday Nights</p>
        </div>
    )
}

export default Top;