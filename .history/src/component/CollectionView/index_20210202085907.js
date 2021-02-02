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
            <div className="card">
                <div className="card-body">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <h6 class="card-subtitle text-muted">Subtitle</h6>
                  </div>
                  <img src="holder.js/100x180/" alt="">
                  <div class="card-body">
                    <p class="card-text">Text</p>
                    <a href="#" class="card-link">Link 1</a>
                    <a href="#" class="card-link">Link 2</a>
                  </div>
                </div>
                </div>
            </div>
        )
    }
}

export default index
