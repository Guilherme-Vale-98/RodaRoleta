import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import "../app.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { clearMessage } from "../slices/sliceMessage";
import { register } from "../slices/sliceAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();
  const { message } = useSelector((state) => state.message);

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
    username: Yup.string()
      .test(
        "len",
        "O nome precisa ter entre 3 e 20 caracteres.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("Esse campo é obrigatório!"),
    email: Yup.string()
      .email("Este não é um email válido.")
      .required("Esse campo é obrigatório!"),
    password: Yup.string()
      .test(
        "len",
        "A senha deve conter no mínimo 6 caracteres",
        (val) => val && val.toString().length >= 6 && val.toString().length < 40
      )
      .required("Esse campo é obrigatório!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;
    setSuccessful(false);
    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        setTimeout(() => navigate('/'), 1500);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className="form">
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form className="form-wrapper">
            {!successful && (
              <>
                <div className="login-title">
                  <p>Registre-se para jogar!</p>
                </div>
                <div className="register-circle"></div>
                <div className="form-inputs">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                  </div>
                  <label htmlFor="username"></label>
                  <Field name="username" placeholder="Usuário" type="text" />
                  <ErrorMessage
                    name="username"
                    className="error"
                    component="div"
                  />
                </div>
                
                <div className="form-inputs">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                  </div>
                  <label htmlFor="email"></label>
                  <Field name="email" placeholder="Email" type="email" />
                  <ErrorMessage
                    name="email"
                    className="error"
                    component="div"
                  />
                </div>

                <div className="form-inputs">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon className="icon" icon={faLock} />
                  </div>
                  <label htmlFor="password"></label>
                  <Field name="password" placeholder="Senha" type="password" />
                  <ErrorMessage
                    name="password"
                    className="error"
                    component="div"
                  />
                </div>

                <div className="button-wrapper">
                  <button type="submit" className="btn btn-primary btn-block">
                    Registrar!
                  </button>
                </div>
              </>
            )}
          </Form>
        </Formik>
      </div>
      {message && (
        <div>
          <div
            className={
              successful ? "alert alert-success" : "alert error alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
