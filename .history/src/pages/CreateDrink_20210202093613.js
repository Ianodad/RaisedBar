import React, { Component } from "react";
import Layout from "../component/Layout/index";
import { Formik } from "formik";
import firebase from '../firebase'
import nextId from "react-id-generator";


import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  drinkName : Yup.string()
    .required()
    .email("well that's not an email")
  
});

class CreateDrink extends Component {

  componentDidMount = async()=>{
    
    return firebase.firestore().collection("Cocktail")
      .doc("DrinksCreated")
      .set({
        timecreate: firebase.firestore.FieldValue.serverTimestamp(),
        drinkName:'coke',
        ingredient1: "water",
        ingredient2: 'ice',
        ingredient3: "sugar",
        instructions:"mix all together"
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

  }

    handleCreateDrink = ({drinkName, ingredient1, ingredient2, ingredient3, instructions}) => {
      console.log(drinkName, ingredient1, ingredient2, ingredient3, instructions)
     return firebase.firestore().collection("Cocktail")
      .doc(drinkName)
      .set({
        idDrink:  nextId(),
        timeCreate: firebase.firestore.FieldValue.serverTimestamp(),
        drinkName: drinkName,
        ingredient1: ingredient1,
        ingredient2: ingredient2,
        ingredient3: ingredient3,
        instructions: instructions
      })
      .then(function () {
        console.log("Document successfully written!");
        window.location = "/";
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
     
    };
  render() {
    return (
      <Layout className="container-fluid h-100">
        <div
          className="card card-outline-secondary mx-auto"
          style={{ top: "20%", width:"25em" }}
        >
          <div className="card-header">
            <h3 className="mb-0 text-center" style={{}}>Create Drink</h3>
          </div>
          <div className="card-body mx-auto" >
            <Formik
              initialValues={{
                drinkName: "",
                ingredient1: "",
                ingredient2: "",
                ingredient3: "",
                file:"",
                instructions: "",
              }}
              validate={this.validationSchema}
              onSubmit={(values) => {
                this.handleCreateDrink(values);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  className="form"
                  role="form"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                      type="text"
                      name="drinkName"
                      onChange={handleChange("drinkName")}
                      onBlur={handleBlur}
                      // value={values.drinkName}
                      className="form-control"
                      id="drinkName"
                      placeholder="Drink Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ingredient1">Ingredient One</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange("ingredient1")}
                      // value={values.ingredient1}
                      onBlur={handleBlur}
                      id="ingredient1"
                      placeholder="Ingredient One"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ingredient2">Ingredient Two</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={values.ingredient2}
                      onChange={handleChange("ingredient2")}
                      onBlur={handleBlur}
                      id="ingredient2"
                      placeholder="Ingredient Two"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ingredient3">Ingredient Three</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={values.ingredient3}
                      onChange={handleChange("ingredient3")}
                      onBlur={handleBlur}
                      id="ingredient3"
                      placeholder="Ingredient Three"
                      required
                    />
                  </div>
                  {/* <div className="form-group">
                    <label for="file">File upload</label>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={handleChange("file")}
                      className="form-control"
                    />
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                      type="text"
                      className="form-control"
                      // value={values.instructions}
                      onChange={handleChange("instructions")}
                      id="instructions"
                      placeholder="Instructions"
                      rows="5"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg mx-auto"
                    >
                      Create Drink
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CreateDrink;
