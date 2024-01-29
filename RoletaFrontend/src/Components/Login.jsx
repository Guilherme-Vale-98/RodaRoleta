import React, { useEffect, useState } from 'react'

import { login } from "../slices/sliceAuth";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { clearMessage } from "../slices/sliceMessage";
import { Navigate } from 'react-router-dom';
const Login = () => {

    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);
    
    const initialValues = {
      username: "",
      password: "",
    };
  
    const validationSchema = Yup.object().shape({
      username: Yup.string().required("Esse campo é obrigatório!"),
      password: Yup.string().required("Esse campo é obrigatório!"),
    });
  
    const handleLogin = (formValue) => {
        const { username, password } = formValue;
        setLoading(true);
        dispatch(login({ username, password }))
          .unwrap()
          .then(() => {
            navigate("/");
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      };
      if (isLoggedIn) {
        return <Navigate to="/" />;
      }

      return (
        <div className="">
          <div className="">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <div className="">
                  <label htmlFor="username">Nome de usuário</label>
                  <Field name="username" type="text" className="" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className=""
                  />
                </div>
    
                <div className="">
                  <label htmlFor="password">Senha</label>
                  <Field name="password" type="password" className="" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className=""
                  />
                </div>
    
                <div className="">
                  <button type="submit" className="" disabled={loading}>
                    {loading && (
                      <span className=""></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
    
          {message && (
            <div className="">
              <div className="" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>
      );
}

export default Login