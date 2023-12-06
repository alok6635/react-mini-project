import { useState } from "react";

const MovieCard=({data})=>{
// console.log(data);

const[counter,setcounter]=useState(0)

return(
    <>
    <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={data.poster} alt="poster"/>
          </div>
          <div className="right">
            <div className="title">{data.title}</div>
            <div className="plot">{data.plot}</div>
            <div className="price">{data.price}</div>
            <div className="review">
              <div className="rating">{data.rating}</div>
              <div className="star-dis">
             <img src={data.decIcon} className="inc_star" onClick={()=>setcounter(counter+1)}/>
             <span className="starCount">{data.counter}</span>
             <img src={data.incIcon} className="dec_star"/>
             <img src={data.delIcon} className="del_star"/>
              </div>
              <button className="favourite-btn">{data.addFav}</button>
              <button className="cart-btn">{data.AddCart}</button>
            </div>
          </div>
        </div>
        </div>
    
    
    </>
)
    

}

export default MovieCard;