import React from "react";
// import Card from "../Card";
import Hola from "../Saludo";

import Iteracion from "../Itinerante";
import Addb from "../boton";

export default class Maestro extends React.Component {
  state = {
    data: []
  }
  async componentDidMount() {
    await this.angel();
  }
  angel=async()=>{
    let res=await fetch('http://localhost:8000/api/info')
    let data=await res.json()
    this.setState=({
        data
    })
    console.log(data)
  }

  render() {
    return (
      <div>
        <Hola username="Angel" />
        <Iteracion chao={this.state.data} />
        <Addb />
      </div>
    );
  }
}
