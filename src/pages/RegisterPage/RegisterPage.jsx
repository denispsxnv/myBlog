import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerPage.module.css'
import { useFormik } from 'formik';
import { authServices } from '../../Services/auth'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';

const RegisterPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: ''
        },
        onSubmit: async (values) => {
            try {
                const data = await authServices.register(values)
                console.log(data);
                toast('пользователь зареган')
            } catch (err) {

                toast(err.response.data)
            }
        }
    }) 
 

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const newUser = {
    //         email,
    //         name,
    //         password
    //     }
    //     console.log(newUser)
    // }
return (
    <section className={styles.wrapper}>
        <h1 className={styles.title}>
            Регистрация
        </h1>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <TextField
                label="Ваш @mail"
                variant="filled"
                type="email"
                name='email'
                fullWidth
                required
                style={{ marginBottom: "20px" }}
                value={formik.values.email}
                onChange={formik.handleChange}

            />
            <TextField
                label="Ваше имя"
                variant="filled"
                type="text"
                name='username'
                fullWidth
                required
                style={{ marginBottom: "20px" }}
                value={formik.values.username}
                onChange={formik.handleChange}
            />
            <TextField
                label="Ваш Пароль"
                variant="filled"
                type="password"
                name='password'
                fullWidth
                required
                style={{ marginBottom: "40px" }}
                value={formik.values.password}
                onChange={formik.handleChange}

            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{ backgroundColor: "#BF94E8", fontSize: "24px" }}
            >Зарегистрироваться</Button>
            <ToastContainer/>
        </form>
    </section>
);
};

export default RegisterPage;
