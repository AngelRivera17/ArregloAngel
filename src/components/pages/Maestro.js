import React from "react";
// import Card from "../Card";
import Hola from "../Saludo";
import ballena from "../image/ballena.png"
import pulpo from "../image/pulpo.png"
import Iteracion from "../Itinerante";
import Addb from "../boton";

export default class Maestro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{
                "id":1,
                "nombre":"Ballena",
                "descripcion":" Las ballenas son los animales más grandes que jamás hayan existido. Pertenecen a un grupo de mamíferos marinos conocidos como cetáceos. ",
                "img": ballena,
                "color":"#06F7E5"
            },
            {
                "id":2,
                "nombre":"Pulpo",
                "descripcion":"El pulpo es un invertebrado cefalópodo, tiene 8 tentáculos alrededor de la boca, y en cada tentáculo hay dos hileras de ventosas que le ayudan a atrapar a sus presas.",
                "img":pulpo,
                "color":"#062B8E "
            }
        ]
        }

    }
    render(){
        return(
        <div>
            <Hola
                username="Angel"
            />
            <Iteracion
                chao={this.state.data}
            />
            <Addb/>
        </div>
        )
    }
}