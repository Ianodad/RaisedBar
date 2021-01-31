import React, { Component } from "react";
import Layout from "../component/Layout/index";
import { Formik } from "formik";
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  drinkName : Yup.string()
    .required()
    .email("well that's not an email")
  
});

class CreateDrink extends Component {

    handleCreateDrink = ({drinkName, ingredient1, ingredient2, ingredient3, instructions}) => {
      console.log(drinkName, ingredient1, ingredient2, ingredient3, instructions)
     
    };
  render() {
    return (
      <Layout className="container-fluid h-100">
        <div className="card card-outline-secondary mx-auto" style={{top:'20%', width:'30%'}}>
          <div className="card-header">
            <h3 className="mb-0 text-center">Create Drink</h3>
          </div>
          <div className="card-body mx-auto">
            <Formik
              initialValues={{ drinkName: "", ingredient1: "", ingredient2: "", ingredient3: "", instructions:"" }}
              validate={this.validationSchema}
              onSubmit={(values) => {
               this.handleCreateDrink(values)
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="form" role="form" autoComplete="off" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                      type="text"
                      name="drinkName"
                      onChange={handleChange('drinkName')}
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
                      onChange={handleChange('ingredient1')}
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
                      onChange={handleChange('ingredient2')}
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
                      onChange={handleChange('ingredient3')}
                      onBlur={handleBlur}
                      id="ingredient3"
                      placeholder="Ingredient Three"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={values.instructions}
                      onChange={handleChange('instructions')}
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
