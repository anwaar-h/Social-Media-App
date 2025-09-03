import { Input, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import loginSchema from "../schema/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { counterContext } from "../contexts/CounterContext";
import { authContext } from "../contexts/AuthContext";
import { loginApi } from "../services/authServices";
export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate()
    const { setIsLoggedIn } = useContext(authContext)
    
    const {handleSubmit, register,formState: { errors },} = useForm({
    defaultValues: {
        email: "anwaar7@gmail.com",
        password: "Anwaar1234567?",
    },
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    });

    async function handleLogin(formData) {
    setIsLoading(true);
    setErrMsg("");
    const data = await loginApi(formData);
    setIsLoading(false);

    if (data.message == "success")  {
        localStorage.setItem("token", data.token)
        setIsLoggedIn(true)
        navigate("/")
    } else if (data.error)  {
        setErrMsg(data);
    }
    }

    return (
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-center">Login Form</h1>
                            <Input isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} variant="bordered" label="Email" type="email" {...register("email")} />
                            <Input isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} variant="bordered" label="Password" type="password" {...register("password")} />
                            <Button isLoading={isLoading} type="submit" color="primary" variant="bordered">
                                Login
                            </Button>
                            {errMsg && <p className="p-2 bg-red-200 text-red-700 text-sm text-center capitalize rounded">{errMsg}</p>}
                            <p className="font-bold text-center">Don't Have Account? <Link to={"/register"} className=" text-center text-primary-500">Create Account Now</Link></p>
                        </div>
                    </form>
  );
}
