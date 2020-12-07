import React, {Component} from 'react';
import './Detalle.css';
import { useHistory } from 'react-router-dom';

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

    showMovieDet(){
        if(this.state.peliculaDetallada?.id){
            return(
                <div >
                    <div className="peliculaDetail">
                        
                        <div >Título: {this.state.peliculaDetallada.title} </div>
                        <div className="fotoDescripcion">
                            <img alt={this.state.peliculaDetallada.title} src={this.state.image}></img>
                        </div>
                      
                    <div>Fecha de estreno:{this.state.peliculaDetallada.release_date} </div>
                    <div>Valoración: {this.state.peliculaDetallada.vote_average}</div>
                    </div>
                    <button onClick={()=> this.backToList()}>Volver a la lista</button>
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