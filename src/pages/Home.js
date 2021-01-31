import React, { Component } from 'react'
import Layout from "../component/Layout"
import Modal from 'react-modal';


import cocktaildb from '../api/cocktaildb'
import Search from '../component/Search';
import Button from '../component/Common/Button/Button';

import './Home.css'
import Card from '../component/Common/showCard/Card';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom : 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height : '80%'
  }
};

class Home extends Component {

  constructor(props) {
        super(props);
        this.state = { cocktail: [], modalIsOpen: true};
  }

  // load the initial state of the component 
  componentDidMount= async ()=>{
    // console.log(await cocktaildb.getCocktailDetail('11007'))
    const {data} = await cocktaildb.getByCategory('Cocktail')
    this.setState({ cocktails:data.drinks });
    // console.log(data)

  }

  // open modal function
  openModal =()=> {
      this.setState({ modalIsOpen: true });
  }

  afterOpenModal=()=> {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  // close model function
  closeModal=()=> {
      this.setState({ modalIsOpen: false });
  }
  

    render() {
      const { cocktails }= this.state
      console.log(cocktails)
        return (
          <Layout>
            <div class="container">
              <Modal 
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              >
                <div class="container-fluid">
                <h2 className="text-center">Modal title</h2>
                <button className="float-lg-right" style={{zIndex:'2'}} onClick={()=>this.closeModal()}>Close</button>
                <div className="content d-flex flex-wrap">
                  {cocktails && cocktails.map((cocktail) => (
                      <Card data={cocktail}/>
                  ))}
                </div>
                </div>
              </Modal>
              <div className="search-bar position-absolute container" style={{top: "30%"}}>
                <Search/>

              </div>
                <div
                  className="home-bottom d-flex row position-absolute container"
                  style={{ top: "60%" }}
                >
                  <div className="call-action col-md-6 col-lg-6">
                    <div className="action" style={{ color: "white"}}>
                      <h2>
                        View
                      </h2>
                      <h2 style={{ color: "white", fontSize: "45px", fontWeight:'900' }}>
                        Our Best Drinks
                      </h2>
                      <h2 style={{ color: "white", fontSize: "50px",  fontWeight:'900' }}>
                        Check  Catalog
                      </h2>
                      <Button title={'View Catalog'} onPress={()=>this.openModal()}/>
                     </div>
                  </div>
                  <div className="create-cocktail col-md-6 col-lg-6">
                    <div className="create card col-md-5 float-right mt-4" >
                      <div className="create-inside flex-column inline-block" style={{marginTop:"30px"}}>
                        <h2>
                         Create your
                         </h2>
                         <h2 style={{fontSize:"40px", fontWeight:'900px'}}>story</h2>
                      <div className="create-button" style={{marginTop:'2em'}}></div>
                        <Button style={{top:"10"}} title={'Create Drink'} onPress={()=>this.openModal()}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Layout>
        );
    }
 
}

export default Home

