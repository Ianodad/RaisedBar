import React, { Component } from "react";
import cocktaildb from "../api/cocktaildb";
import Layout from "../component/Layout";
import firebase from "../firebase";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { cocktailDetail: {}, search: "" };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const data = await this.fetchDataCocktailDB(id)
    if (!data){
      //  console.log(data)
       await this.fetchDataFireBase(id);
    }
  };

  fetchDataCocktailDB = async (id) => {
    const {data} = await cocktaildb.getCocktailDetail(id);
    if (!data) {
      return false
    }else {
      this.setState({cocktailDetail:data.drinks[0]})
      return true
    }
  };

  fetchDataFireBase = async (id) => {
    const drinkRef = firebase.firestore().collection("Cocktails").doc(id);

    drinkRef.get().then((doc) => {
      if (!doc.exists) return;
      // console.log(doc.data());
      this.setState({cocktailDetail: doc.data()})
    });
  };

  render() {
    const { cocktailDetail } = this.state;
    console.log(cocktailDetail);
    return (
      <Layout className="container-fluid h-100">
        {cocktailDetail.strDrink && (
          <div
            className="row col-10 mx-auto my-auto h100"
            style={{ top: "20%" }}
          >
            <div className="content row container mx-auto my-auto w-100 h-50 ">
              <div className="col-md-5 col-lg-5 my-auto">
                <div className="card" style={{}}>
                   {cocktailDetail.strDrinkThumb && (<div className="card-body">
                   <img
                      className="card-img-top position-relative"
                      src={cocktailDetail.strDrinkThumb}
                      style={{ width: "24em", height: "auto" }}
                    />)}
                    {/* image */}
                  </div>()
                </div>
              </div>
              <div className="col-md-7 col-lg-7">
                <div className="card h-80">
                  <div className="card-body">
                    <h2>{cocktailDetail.strDrink}</h2>
                    <div className="h3">{cocktailDetail.strCategory}</div>
                    <h3>Alcoholic {cocktailDetail.strAlcoholic} </h3>
                    <p>{cocktailDetail.strInstructions}</p>
                    <ul>
                      <li>{cocktailDetail.strIngredient1}</li>
                      <li>{cocktailDetail.strIngredient2}</li>
                      <li>{cocktailDetail.strIngredient3}</li>
                      <li>{cocktailDetail.strIngredient4}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

export default Details;
