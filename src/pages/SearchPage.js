import React, { Component } from 'react'
import Layout from "../component/Layout"
import Card from '../component/Common/showCard/Card';

class SearchPage extends Component {

    componentDidMount(){
        
    }
    render() {
        return (
            <Layout className="container-fluid h-100">
                <div className="results">
                <h2>Add</h2>
                <div className="content">
                    {/* {results && results.map((result) => (
                      <Card data={result}/>
                  ))} */}
                </div>
                </div>
            </Layout>
        )
    }
}

export default SearchPage
