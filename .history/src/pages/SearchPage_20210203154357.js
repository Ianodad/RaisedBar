import React, { Component } from 'react'
import Layout from "../component/Layout"

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
