import React , { Component } from 'react';
import { SuperHeroesData } from './../dataLocal';

export default class Home extends Component {

  constructor(props){
      super(props)
      this.state = {
          listaSuperheroes:[], // arreglo para guardar la lista

      }
  }
 
  componentDidMount(){  
 
     this.setState({
        listaSuperheroes: SuperHeroesData, // lista == dataLocal
  
    })
    console.log(SuperHeroesData) // mostrando por consola la dataLocal
   
  }

  dibujarTabla(datosTabla){
      return(
          <table id="example" className="table table-striped table-bordered " >
              <thead>
                  <tr>
                    <th>Cod</th>
                    <th>Nombres</th>
                    <th>Cargo</th>
                    <th></th>
                  </tr>
              </thead>
              <tbody>
                  {datosTabla.map(itemSuperheroe=>
                      <tr key={itemSuperheroe.id}>
                        <td>{itemSuperheroe.id}</td>
                        <td>{itemSuperheroe.nombres}</td>
                        <td>{itemSuperheroe.cargo}</td>
                        <td> <img src={'./img/'+itemSuperheroe.foto} className="img-fluid" /></td>
                      </tr>
                  )}
              </tbody>
          </table>
          )
  }


  mostrarColaborador(){
    var colaborador = this.state.colaboradorSeleccionado
    return(
        <div>
            <h3>Colaborador Seleccionado</h3>
            <h4>{colaborador.nombres}</h4>
            <img src={require('./../' + colaborador.foto)} className="img-fluid" alt={colaborador.nombres}/>
            <p>{colaborador.cargo}</p>
            <p>{colaborador.ciudad}</p>
         </div>
    )
  }
  
  render(){
    let contenidoTabla = this.dibujarTabla(this.state.listaSuperheroes);

      return (
          <section id="colaboradores" className="padded-40">
              <div className="container">
                <h2>Colaboradores</h2>
                    <div className="row">
                        <div className="col-md-7">
                            {contenidoTabla}
                        </div>
                        <div className="col-md-5">
                          
                        </div>                
                </div>
              </div>
          </section>
      );
  }
}
      
