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

//    const snapshot = await firebase.firestore().collection('Cocktail').get()
//     console.log(snapshot.docs.map(doc => (doc.data())))
//    return snapshot.docs.map(doc => (doc.data()));





return await firebase.firestore().collection("Cocktail")
.get()
.then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  // console.log(data);
    console.log(dayjs(data[0].dateCreated).fromNow(true))
    console.log(dayjs(data[0].dateCreated).format('DD/MM/YYYY'))
      this.setState({ data: data });
    });
}
    render() {
      const {data} = this.state
      console.log(data[0])
      // console.log(dayjs(dayjs(data[0].dateCreated).format('dd')))
    // console.log(dayjs(data[0].dateCreated).fromNow(true))
        return (
          <div className="container d-flex flex- row" style={{top:'10%'}}>
            {data && data.map((item, i) => (
              <div key={i} className="card mx-2" style={{ width: "20rem" }}>
              <div className="card-body">
                <h4 className="card-title">{item.drinkName}</h4>
                <h6 className="card-subtitle mb-2 text-muted">Date</h6>
                <p className="card-text">{item.ingredient1}, {item.ingredient2}, {item.ingredient3}</p>
                <NavLink to={`/details/${item.drinkName}`}>
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
