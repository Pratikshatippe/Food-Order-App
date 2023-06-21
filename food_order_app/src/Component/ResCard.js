import './ResCard.css';

const ResCard = () =>{
    return(
        <div className="card">
            <div className="food-img">
                <img className="food-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"></img>
            </div>
            <h3>Pratiksha's kitchen</h3>
            <h4>Bangalore, Pune</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}

export default ResCard;