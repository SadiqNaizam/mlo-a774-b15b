import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { UserPlus } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUpPage = () => {
  console.log('SignUpPage loaded');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would handle form validation and API submission here.
    // For this example, we'll simulate a successful sign-up.
    
    // NOTE: Accessing form data would typically be done via state or a library like react-hook-form
    // const formData = new FormData(event.currentTarget);
    // const name = formData.get('name');
    // const email = formData.get('email');
    // console.log("Creating account for:", { name, email });
    
    toast.success("Account created successfully!", {
      description: "You are now being redirected to the login page.",
    });

    // Redirect to login page after a short delay to allow user to see the toast
    setTimeout(() => {
      navigate('/'); // Navigate to LoginPage as defined in App.tsx
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2">
              <UserPlus className="h-6 w-6" />
              <CardTitle className="text-2xl">Create an Account</CardTitle>
            </div>
            <CardDescription>Enter your details below to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" required />
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/" className="underline font-medium text-primary">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SignUpPage;