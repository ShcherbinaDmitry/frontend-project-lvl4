import React from 'react';
import Footer from './footer.js';
import Form from './form.js';
import login from './login.png';


const LoginPage = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img alt="Войти" className="rounded-circle" src={login.png}/>
              </div>
              <Form />
            </div>
            <div className="card-footer p-4">
              <Footer /> 
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;