import React from 'react';
import Footer from './footer.js';
import Form from './form.js';
import Logo from './login.jpg';
import Register from './register.jpeg';

const LoginPage = () => {
  console.log('Hello world 2');
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img alt="Войти" src={Logo} style={{width: '200px', height: '200px'}} className="rounded-circle" />
                
              </div>
              <Form />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;

<img alt="Войти" style={{width: '200px', height: '200px'}} className="rounded-circle" src="https://cdn2.hexlet.io/assets/toto_mount-97eb429b4c545fb71af1f9dac36116bd15dd73517135117be908c4626b364caa.jpg" />