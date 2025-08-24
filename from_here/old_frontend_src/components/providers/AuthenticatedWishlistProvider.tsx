'use client';

import { useAuth } from '@/contexts/AuthContext';
import { WishlistProvider } from '@/contexts/WishlistContext';

interface AuthenticatedWishlistProviderProps {
  children: React.ReactNode;
}

export default function AuthenticatedWishlistProvider({ children }: AuthenticatedWishlistProviderProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <WishlistProvider>
        {children}
      </WishlistProvider>
    );
  }

  return <>{children}</>;
} 