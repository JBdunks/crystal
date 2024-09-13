import data from './movies.json';
import Top from './components/Top';
import SearchBar from './components/SearchBar';
function App() {

  const totalMovies =(data.length)
  return (
    <div className='overflow-hidden'>
      <Top  total= {totalMovies}/>
      <SearchBar data= {data}/>
    </div>
  )
}

export default App
