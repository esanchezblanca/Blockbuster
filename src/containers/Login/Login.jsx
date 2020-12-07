import React from 'react';
import "./Login.css";
import axios from 'axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';

//Creamos la plantilla de las notificaciones que aparecerán en el login
const openNotification = () => {
  notification.open({
    message: 'Título',
    description:
      'Notificación',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const Login = (props) => {
  const history = useHistory();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const login = {
        mail: form.mail.value,
        password: form.password.value,
      }
      //Se hace la petición asíncrona al back
      await axios.post('http://localhost:5000/users/login', login)
        .then(res => {
          if (res.data.status == 200) {
            notification.success({ message: 'Logged in' })
            history.push('/home')
          } else if (res.data.status == 403) {
            notification.error({ message: 'Cannot log in', description: 'Check your credentials' })
          }
        }).catch(err => {
          console.error(err)
          notification.error({ message: 'Cannot log in', description: 'Check your credentials' })
        })

    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Cannot log in', description: 'Check your credentials' })
      // openNotification()
    }
  }

  //creamos variable para que al hacer click en no tengo cuenta redirija
  const GoRegister = () => {
    history.push('/register')
  }

  //Formulario de acceso clientes: login
  return (
    <form className="divLogin" onSubmit={handleSubmit}>
      <input className="loginInput" type="email" name="mail" placeholder="Email" />
      <input className="loginInput" type="password" name="password" placeholder="Contraseña" />
      <a className="register" onClick={GoRegister}>No tengo cuenta</a>
      <button className="loginButton" type="submit">Enviar</button>
    </form>
  );
};



export default Login;