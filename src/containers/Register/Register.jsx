import React from 'react';
import "./Register.css";
import axios from 'axios';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';


const Register = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const register = {
        name: form.name.value,
        mail: form.mail.value,
        password: form.mail.password

      }
      await axios.post('http://localhost:5000/users', register).then(res => {
        notification.success({ message: 'Registered'})
        history.push('/login')
      })
      .catch(err => {
        notification.error({ message: 'Cannot register', description: 'Error on register'})
      })
      
    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Cannot register', description: 'Error on register' })
    }
  }
    return(
        //Esto une el formulario con la función de enviar
        <form className="divRegister" onSubmit={handleSubmit}> 
            <div className="divLeft">
            <input className="loginInput" type="text" name="name" placeholder="Nombre"/>
            <input className="loginInput" type="email" name="mail" placeholder="Email"/>
            <input className="loginInput" type="password" name="password" placeholder="Contraseña"/>
            <button className="registerButton" type="submit">Enviar</button>
            </div>
            
        </form>
    );
}

export default Register;