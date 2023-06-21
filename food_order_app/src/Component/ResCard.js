import './ResCard.css';

const ResCard = (props) =>{
    return(
        <div className="card">
            <div className="food-img">
                <img className="food-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"></img>
            </div>
            <h3>{props.name}</h3>
            <h4>{props.location}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    )
}

export default ResCard;