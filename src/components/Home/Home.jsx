import React, { useEffect, useState } from 'react'
import Axios from 'axios';




export default function Home() {

  let [trendingMovies , setTrendingMovies] = useState([]);

  async function getTrendingMovies(){
    let {data} = await Axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=2e02cb6f574a4fb754bfe4fb93ac6041')

    // console.log(data)
    setTrendingMovies(data.results);
  }

  const[count , setCount] = useState(0);

  function change(){
    setCount(count+1)
  }

useEffect(()=>{
  getTrendingMovies()
  console.log('useEffect didMount call')
  return ()=>{
    console.log('useEffect willUnmount call')
  }
},[]);

useEffect(()=>{
  if(count === 0)
  return;
  console.log('useEffect didUpdate call')
},[count]);



  return (
    <>
      {/* <div className="container my-5 py-5 w-100">
        <h1 className='text-center'>web</h1>
        <h2 className='text-center'>Counter : {count}</h2>
        <button onClick={change} className="btn btn-outline-dark w-100">click me</button>
      </div> */}
      <div className="row  g-3 justify-content-center  text-center">
        { trendingMovies.length > 0 ?  trendingMovies.map((movie , index)=>
        <div key={index} className='col-md-3'>
          <div className="card movie">
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" className='w-100' />
            <h6 className='fw-bold'>{movie.title}</h6>
            <p>{movie.overview}</p>
          </div>
        </div>):<i className='fas fa-spinner fa-spin fa-5x'></i>}
      </div>
    </>
  )
}
