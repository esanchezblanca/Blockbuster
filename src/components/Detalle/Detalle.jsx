import React, {Component} from 'react';
import './Detalle.css';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';

class Detalle extends Component{

    constructor(props){
        super(props)
        this.state = {
            peliculaDetallada: {}
        }
    }
    

    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('movieDetail'))
        this.setState({peliculaDetallada: data})
        
    }


    backToList(){
        this.props.history.push('/home')
    }

    rentMovie(){
        notification.success({message: 'Alquilada'})
        this.backToList();
    }

    showMovieDet(){
        if(this.state.peliculaDetallada?.title){
            return(
                <div >
                    <div className="peliculaDetail">
                        
                        <div >Título: {this.state.peliculaDetallada.title} </div>
                        <div className="fotoDescripcion">
                            <img alt={this.state.peliculaDetallada.image} src={this.state.peliculaDetallada.image}></img>
                        </div>
                      
                    <div>Argumento:{this.state.peliculaDetallada.plot} </div>
                    </div>
                    <button onClick={()=> this.backToList()}>Volver a la lista</button>
                    <button onClick={()=> this.rentMovie()}>Alquilar</button>
                </div>
            )
        }else {
            return <div>Cargando lista</div>
        }
    }


    render(){
        return(
            <div className="todaInfo">
                {this.showMovieDet()}
                
            </div>
        )
    }
}
export default Detalle;