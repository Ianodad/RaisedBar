import React, { Component } from 'react'
import Layout from "../component/Layout"
import Modal from 'react-modal';


import cocktaildb from '../api/cocktaildb'
import Search from '../component/Search';
import Button from '../component/Common/Button/Button';

import './Home.css'
import Card from '../component/Common/showCard/Card';
import CollectionView from '../component/CollectionView';
import { NavLink } from "react-router-dom";



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
        this.state = { cocktail: [], modalIsOpen: false, search: "", searchData:[]};
  }

  // load the initial state of the component 
  componentDidMount = async ()=>{
    
    // console.log(await cocktaildb.getCocktailDetail('11007'))
    const {data} = await cocktaildb.getByCategory('Cocktail')
    // console.log(data)
    this.setState({ cocktails:data.drinks });

  }

  // open modal function
  openModal =()=> {
      this.setState({ modalIsOpen: true });
  }

  onHandleSearch= async ({search})=>{
    
    // console.log(data)
    
    try {
      // let q = await JSON.stringify(search)
      const { data } =  await cocktaildb.searchByName(search)
      console.log(data)
      if (!data) {
        this.setState({searchData:"null", search:true})
        this.openModal()
     } else {
       console.log(data)
       this.setState({searchData:data.drinks, search:true})
       this.openModal()
     }
    //  console.log(data)
    // nonExistentFunction();
  } catch (error) {
    console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
  }
  }

  // close model function
  closeModal=()=> {
      this.setState({ modalIsOpen: false, search: "", searchData:[] });
  }
  

    render() {
      const { cocktails, search, searchData }= this.state

     // renders card view for modal base on search or straight from cocktaildb 
     const renderModalContent = ()=>{
      if(search){
        if (!searchData){
          return <h2>No Search data</h2>
        } else {
          return (<div className="content d-flex flex-wrap">
                  {searchData.map((item, i) => (
                      <Card data={item} key={i}/>
                  ))}
                </div>)
        }
      } else{
        return (
          <div className="content d-flex flex-wrap">
                  {cocktails && cocktails.map((cocktail, i) => (
                      <Card data={cocktail} key={i}/>
                  ))}
          </div>
        )
      }
    }
    const renderModalTitle=()=>{
      if (search){
          return( <h2 className="text-center col-11">Search Results</h2>)
      } else {
        return( <h2 className="text-center col-11">Cocktail Catalog</h2>)
      }

    }
        return (
          <Layout>
            <div class="container">
              <Modal 
              isOpen={this.state.modalIsOpen}
              // onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              >
                <div class="container-fluid">
                <div className="modal-header row">
                {renderModalTitle()}
                <button className="float-lg-right col-1" style={{zIndex:4}} onClick={()=>this.closeModal()}>Close</button>
                </div>
                <div className="content d-flex flex-wrap">
                  {renderModalContent()}
                </div>
                </div>
              </Modal>
              <div className="search-bar position-absolute container" style={{top: "12%"}}>
                <Search onSearch={this.onHandleSearch}/>
              </div>
              <div className="yourCollection position-absolute position-fixed" style={{top:"31%"}}>
                <h2 className="container-fluid border-bottom" style={{color:"white", fontWeight:"900", fontSize:"2em"}}>Your Collection</h2>
                <div className="collection-holder fle w-100">
                  <CollectionView/>
                </div>
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
                  <div className="create-cocktail col-md-6 col-lg-6" style={{width:'18em'}}>
                    <div className="create card col-md-5 float-right mt-4" >
                      <div className="create-inside flex-column inline-block" style={{marginTop:"30px"}}>
                        <h2>
                         Create your
                         </h2>
                         <h2 style={{fontSize:"40px", fontWeight:'900px'}}>story</h2>
                      <div className="create-button" style={{marginTop:'2em'}}></div>
                      <NavLink to="/create-drink">
                        <Button style={{top:"10"}} title={'Create Drink'}/>                        
                    </NavLink>
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

