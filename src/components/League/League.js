import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './League.css'
import { useHistory } from 'react-router';

const League = (props) => {
  const { strLeague, strSport, idLeague } = props.league;
  const [league, setLeague] = useState([]);
  const { strBadge } = league;
  // console.log(league)


  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    fetch(url)
      .then(res => res.json())
      .then(data => setLeague(data.leagues[0]));
  }, [idLeague])

  const history = useHistory();
  const setLeagueDetailUrl = (idLeague) => {
    const url = `/leagueDetail/${idLeague}`
    history.push(url);
  }

  return (
      <div class="card align-items-center mb-3 mt-3">
            <img src={strBadge} class="card-img-top w-50 h-50" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">{strLeague}</h5>
              <p class="card-text">Sports type: {strSport}</p>
              <button onClick={() => setLeagueDetailUrl(idLeague)} className="btn btn-primary btnStyle">Explore  <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
    
  );
};

export default League;