import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LockKeyhole, UserCircle, LogOut, LayoutDashboard, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  // DEV-NOTE: This is a mock authentication state for demonstration purposes.
  // In a real application, this would be handled by a context, hook (e.g., useAuth), or state management library.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // In a real app, you would also clear tokens, etc.
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LockKeyhole className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">SwiftLogin</span>
        </Link>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircle className="h-6 w-6" />
                  <span className="sr-only">Open user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/user-dashboard" className="flex items-center gap-2 cursor-pointer">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 text-red-500 cursor-pointer focus:text-red-500 focus:bg-red-50">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/">Login</Link>
              </Button>
              <Button asChild>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </Button>
            </>
          )}

           {/* DEV-ONLY: Button to toggle auth state for easy testing */}
           <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className="ml-4"
            >
             Toggle Auth
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;