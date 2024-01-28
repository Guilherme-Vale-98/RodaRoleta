import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { clearMessage } from '../slices/sliceMessage';
import { register } from '../slices/sliceAuth';

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state)=>state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().test(
      "len",
      "O nome precisa ter entre 3 e 20 caracteres.",
      (val) =>
        val &&
        val.toString().length >= 3 &&
        val.toString().length <= 20
    ).required("Esse campo é obrigatório!"),
    email: Yup.string().email("This is not a valid email.")
    .required("This field is required!"),
    password: Yup.string()
    .test(
      "len",
      "A senha deve conter no mínimo 4 caracteres",
      (val) =>
        val &&
        val.toString().length >= 4
    )
    .required("This field is required!"),
  })

  
  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    setSuccessful(false);
    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className='register-form'>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Nome de usuário</label>
                  <Field name="username" type="text" />
                  <ErrorMessage
                    name="username"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email"  />
                  <ErrorMessage
                    name="email"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}
          </Form>
        </Formik>
        {message && (
        <div >
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  )
}

export default Register