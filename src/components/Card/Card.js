import React from 'react';

const Card = () => {
    return (
        
            <div class="col-md-4">
                <div class="card align-items-center ">
                    <img src={strBadge} class="card-img-top w-50 h-50" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">{strLeague}</h5>
                        <p class="card-text">Sports type: {strSport}</p>
                        <button onClick={() => setLeagueDetailUrl(idLeague)} className="btn btn-primary btnStyle">Explore  <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
        
    );
};

export default Card;