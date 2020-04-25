import React, { Component } from 'react'
import Cards from './components/Cards/Cards'

import styles from './App.module.css'
import {fetchData} from './Api'
import 'D:/React/tracker/node_modules/bootswatch/dist/slate/bootstrap.css'

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
      <div className={styles.container}>
        <Cards data={data}/>
      </div>
    )
  }
}

export default App;

