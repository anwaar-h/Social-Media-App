import { Input, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import loginSchema from "../schema/loginSchema";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "mohamed@gmail.com",
      password: "mohamed@123",
    },
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  async function handleLogin(formData) {
    setIsLoading(true);
    setErrMsg("");
    const data = await loginApi(formData);
    setIsLoading(false);
    if (data.error) {
      setErrMsg(data.error);
    } else {
        navigate("/")
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1 className="text-center text-shadow-lg">Register Page</h1>
      <Input
        isInvalid={Boolean(errors.email)}
        errorMessage={errors.email?.message}
        type="email"
        name="email"
        label="Email"
        variant="bordered"
        {...register("email")}
      />
      <Input
        isInvalid={Boolean(errors.password)}
        errorMessage={errors.password?.message}
        type="password"
        name="password"
        label="Password"
        variant="bordered"
        {...register("password")}
      />
      <Button
        isLoading={isLoading}
        type="submit"
        color="primary"
        variant="bordered"
      >
        Register
      </Button>
      {errMsg && (
        <p className="text-sm bg-red-200 rounded-md p-2 text-red-800 text-center mt-0 capitalize">
          {errMsg}
        </p>
      )}
    </form>
  );
}
