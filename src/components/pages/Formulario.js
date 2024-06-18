import React from "react";
import style from "../style/Formulario.css"
// import { Form } from "react-router-dom";

export default class Formu extends React.Component {
    state={}
    handleSubmit= e =>{
        e.preventDefault()
        console.log(this.state)
    }
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
        // console.log(`${e.target.name}:${e.target.value}`)
        // let primerState={}
        // primerState[e.target.name]=e.target.value
        // this.setState(primerState)
    }
    render() {
        return (
            //"Hola"

            <div className="Formulario">
                <form className="Contenido" action="post"
                    onSubmit={this.handleSubmit}
                >
                    <label className="Label"></label>
                    <strong>Nombre</strong>
                    <br></br>
                    <input type="text"
                        className="Nombre"
                        placeholder="Nombre"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    //   onChange={onChange}
                    //   value={form.title}
                    /><br></br>
                    <br></br>
                    <label className="Label"></label>
                    <strong>Descripcion</strong>
                    <br></br>
                    <input type="text"
                        className="Descripcion"
                        placeholder="Descripcion"
                        name="Descripcion"
                        onChange={this.handleChange}
                        value={this.state.Descripcion}
                    /><br></br>
                    <br></br>
                    <label className="Label"></label>
                    <strong>Imagen</strong>
                    <br></br>
                    <br></br>
                    <input type="file"
                        className="Imagen"
                        onChange={this.handleChange}
                        value={this.state.Imagen}
                    /><br></br>
                    <br></br>
                    <label className="Label"></label>
                    <strong>Color</strong>
                    <br></br>
                    <input type="text"
                        className="Color"
                        placeholder="Color"
                        name="Color"
                        onChange={this.handleChange}
                        value={this.state.Color}
                    /><br></br>
                    <br></br>
                    <input className="Envio"
                        type="submit"
                        value={"Enviar"} /><br></br>
                        onChange={this.handleChange}
                </form>
            </div>
        )
    }
}