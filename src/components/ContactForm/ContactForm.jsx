import * as yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from "formik";
import { TextField, Button } from '@mui/material';
import { nanoid } from "nanoid";
import './ContactForm.css';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contacts/contactsOps';

const initialValues = {
    id: "",
    name: "",
    number: "",
}

const regexp = /^\d{3}-\d{2}-\d{2}$/;
const FeedbackSchema = yup.object().shape({
    name: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: yup.string().matches(regexp, 'Invalid number format "000-00-00"').required("Required")
});


const ContactForm = () => {
    const dispatch = useDispatch();

    const onSubmitForm = (values, actions) => {
        const newUser = {
            id: nanoid(),
            name: values.name,
            number: (values.number).toString(),
        };
        dispatch(addNewContact(newUser));

        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={FeedbackSchema}>
            <Form className="form">
                <div className="form-field">
                    <Field as={TextField} name="name" className="input-field" type="text" label="Name"></Field>
                    <ErrorMessage name="name" as="span" />
                </div>
                <div className="form-field">
                    <Field as={TextField} name="number" className="input-field" type="text" placeholder="000-00-00" label="Number"></Field>
                    <ErrorMessage name="number" as="span" />
                </div>
                <Button type="submit" className="form-btn" variant="contained">Add contact</Button>
            </Form>
        </Formik>
    )
}

export default ContactForm;