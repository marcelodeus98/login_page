import './App.css';
import './index.css';
import api from './services/api';
import {Form,Input} from '@rocketseat/unform';
import * as yup from "yup";

const validateRegister = yup.object().shape({
  email: yup.string().email("It's not an email").required("The email is obligatory"),
  name: yup.string().required("The name is obligatory"),
  password: yup.string().min(6, "The password is need of six caracteres").required("The password is obligatory"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match"),
});
const validateLogin = yup.object().shape({
  email: yup.string().email("It's not an email").required("The email is obligatory"),
  password: yup.string().min(6, "The password is need of six caracteres").required("The password is obligatory"),
});

 function App() {
  async function handleRegisterSubmit({
    name,
    email,
    password
  }) {
    try{
      const response = await api.post('/register', {name, email,password})
      console.log(response.data)
      alert("User registred!")
    } catch(err){
       alert("User not register!");
    };
  };
  async function handleLoginSubmit({
    email,
    password
  }) {
      try{
        const response = await api.post('/login', {email,password})
        console.log(response.data)
        alert("User connected")
      } catch(err){
         alert("User not found!");
      };
  

}

  return (
    <div className="container">
      <h1>Hi, welcome!</h1>
      <div className="separator"></div>
      <div className="container-principal">
        <div className="container-register">
          <h1>User register</h1>
              <Form onSubmit={handleRegisterSubmit} schema={validateRegister} className="login-form">
                <label>Name</label>
                <div className="login-form-group">
                  <Input name="name" className="form-field" placeHolder="Enter your name"/>
                </div>
                
                <label>Email</label>
                <div className="login-form-group">
                  <Input name="email" className="form-field" placeHolder="Enter your email"/> 
                </div>

                <label>Password</label>
                <div className="login-form-group">
                  <Input name="password" className="form-field" placeHolder="Enter password"/>

                </div>

                <label>Confirm Password</label>
                <div className="login-form-group">
                  <Input name="confirmPassword" className="form-field" placeHolder="Enter password"/>
                </div>
                
                <button className="button" type="submit">
                  Register
                </button>

              </Form>
        </div>

        <div className="separator">

        </div>

        <div className="container-login">
          <h1>Login</h1>
              <Form onSubmit={handleLoginSubmit} class="login-form" schema={validateLogin}>
                <label>Email</label>
                <div className="login-form-group">
                  <Input name="email" className="form-field" placeHolder="email"/>
                </div>

                <label>Password</label>
                <div className="login-form-group">
                  <Input name="password" className="form-field" placeHolder="password"/>

                </div>
                
                <button className="button" type="submit">
                  Login
                </button>

              </Form>

          </div>
    
      </div>  
    </div>
  );
}

export default App;
