import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerPage.module.css'
import { authServices } from '../../Services/auth';

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const { registration } = authServices()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            username : name,
            email,
            password
            
        }
        try {
        const { data } = await registration(newUser)
        console.log(data)
        } catch (err) {
            console.log(err.respons.data)
        }
        // registration(newUser)
    }

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>
                Регистрация
            </h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    label="Ваш @mail"
                    variant="filled"
                    type="email"
                    fullWidth
                    requared
                    style={{ marginBottom: "20px" }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Ваше имя"
                    variant="filled"
                    type="text"
                    fullWidth
                    requared
                    style={{ marginBottom: "20px" }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    label="Ваш Пароль"
                    variant="filled"
                    type="password"
                    fullWidth
                    requared
                    style={{ marginBottom: "40px" }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{
                        backgroundColor: "#BF94E8",
                        fontSize: "24px"
                    }}
                >Зарегистрироваться</Button>
            </form>
        </section>
    );
};

export default RegisterPage;