import React, { Component } from 'react'

import firebase from '../../firebase'

class index extends Component {

    componentDidMount = async() => {

//    const snapshot = await firebase.firestore().collection('Cocktail').get()
//     console.log(snapshot.docs.map(doc => (doc.data())))
//    return snapshot.docs.map(doc => (doc.data()));


    return await firebase.firestore().collection("Cocktail")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log(data);
    //   this.setState({ users: data });
    });
}
    render() {
        return (
          <div className="container" style={{top:'10%'}}>
            { data && data.map((item, i) => (
              <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">NAME</h5>
                <h6 className="card-subtitle mb-2 text-muted">Date</h6>
                <p className="card-text">Instruction</p>
                <a href="/#" className="card-link">
                  View More
                </a>
              </div>
            </div>
            ))}
          </div>
        );
    }
}

export default index
