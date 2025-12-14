"use client";

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import {IAuthFormProps} from "@/app/Forms/IAuthForm.props";
import {emailValidator, passwordValidator} from "@/app/Forms/formValidators";

export default function LoginForm({ onSwitch, close }: IAuthFormProps) {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
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
                <Input className="bg-neutral-800 text-white" placeholder="john@example.com"/>
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
                <Input className="bg-neutral-800 text-white" placeholder="Enter your password"/>
                <Description>Must be at least 8 characters with 1 uppercase and 1
                    number</Description>
                <FieldError/>
            </TextField>

            <div className="flex flex-col gap-2">
                <Button className="w-[100%]" type="submit">
                    Sign In
                </Button>
                <Button className="bg-neutral-800 w-[100%]" onPress={close} type="reset" variant="secondary">
                    Back
                </Button>
                <span className="text-center">Dont have an Account? <Link onClick={onSwitch} className="text-blue-500"
                                                                          href="/">Sign Up!</Link></span>
            </div>
        </Form>

    );
}