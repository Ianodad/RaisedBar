import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({data}) => {
    console.log(data)
    return (
       <Link to={`/details/${data.idDrink}`}> 
       <div className="profile-card-2">
        <img className="img img-responsive" src={data.strDrinkThumb}/>
        <div className="profile-name">{data.strDrink}</div>
        <div className="profile-username">{data.strDrink}</div>
        <div className="profile-icons"><a href="#"><i className="fa fa-facebook" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-linkedin" /></a></div>
      </div>
      </Link>
    )
}

export default Card

