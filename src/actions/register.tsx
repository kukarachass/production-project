"use server"


import {IForm} from "@/interfaces/IForm";
import {prisma} from "@/utils/prisma";

export async function registerUser( formData: IForm ) {
    const { password, confirmPassword, email } = formData;
    try {
        return await prisma.user.create({
            data: {
                email: email,
                password: password,
            }
        });
    } catch (err){
        console.error(err);
    }
}