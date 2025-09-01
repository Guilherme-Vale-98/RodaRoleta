import React, { useEffect, useState } from "react";
import "../App.css";
import { login } from "../slices/sliceAuth";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { clearMessage } from "../slices/sliceMessage";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import App from "../App";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form">
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="form-wrapper">
            <div className="login-title"><p>Faça o seu login!</p></div>
            <div className="circle"></div>
            <div className="form-inputs">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faUser} />
              </div>
              <label htmlFor="username"></label>
              <Field
                name="username"
                type="text"
                placeholder="Usuário"
                className=""
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-inputs">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faLock} />
              </div>
              <label htmlFor="password"></label>
              <Field
                name="password"
                placeholder="Senha"
                type="password"
                className=""
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="button-wrapper">
              <button type="submit" className="" disabled={loading}>
                {loading && <span className=""></span>}
                <span>Login</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {message && (
          <div className="error-box" role="alert">
            {message}
          </div>
      )}
    </div>
  );
};

export default Login;
