import React from 'react'
import * as zod from 'zod'

const loginSchema = zod.object({
    email: zod.string()
        .nonempty("Emai is required")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is not valid"),
    password: zod.string()
        .nonempty("Password is required")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"),
        
})
export default loginSchema;




