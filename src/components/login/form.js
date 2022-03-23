import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const FormValidation = () => {
  const loginSchema = yup.object().shape({
    nickname: yup.string().required(),
    password: yup.string().min(6, 'Too short').required(),
  });

  const SignupSchema = yup.object().shape({
    firstName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted login');
  }

  return (
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <h1 className="text-center mb-4">Войти</h1>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

    // <Formik
    //   validationSchema={loginSchema}
    //   onSubmit={handleSubmit}
    // >
    //   {({ errors, touched }) => (
    //     <form 
    //     className="col-12 col-md-6 mt-3 mt-mb-0"
    //     >
    //     <h1 className="text-center mb-4">Войти</h1>
    //     <div className="form-floating mb-3">
    //       <input
    //         name="username"
    //         autoComplete="username"
    //         required
    //         placeholder='Ваш ник'
    //         id="username"
    //         className="form-control"
    //       />
    //       <label htmlFor="username">Ваш ник</label>
    //     </div>
    //     <div className="form-floating mb-3">
    //     <input
    //         name="password"
    //         autoComplete="password"
    //         required
    //         placeholder='Пароль'
    //         id="password"
    //         className="form-control"
    //       />
    //       <label htmlFor="password">Пароль</label>
    //     </div>
    //     <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
    //   </form>
    //   )}
      
    // </Formik>
  );
};

export default FormValidation;