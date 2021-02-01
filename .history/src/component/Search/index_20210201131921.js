import React, { Component } from 'react';
import { Formik } from "formik";

import { FaSearch } from 'react-icons/fa';
import cocktaildb from '../../api/cocktaildb'

import "./Search.css";


class search extends Component {

  onHandleSearch= async ({search})=>{
    console.log(search)
    const {data} = await cocktaildb.searchByName(search)
    console.log(data)


  }  
    render() {
        const {onSearch}=this.props
        return (
          <div className="container">
            <h5>Bootstrap 4 Search Bar</h5>
            <div className="row">
              <div className="col-12">
                <Formik
                  initialValues={{
                    search: "",
                  }}
                  validate={this.validationSchema}
                  onSubmit={(values) => {
                    // console.log(values)
                    onSearch(values)
                    // this.onHandleSearch(values);
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form
                      className="search-form"
                      role="form"
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <div className="input-group">
                        <input
                          className="form-control border-secondary py-2"
                          type="search"
                          defaultValue="search"
                          type="text"
                          name="search"
                          onChange={handleChange("search")}
                          onBlur={handleBlur}
                          id="Search"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="submit"
                          >
                            <FaSearch />
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        );
    }
}

export default search
