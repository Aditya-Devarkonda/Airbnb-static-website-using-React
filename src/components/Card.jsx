import starIcon from "/Images/Star.png"

export function Card(props){
    return(
        <>
            <div className="Card">
                <img src={props.img} className="Card-img Card-img-1" alt="Image of lady instructor" />
                <div className="Card-flex">
                    <img src={starIcon} alt="star icon" className="Card-star-icon" /> 
                    <p className="Card-starRating Card-group-style">{props.starRating}</p>
                    <p className="Card-reviewCount Card-group-style">({props.reviewCount})</p>
                    <p className="Card-dot Card-group-style">.</p>
                    <p className="Card-location Card-group-style" >{props.location}</p>
                </div>
                <p className="Card-title Card-group-style" >{props.title}</p>
                <p className="Card-price Card-group-style"><span className="Card-price-bold Card-group-style">From ${props.price}</span> / person</p>
            </div>
       </>
    )
}