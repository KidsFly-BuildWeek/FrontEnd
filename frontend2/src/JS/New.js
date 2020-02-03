
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
                <p>Agree to Terms of Service:<Field type='checkbox' name='terms' checked={values.terms} />{errors.terms && <p className='error'>{errors.terms}</p>}</p>
                <p>Role:
					<Field component='select' name='role'>
                        <option>Traveller or AFP?</option>
                        <option value='Front End'>Air Flight Personnel(AFP)</option>
                        <option value='Back End'>Traveller</option>
                    </Field>
                </p>
                <button>Submit!</button>
            </Form>
            <div className='users'>
                {users.map((user) => (
                    <div className='user'>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms, role }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false,
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('put a name'),
        email: Yup.string().required('put a email'),
        password: Yup.string().required('put a password'),
        terms: Yup.boolean().oneOf([true], 'ACCEPT.')
    }),
    handleSubmit(values, { setStatus, setErrors }) {
        if (values.email === 'waffle@syrup.com') {
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

export default FormikUserForm;