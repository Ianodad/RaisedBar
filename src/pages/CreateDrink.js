import React, { Component } from "react";
import Layout from "../component/Layout/index";
import { Formik } from "formik";
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email("well that's not an email")
    .label('Email'),
  password: Yup.string()
    .required()
    .min(2, 'pretty sure this will be hacked')
    .label('Password'),
});

  handleCreateDrink = ({email, password}) => {
    // console.log(email, password)
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
class CreateDrink extends Component {
  render() {
    return (
      <Layout className="container-fluid h-100">
        <div className="card card-outline-secondary mx-auto" style={{top:'20%', width:'30%'}}>
          <div className="card-header">
            <h3 className="mb-0 text-center">Create Drink</h3>
          </div>
          <div className="card-body mx-auto">
            <Formik
              initialValues={{ firstName: "", lastName: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.firstName) {
                  errors.firstName = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="form" role="form" autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                      type="text"
                      name="drinkName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.drinkName}
                      className="form-control"
                      id="inputdrinkName"
                      placeholder="Drink Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ingredient1">Ingredient One</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="inputingredient1"
                      placeholder="Ingredient One"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ingredient1">Ingredient Two</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="inputingredient2"
                      placeholder="Ingredient Two"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ingredient1">Ingredient Three</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="inputingredient3"
                      placeholder="Ingredient Three"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <input
                      type="text"
                      className="form-control"
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
