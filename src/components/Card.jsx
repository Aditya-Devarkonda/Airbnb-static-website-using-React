import starIcon from "/Images/Star.png"
import Data from "../components/data.jsx"

function Card(props){
    return(
        <>
            <div className="Card">
                {props.item.openSpots===0 && <p className="Card-soldOutBadge">SOLD OUT</p> 
                || 
                props.item.location==="Online" && <p className="Card-soldOutBadge">ONLINE</p>}
                <img src={props.item.coverImg} className="Card-img Card-img-1" alt="Image of lady instructor" />
                <div className="Card-flex">
                    <img src={starIcon} alt="star icon" className="Card-star-icon" /> 
                    <p className="Card-starRating Card-group-style">{props.item.stats.rating}</p>
                    <p className="Card-reviewCount Card-group-style">({props.item.stats.reviewCount})</p>
                    <p className="Card-dot Card-group-style">.</p>
                    <p className="Card-location Card-group-style" >{props.item.location}</p>
                </div>
                <p className="Card-title Card-group-style" >{props.item.title}</p>
                <p className="Card-price Card-group-style"><span className="Card-price-bold Card-group-style">From ${props.item.price}</span> / person</p>
            </div>
       </>
    )
}

export const loopCards= Data.map(function(item){
    return(
      <Card 
       item={item}
      />
    )
  })