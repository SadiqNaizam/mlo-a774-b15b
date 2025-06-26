import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/ui Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

// Icons
import { LogOut } from 'lucide-react';

const UserDashboardPage = () => {
  console.log('UserDashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, this would also involve clearing authentication tokens from storage.
    console.log('User initiated logout.');
    navigate('/'); // Redirect to the LoginPage, which is at the root path.
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">User Dashboard</CardTitle>
            <CardDescription>Welcome back! You are successfully logged in.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 pt-2">
            <Avatar className="h-24 w-24 border-2 border-primary">
              {/* Using a placeholder image for the user's avatar */}
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="text-lg font-semibold">Demo User</p>
              <p className="text-sm text-muted-foreground">user@example.com</p>
            </div>
            <Button onClick={handleLogout} className="w-full max-w-xs mt-4" variant="destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboardPage;