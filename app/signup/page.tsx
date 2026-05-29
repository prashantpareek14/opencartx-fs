"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "../components/ui/FormField";
import Button from "../components/ui/Button";

const emailSchema = z.email({
  error: (issue) =>
    !issue.input ? "Email field is required" : "Invalid email format",
});

export const loginSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: emailSchema,
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    console.log('Signup data:', data);
  };

  return (
    <section>
      <div className="max-w-md mx-auto m-8 flex flex-col justify-center">
        <div className="text-center text-2xl font-medium">OpenCartX</div>
        <div className="text-center text-lg text-gray-600">
          Sign up for great shopping experience
        </div>
        <div className="mt-4 px-8 py-6 bg-white border border-gray-300 rounded-sm shadow-xs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormField
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                inputProps={register("name")}
                error={errors.name}
              />
            </div>
            <div className="mb-4">
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                inputProps={register("email")}
                error={errors.email}
              />
            </div>
            <div className="mb-4">
              <FormField
                label="Phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                inputProps={register("phone")}
                error={errors.phone}
              />
            </div>
            <div className="mb-4">
              <div className="flex space-x-2">
                <div>
                  <FormField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    inputProps={register("password")}
                    error={errors.password}
                  />
                </div>
                <div>
                  <FormField
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    placeholder="Enter your password again"
                    inputProps={register("confirmPassword")}
                    error={errors.confirmPassword}
                  />
                </div>
              </div>
            </div>
            <Button text="Signup" />
          </form>
        </div>
      </div>
    </section>
  );
}
