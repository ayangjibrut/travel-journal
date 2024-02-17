import path from "../images/map-marker.png"

function Section(props) {
    return (
        <div class="container" className="container">
            <img src={props.imageUrl} class="destination-img" className="destination-img" alt="Scenery" />
            <div class="content--wrapper" className="content--wrapper">
                <div class="location--wrapper" className="location--wrapper">
                    <img src={path} class="path--" className="path--" alt="Path"/>
                    <h4>{props.location}</h4>
                </div>
                <a class="gray--" className="gray--" href={props.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <h3>
                    {props.startDate} - 
                    <span> {props.endDate}</span>
                </h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Section