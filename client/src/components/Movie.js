import MoviesCard from "./MovieCard";
import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/movies.css'

function Movies() {
    const [movies, setMovies] =useState([])

    useEffect(()=> {
    async function allMovies() {
        const res = await axios.get(`${BASE_URL}/movies`);
        console.log(res.data)
        // setUsers(res.data);
    }
    allMovies()
    },[])

    return (
        <div className="Movies">
        <p>Movies</p>
        <MoviesCard />
        </div>
    );
    }
    
    export default Movies;