"use client";

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import {useState} from "react";
import {IAuthFormProps} from "@/app/Forms/IAuthForm.props";
import {emailValidator, passwordValidator} from "@/app/Forms/formValidators";
import {register} from "node:module";
import {registerUser} from "@/actions/register";


export default function RegisterForm({onSwitch, close}: IAuthFormProps) {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await registerUser(formData);
        console.log(result);
    };


    return (
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
                isRequired
                name="email"
                type="email"
                validate={emailValidator}
            >
                <Label>Email</Label>
                <Input
                    className="bg-neutral-800 text-white" placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <FieldError/>
            </TextField>

            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={passwordValidator}
            >
                <Label>Password</Label>
                <Input
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-neutral-800 text-white" placeholder="Enter your password"
                />
                <Description>Must be at least 8 characters with 1 uppercase and 1
                    number</Description>
                <FieldError/>
            </TextField>

            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                    if (value !== formData.password) {
                        return "Passwords doesnt match!"
                    }
                }}
            >
                <Label>Confirm Password</Label>
                <Input
                    className="bg-neutral-800 text-white" placeholder="Enter your password"
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
                <FieldError/>
            </TextField>

            <div className="flex flex-col gap-2">
                <Button className="w-[100%]" type="submit">
                    Sign Up
                </Button>
                <Button className="bg-neutral-800 w-[100%]" onPress={close} type="reset" variant="secondary">
                    Back
                </Button>
                <span className="text-center">Already have an Account? <Link onClick={onSwitch}
                                                                             className="text-blue-500"
                                                                             href="/">Sign In!</Link></span>
            </div>
        </Form>
    );
}
