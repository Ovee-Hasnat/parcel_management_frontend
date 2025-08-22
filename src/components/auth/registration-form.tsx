import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

// Define form data shape
interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  role?: boolean;
}

export function RegistrationForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    defaultValues: {
      role: false,
    },
  });

  const onSubmit = (data: RegistrationFormData) => {
    const formattedData = {
      ...data,
      role: data.role ? "agent" : "customer",
    };
    console.log(formattedData);
    // TODO: call API here
  };

  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="grid p-0">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Create an Account</h1>
              <p className="text-muted-foreground">
                Register for a new account
              </p>
            </div>

            {/* Name Field */}
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Role (Checkbox) */}
            <div className="flex items-center gap-2">
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="role"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(!!checked)}
                  />
                )}
              />
              <Label htmlFor="role">
                I want to register as a Delivery Agent
              </Label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Register
            </Button>

            {/* Link to Login */}
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
