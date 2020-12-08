import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';
import { notification } from 'antd';



class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detalleUser: {},
            detalleAlquiler: {}
       }
    }


    async getUserData() {
        try {
            const userData = {
                mail: localStorage.getItem('mail'),
            }
            console.log(userData)
            await axios.get('http://localhost:5000/singleUser', userData)
                .then(res => {
                    console.log(res.data)
                    if (res.data.status == 200) {
                        this.setState({ detalleUser: res.data.userData })
                    }
                }).catch(err => {
                    console.log(err)
                    notification.error({ message: 'Error', description: 'Ha sido imposible cargar los datos' })
                })
        } catch (err) {
            console.log(err)
        }
    }

    async getRentData() {
        try {
            const userData = {
                mail: localStorage.getItem('mail'),
            }
            console.log(userData)
            await axios.get('http://localhost:5000/order', userData)
                .then(res => {
                    console.log(res.data)
                    if (res.data.status == 200) {
                        this.setState({ detalleAlquiler: res.data.rentData })
                    }
                }).catch(err => {
                    console.log(err)
                    notification.error({ message: 'Error', description: 'Ha sido imposible cargar los datos' })
                })
        } catch (err) {
            console.log(err)
        }
    }

    showRentData(){
        return (
            <div className="datosAlquiler">
                
            <div> Id: {this.state.detalleAlquiler.movieId}</div>
            <div> Devolución: {this.state.detalleAlquiler.returnDate}</div>

            </div>
        )
    }

    showUserData() {
            return (
                <div className="datosUsuario">
                    
                <div> Nombre: {this.state.detalleUser.name}</div>
                <div> Mail: {this.state.detalleUser.mail}</div>

                </div>

            )
        }
    
    componentDidMount(){
        this.getUserData();
        this.getRentData();
        }

    render() {
        return (
            <div>
                <div className="datosUsuario">
                    {this.showUserData()}
                    {this.showRentData()}
                </div>
            </div>
        )
    }
}

export default Profile;