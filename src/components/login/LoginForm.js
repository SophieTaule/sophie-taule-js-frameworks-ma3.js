import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormError from "./FormError";

const schema = yup.object().shape({
    userName: yup
        .string()
        .required("A username is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(4, 'Password must be at least 4 characters.')
});

function LoginForm() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="userName" placeholder="Enter username" ref={register} />
                {errors.userName && <FormError>{errors.userName.message}</FormError>}
            </Form.Group>


            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter password" ref={register} />
                {errors.password && <FormError>{errors.password.message}</FormError>}
            </Form.Group>

            <Button type="submit">Login</Button>
        </Form>
    );
}

export default LoginForm;

