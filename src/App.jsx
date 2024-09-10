import data from './movies.json';
import MoviesList from './components/MoviesList';
function App() {

  console.log(data.length)
  return (
    <div>
        <MoviesList  data= {data}/>
    </div>
  )
}

export default App
