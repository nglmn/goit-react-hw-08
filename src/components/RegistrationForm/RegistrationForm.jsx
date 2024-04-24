import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";


import css from "./RegistrationForm.module.css";
import { signUpUser } from "../../redux/auth/operations";

const initialValues = {
    name: "",
    email: "",
    password: ""
}
const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: Yup.string().email("Must be a valid email!"),
    password: Yup.string().min(3, "Password is too short").max(50, "Password is too long"),
});

const RegistrationForm = () => {

    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(signUpUser(values));
        actions.resetForm();
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form className={css.form}>
                    <div className={css.formPic}></div>
                    <div className={css.inputWrapper}>
                        <p className={css.title}>Signup</p>
                        <Field as={TextField} id="name" label="Name" variant="outlined" name="name" required />
                        <ErrorMessage name="name" component="span" className={css.noValid} />
                        <Field as={TextField} id="email" label="E-mail" variant="outlined" name="email" required />
                        <ErrorMessage name="email" component="span" className={css.noValid} />
                        <Field as={TextField} id="password" label="Password" variant="outlined" name="password" required />
                        <ErrorMessage name="password" component="span" className={css.noValid} />

                        <Button variant="contained" type="submit">Submit</Button>
                    </div >
                </Form>
            </Formik>
        </>
    )
}

export default RegistrationForm