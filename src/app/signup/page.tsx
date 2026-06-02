"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { SignupSchema, type SignupInput } from "@/lib/validations";
import { signup } from "@/actions/auth";

export default function Signup() {
  const [signupError, setSignupError] = useState<string[] | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(SignupSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: SignupInput) => {
    try {
      const result = await signup(data);

      if (!result.success) {
        setSignupError(result.errors);
      }

      toast.success("Signup successful! Please check your email to verify your account.", { duration: 2000 });

      // redirect to home page
      router.push("/");
    } catch (error) {
      toast.error("Signup failed. An unexpected error occurred.");
    }
  };

  return (
    <section>
      <div className="max-w-md mx-auto m-8 flex flex-col justify-center">
        <div className="text-center text-2xl font-medium">OpenCartX</div>
        <div className="text-center text-lg text-gray-600">
          Sign up for great shopping experience
        </div>
        {signupError && (
          <div className="mt-2">
            {signupError.map((error, index) => (
              <p key={index} className="text-red-500">{error}</p>
            ))}
          </div>
        )}
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
            <Button text="Signup" disabled={isSubmitting} />
          </form>
        </div>
      </div>
    </section>
  );
}
