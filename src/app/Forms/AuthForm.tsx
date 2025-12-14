"use client"

import LoginForm from "@/app/Forms/LoginForm";
import RegisterForm from "@/app/Forms/RegisterForm";
import {useState} from "react";
import AuthModal from "@/app/components/UI/AuthModal";

export default function AuthForm() {
    const [authMode, setAuthMode] = useState<"login" | "register">("login");
    const toggleMode = () => {
        setAuthMode((prev) => (prev === "login" ? "register" : "login"));
    }
    return (
        <AuthModal title={authMode === "login" ? "Sign In": "Sign Up"}>
            {(close) => (
                authMode === "login" ? (
                    <LoginForm close={close} onSwitch={toggleMode}/>
                ):(
                    <RegisterForm close={close} onSwitch={toggleMode}/>
                )
            )}
        </AuthModal>
    )
}