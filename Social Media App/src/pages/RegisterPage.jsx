import { Input, Select, SelectItem, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import  registerSchema  from "../schema/registerSchema" 
import { registerApi } from "../services/authServices";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import { counterContext } from "../contexts/CounterContext";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const navigate = useNavigate()
    const {handleSubmit, register, formState:{errors} , reset } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            dateOfBirth:new Date(),
            gender: ""
        },
        resolver: zodResolver(registerSchema),
        mode: "onTouched"
    });

    async function handleRegister(formData){
        setIsLoading(true)
        setErrMsg("")
        setSuccessMsg("")
        const data = await registerApi(formData)
        setIsLoading(false)
        if (data.error) {
            setErrMsg(data.error)
        } else{
            setSuccessMsg(data.message)
            reset() 
            setInterval(() => {
                navigate("/login")
            } , 1000 )
        }
    }
 
    return (
    <form onSubmit={handleSubmit(handleRegister)}>
        <div className="flex flex-col gap-6">
            <h1 className="text-center">Register Page</h1>
            <Input isInvalid={Boolean(errors.name)} errorMessage={errors.name?.message} type="name" name="name" label="Name" variant="bordered" {...register("name")} />
            <Input isInvalid={Boolean(errors.email)} errorMessage={errors.email?.message} type="email" name="email" label="Email" variant="bordered" {...register("email")} />
            <Input isInvalid={Boolean(errors.password)} errorMessage={errors.password?.message} type="password" name="password" label="Password" variant="bordered" {...register("password")} />
            <Input isInvalid={Boolean(errors.rePassword)} errorMessage={errors.rePassword?.message} type="password" name="rePassword" label="Confirm Password" variant="bordered" {...register("rePassword")} />
            <Input isInvalid={Boolean(errors.dateOfBirth)} errorMessage={errors.dateOfBirth?.message} type="date" name="dateOfBirth" label="Date Of Birth" variant="bordered" {...register("dateOfBirth")} />
            <Select isInvalid={Boolean(errors.gender)} errorMessage={errors.gender?.message} name="gender" label="Gender" variant="bordered" {...register("gender")}>
                <SelectItem key={"male"}>Male</SelectItem>
                <SelectItem key={"female"}>Female</SelectItem>
            </Select>
            <>
            <Button isLoading={isLoading} type="submit" color="primary" variant="bordered">Register</Button>
            <p className="font-bold text-center">Already Have An Account <Link to={"/login"} className=" text-center text-primary-500">Login Now</Link> </p>

            {errMsg && <p className='text-sm bg-red-200 rounded-md p-2 text-red-800 text-center mt-0'>{errMsg}</p>}
            {successMsg && <p className='text-sm bg-green-200 rounded-md p-2 text-green-800 text-center mt-0'>{successMsg}</p>}
            </>
    </div>
    </form>
  )
}
