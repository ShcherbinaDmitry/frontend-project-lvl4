import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import UserContext from '../../context/userContext.js';
import { Card } from 'react-bootstrap';
import Logo from './login.jpg';

const LoginForm = (props) => {
  const [authFailed, setAuthFailed] = useState(false);
  const inputEl = useRef(null);
  const user = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    username: yup.string()
      .required('Required'),
    password: yup.string()
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setAuthFailed(false);

      try {
        const { data } = await axios.post('/api/v1/login', values);
        console.log(data);
        user.setAuth(true);
        localStorage.setItem('userId', JSON.stringify(data.token));
        const { from } = location.state || { from : { pathname: '/' } };
        navigate(from);
      } catch (err) {
        if (err.isAxiosError && err.response.status === 401) {
          setAuthFailed(true);
          inputEl.current.select();
          return;
        }

        throw err;
      }
    }
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">Войти</h1>
      <Form.Group className="form-floating mb-3">
        <Form.Control
          name="username"
          required
          placeholder='Ваш ник'
          id="username"
          ref={inputEl}
          value={formik.values.username}
          isInvalid={authFailed}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="username">Ваш ник</Form.Label>
      </Form.Group>
      <Form.Group className="form-floating mb-3">
        <Form.Control 
          name="password"
          required
          placeholder='Пароль'
          id="password"
          value={formik.values.password}
          isInvalid={authFailed}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="password">Пароль</Form.Label>
        <Form.Control.Feedback type="invalid" tooltip>Неверные имя пользователя или пароль</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant="outline-primary" className="w-100 mb-3">Войти</Button>
    </Form>
  );
};


const LoginPage = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img alt="Войти" src={Logo} className="rounded-circle" />
              </div>
              <LoginForm />
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <span>Нет аккаунта?</span> <a href="/signup">Регистрация</a>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
