import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";

import logImg from "../../img/vecteezy_3d-illustration-of-a-pixelated-boy_42846812.png";

const initialValues = {
    email: "",
    password: ""
}
const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!"),
    password: Yup.string().min(3, "Password is too short").max(50, "Password is too long"),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        console.log(values);
        dispatch(loginUser(values));
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <div className={css.formPic}>
                    <img src={logImg} alt="img" className={css.imageLog} width="300" height="300" />
                </div>
                <div className={css.inputWrapper}>
                    <p className={css.title}>Login</p>
                    <Field as={TextField} id="outlined-basic" label="E-mail" variant="outlined" name="email" required />
                    <ErrorMessage name="email" component="span" className={css.noValid} />
                    <Field as={TextField} id="outlined-basic" label="Password" variant="outlined" name="password" required />
                    <ErrorMessage name="password" component="span" className={css.noValid} />

                    <Button variant="contained" type="submit">Submit</Button>

                    <p className={css.noaccMessage}>If you don`t have an account, please <Link to="/register">SignUp</Link></p>
                </div >
            </Form>
        </Formik >
    )
}

export default LoginForm;