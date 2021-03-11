import React, { useEffect, useState } from 'react';
import League from '../League/League';
import stadiumImg from './bannerImg/stadium.jpg'
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    //console.log(leagues)
    return (
        <div>
            <div className="banner">
                <img className="mt-0" src={stadiumImg} alt="" />
                <div className="leagueTitle">Football League</div>
            </div>
            <div className="container">
                <div className="row w-100">
                    {
                        leagues.map((lg) => <div className="col-md-4 col-lg-3 col-sm-12"><League league={lg}></League></div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;