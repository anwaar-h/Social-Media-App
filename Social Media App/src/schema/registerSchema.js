import React from 'react'
import * as zod from 'zod'
export const schema = zod.object({
    name: zod.string()
        .nonempty("Name is required")
        .min(3 , "Name must be atleast 3 characters")
        .max(20 , "Name must be at most 20 characters"),
    email: zod.string()
        .nonempty("Emai is required")
        .regex(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Email is not valid"),
    password: zod.string()
        .nonempty("Password is required")
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"),
    rePassword: zod.string()
        .nonempty("Confirm Password is required"),
    dateOfBirth: zod.coerce.date().refine((data) =>{
        const birthDate = data.getFullYear();
        const now = new Date().getFullYear();
        const age = now - birthDate;
        return age >=18;
    },{ message:"You must be at least 18 years old to register" }),
    gender: zod.string()
        .nonempty("Gender is required")
        .regex(/^(male|female)$/, "Enter Valid Gender")

        
}).refine(  (data) => data.password === data.rePassword, {
    message: "Passwords do not match", path: ["rePassword"]  })


