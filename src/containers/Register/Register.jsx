import React from 'react';
import "./register.css";
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
        lastName: form.lastName.value,
        mail: form.mail.value,
        password: form.password.value,
        phone: form.phone.value,
        birthDay: form.birthDay.value,
        DNI: form.DNI.value

      }
      await axios.post('http://localhost:3200/customers/register', register).then(res => {
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
            <input className="loginInput" type="text" name="lastName" placeholder="Apellidos"/>
            <input className="loginInput" type="email" name="mail" placeholder="Email"/>
            <input className="loginInput" type="password" name="password" placeholder="Contraseña"/>
            <button className="registerButton" type="submit">Enviar</button>
            </div>
            
        </form>
    );
}

export default Register;