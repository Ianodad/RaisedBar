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
            <div>
               <div class="card text-left">
                 <img class="card-img-top" src="holder.js/100px180/" alt="">
                 <div class="card-body">
                   <h4 class="card-title">Title</h4>
                   <p class="card-text">Body</p>
                 </div>
               </div>
            </div>
        )
    }
}

export default index
