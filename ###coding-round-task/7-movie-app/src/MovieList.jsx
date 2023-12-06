import MovieCard from "./MovieCard";

const MovieList=()=>{

    const totalMovies =[
        {
          poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
          title:"Array iterate  throw a map function and recive the data other  page-",
          plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
          price:"Rs. 101",
          rating:"6",
          counter:0,
          incIcon:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
          decIcon:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
          delIcon:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
          addFav:"favourite",
          AddCart:"Add to Cart",
        },
        {
          poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
          title:"Array iterate  throw a map function and recive the data other  page-",
          plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
          price:"Rs.3003",
          rating:"3",
          counter:0,
          incIcon:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
          decIcon:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
          delIcon:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
          addFav:"favourite",
          AddCart:"Add to Cart",
        }
      ]
    

    return(
        <>
        {
            totalMovies.map((item)=>(
                 <MovieCard data={item}/>))
        }
       
        </>
    )
}

export default MovieList;