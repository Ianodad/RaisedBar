import React, { Component } from 'react';

import firebase from '../../firebase';

import { NavLink } from "react-router-dom";
var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)



class index extends Component {

   constructor(props) {
        super(props);
        this.state = { data: []};
  }

    componentDidMount = async() => {


return await firebase.firestore().collection("Cocktail")
.get()
.then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
      this.setState({ data: data });
    });
}
    render() {
      const {data} = this.state
      co
        return (
          <div className="container d-flex flex- row" style={{top:'10%'}}>
            {data && data.map((item, i) => (
              <div key={i} className="card mx-2" style={{ width: "20rem" }}>
              <div className="card-body">
                <h4 className="card-title" style={{fontWeight:'900'}}>{item.strDrink}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{dayjs(new Date(data[0].dateCreated.seconds * 1000)).fromNow()}</h6>
                <p className="card-text">{item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3}</p>
                <NavLink to={`/details/${item.strDrink}`}>
                    View More
                </NavLink>
              </div>
            </div>
            ))}
          </div>
        );
    }
}

export default index
