import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Auth } from "@/api/Auth";
import { useAuth } from "@/hooks/useAuth";

import { initialValues, validationSchema } from "./LoginForm.form";

import styles from "./LoginForm.module.scss";

export function LoginForm() {
   const authCtrl = new Auth();
   const { login } = useAuth();


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.access)
    
        // history.push(`/`);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <div className={styles.loginForm}>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup floating>
          <Input
            name="email"
            placeholder="Correo"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <Label for="exampleEmail">Correo</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button block color="primary" size="lg" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

// function validationSchema() {
//   return {
//     email: Yup.string()
//       .email("No es un email valido!")
//       .required("Este campo es obligatorio!"),
//     password: Yup.string().required("Este campo es obligatorio!"),
//   };
// }
