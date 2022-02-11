import axios from 'axios';
import { Route, Switch, useParams} from 'react-router-dom'
import Nav from './components/Nav';
import Movies from './components/Movie';
import { BASE_URL } from './globals'
import { useEffect, useState } from 'react';


function App() {

  const [movies, setMovies] =useState([])

  useEffect(()=> {
    async function allMovies() {
      const res = await axios.get(`${BASE_URL}/movies`);
      console.log(res)
      // setUsers(res.data);
    }
    allMovies()
  },[])


  return (
    <div className="App">
      < Nav />
      <Switch>
        <Route exact path="/" render={Movies} />
      </Switch>
    </div>
  );
}

export default App;
