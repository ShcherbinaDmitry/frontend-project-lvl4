import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import cn from 'classnames';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const FormValidation = () => {
  const [authFailed, setAuthFailed] = useState(false);
  const inputEl = useRef(null);

  const loginSchema = yup.object().shape({
    nickname: yup.string()
      .required('Required'),
    password: yup.string()
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      nickname: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log('Submitted');
      console.log(values);
      if (values.password !== 'user') setAuthFailed(true);
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
          name="nickname"
          required
          placeholder='Ваш ник'
          id="nickname"
          ref={inputEl}
          value={formik.values.nickname}
          isInvalid={authFailed}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="nickname">Ваш ник</Form.Label>
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
      <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
    </Form>
    );
  };

export default FormValidation;
