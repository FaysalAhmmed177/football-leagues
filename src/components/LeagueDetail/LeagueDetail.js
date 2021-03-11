import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import maleImg from '../../Photo/male.png'
import femaleImg from '../../Photo/female.png'


const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState([]);
    const { strBanner, dateFirstEvent, strLeagueAlternate, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strYoutube } = league;

    console.log(league);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [leagueId])

    let conditionalImg;
    if (strGender === 'Male') {
        conditionalImg = <img src={maleImg} alt="" />
    }
    else if (strGender === 'Female') {
        conditionalImg = <img src={femaleImg} alt="" />
    }

    return (
        <div className="bg-info">
            <div>
                <img className="w-100 mt-0" src={strBanner} alt="" />
            </div>
            <div className="container my-3">
                <div className="row text-white bg-dark align-items-center rounded">
                    <div className="col-lg-6">
                        <h1>{strLeagueAlternate}</h1>
                        <p>Founded: {dateFirstEvent}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sports type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>

                    <div className="col-lg-6  col-sm-12">
                        {conditionalImg}
                    </div>
                </div>
                <div className="text-white my-3">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>
            </div><br />
            <div className="text-center">
                <span><a href={`https://${strTwitter}`}><FontAwesomeIcon className="fa-2x bg-white rounded p-1 mx-2 mb-5" icon={faTwitter} /></a></span>
                <span><a href={`https://${strFacebook}`}><FontAwesomeIcon className="fa-2x bg-white rounded p-1 mx-2 mb-5" icon={faFacebook} /></a></span>
                <span><a href={`https://${strYoutube}`}><FontAwesomeIcon className="fa-2x bg-white rounded p-1 mx-2 mb-5" icon={faYoutube} /></a></span>
            </div>
        </div>
    );
};

export default LeagueDetail;