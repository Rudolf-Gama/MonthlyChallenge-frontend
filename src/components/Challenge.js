function Challenge({challenge}){
    return(
        <div>
        <a href="#" className="list-group-item list-group-item-action " aria-current="true">
            <div className="d-flex w-100 justify-content-between">
            <h5>{challenge.month}</h5>
            </div>
            <p>{challenge.description}</p>
        </a>
        </div>
    );
}

export default Challenge;