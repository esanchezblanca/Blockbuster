import React, { Component } from 'react';
import './Detalle.css';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import axios from 'axios';

class Detalle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            peliculaDetallada: {}
        }
    }


    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('movieDetail'))
        this.setState({ peliculaDetallada: data })

    }


    backToList() {
        this.props.history.push('/home')
    }

    async rentMovie() {
        console.log("entro");
        try {
            const order = {
                movieId: this.state.peliculaDetallada._id,
                mail: localStorage.getItem('mail'),
            }
            console.log(order)
            await axios.post('http://localhost:5000/order', order)
                .then(res => {
                    console.log("entro en then")
                    if (res.data.status == 200) {
                        notification.success({ message: 'Película Alquilada' })
                        this.backToList();
                    } else if (res.data.status == 403) {
                        notification.error({ message: 'No se ha podido alquilar', description: 'Algo ha ido mal' })
                    }
                }).catch(err => {
                    console.log(err)
                    notification.error({ message: 'No se ha podido alquilar', description: 'Algo ha ido mal' })
                })
        } catch (err) {
            console.log(err)
        }
    }

    showMovieDet() {
        if (this.state.peliculaDetallada?.title) {
            return (
                <div className="divGral">
                    <div className="peliculaDetail">

                        <div className="titulo" >Título: {this.state.peliculaDetallada.title} </div>
                        <div className="fotoDescripcion">
                            <img alt={this.state.peliculaDetallada.image} src={this.state.peliculaDetallada.image}></img>
                        </div>
                    </div>
                    <div>
                        <div className="plot">Argumento:{this.state.peliculaDetallada.plot} </div>
                        <div className="btnDetalle">
                            <button onClick={() => this.backToList()}>Volver a la lista</button>
                            <button onClick={() => this.rentMovie()}>Alquilar</button>
                        </div>
                    </div>


                </div>
            )
        } else {
            return <div>Cargando lista</div>
        }
    }


    render() {
        return (
            <div className="todaInfo">
                {this.showMovieDet()}

            </div>
        )
    }
}
export default Detalle;