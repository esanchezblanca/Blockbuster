import React, { Component } from 'react';
import './Profile.css';



class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detalleUser: {},
            detalleAlquiler: {}
        }
    }

    render() {
        return (
            <div>
                <div className="datosUsuario">
                    Datos usuario
                </div>
                <div className="datosAlquiler">
                    Alquiler
                </div>
            </div>
        )
    }
}

export default Profile;