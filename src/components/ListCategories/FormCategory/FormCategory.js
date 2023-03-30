import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// import { initialValues, validationSchema } from "./LoginForm.form";

import styles from "./FormCategory.module.scss";

export function FormCategory() {
  // const formik = useFormik({
  //   // initialValues: initialValues(),
  //   // validationSchema: validationSchema(),
  //   // validateOnChange: false,

  //   // onSubmit: async (formValue) => {
  //   //   try {
  //   //     const response = await authCtrl.login(formValue);
  //   //     login(response.access)

  //   //     // history.push(`/`);
  //   //   } catch (error) {
  //   //     toast.error(error.message);
  //   //   }
  //   // },
  // });

  return (
    <div className={styles.formCategory}>
      <h1> Formulario de categoria</h1>

      <div>
        <Form>
          <FormGroup floating>
            <Input name="category" placeholder="Nombre Categoría" type="text" />
            <Label for="category">Nombre Categoría</Label>
          </FormGroup>{" "}
          <Button block color="primary" size="lg" type="submit">
            Subir Imagen
          </Button>
          <Button block color="primary" size="lg" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
}
