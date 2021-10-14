import './App.css';
import './index.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  const handleClickRegister = (values) => console.log(values);
  const handleClickLogin = (values) => console.log(values);

  const validateRegister = yup.object().shape({
    email: yup.string().email("It's not an email").required("The email is obligatory"),
    password: yup.string().min(6, "The password is need of six caracteres").required("The password is obligatory"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match"),
  });
  const validateLogin = yup.object().shape({
    email: yup.string().email("It's not an email").required("The email is obligatory"),
    password: yup.string().min(6, "The password is need of six caracteres").required("The password is obligatory"),
  });

  return (
    <div className="container">
      <h1>Hi, welcome!</h1>
      <div className="separator"></div>
      <div className="container-principal">
        <div className="container-register">
          <h1>User register</h1>
            <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validateRegister}>
              <Form class="login-form">
                <div className="login-form-group">
                  <Field name="email" className="form-field" placeHolder="email">
                  </Field>
                  
                  <ErrorMessage component="span" name="email" className="form-error"> 
                  </ErrorMessage>
                </div>

                <div className="login-form-group">
                  <Field name="password" className="form-field" placeHolder="password">
                  </Field>
                  
                  <ErrorMessage component="span" name="password" className="form-error"> 
                  </ErrorMessage>
                </div>

                <div className="login-form-group">
                  <Field name="confirmPassword" className="form-field" placeHolder="confirm the password">
                  </Field>
                  
                  <ErrorMessage component="span" name="confirmPassword" className="form-error"> 
                  </ErrorMessage>
                </div>
                
                <button className="button" type="submit">
                  Register
                </button>

              </Form>
            </Formik>
        </div>

        <div className="separator">

        </div>

        <div className="container-login">
          <h1>Login</h1>
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validateLogin}>
              <Form class="login-form">
                <div className="login-form-group">
                  <Field name="email" className="form-field" placeHolder="email">
                  </Field>
                  
                  <ErrorMessage component="span" name="email" className="form-error"> 
                  </ErrorMessage>
                </div>

                <div className="login-form-group">
                  <Field name="password" className="form-field" placeHolder="password">
                  </Field>
                  
                  <ErrorMessage component="span" name="password" className="form-error"> 
                  </ErrorMessage>
                </div>
                
                <button className="button" type="submit">
                  Login
                </button>

              </Form>
            </Formik>
          </div>
    
      </div>  
    </div>
  );
}

export default App;
