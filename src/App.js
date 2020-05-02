import React, { Component } from 'react'
import Cards from './components/Cards/Cards'

import styles from './App.module.css'
import {fetchData} from './Api'
import 'D:/React/tracker/node_modules/bootswatch/dist/slate/bootstrap.css'
import NavBar from './components/NavBar/NavBar'

 class App extends Component {
    state={
      data:{}
    }
  //making api call 
 async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({
      data:fetchedData
    })
  }
  render() {
    const {data} = this.state
    return (
      <div>
      {/* <NavBar></NavBar> */}
      <div className={styles.container} >
       
        
        <Cards data={data}/>
      </div>
      </div>
    )
  }
}

export default App;

