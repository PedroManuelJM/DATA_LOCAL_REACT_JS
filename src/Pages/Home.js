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
        <section>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                 {datosTabla.map(itemSuperheroe=>
                    <div className="col"  key={itemSuperheroe.id}>
                        <div className="card">
                            <img src={'./img/'+itemSuperheroe.foto} className="img-fluid" />
                            <div className="card-body">
                                <h5 id="superheroe" className="card-title">{itemSuperheroe.nombres}</h5>
                                <p className="card-text">{itemSuperheroe.cargo}</p>
                                <span className="badge bg-warning">{itemSuperheroe.ciudad}</span>
                            </div>
                        </div>
                        <br></br>
                    </div>
                )}
            </div>
        </div>
    </section>
          )
  }

  render(){
    let contenidoTabla = this.dibujarTabla(this.state.listaSuperheroes);
      return (
          <section id="colaboradores" className="padded-40">
              <div className="container">
                <h2 id="titulo" className="padded">Superheroes de <span style={{color: "#41BF9B"}} > DC Comics </span>  y <span style={{color: "#F24141"}} > Marvel Comics </span> </h2>
                <p> Usando dataLocal para mostrar los datos. </p>  
                    <div className="row">
                        <div className="col-md-12">
                            {contenidoTabla}
                        </div>               
                    </div>
              </div>
          </section>
      );
  }
}
      
