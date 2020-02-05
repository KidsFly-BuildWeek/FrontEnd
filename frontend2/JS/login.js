
import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(
        () => {
            if (status) {
                setUsers([...users, status]);
                console.log(users);
            }
        },
        [status]);

    return (
        <div>
            <Form className='user-form'>
                <p>Name: <Field type='text' name='name' />{touched.name && errors.name && <p className='error'>{errors.name}</p>}</p>
                <p>Email: <Field type='email' name='email' />{touched.email && errors.email && <p className='error'>{errors.email}</p>}</p>
                <p>Password:<Field type='password' name='password' />{touched.password && errors.password && <p className='error'>{errors.password}</p>}</p>
            </Form>
        </div>
    );
};
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password }) {
        return {
            name: name || '',
            email: email || '',
            password: password || ''
        };
    },
    handleSubmit(values, { setStatus, setErrors }) {
        if (values.email === '') {
            setErrors({ email: 'That email is already taken.' });
        } else {
            axios
                .post('https://reqres.in/api/users/', values)
                .then((response) => {
                    setStatus(response.data);
                })
                .catch((error) => console.log(error.response));
        }
    }
})(UserForm);