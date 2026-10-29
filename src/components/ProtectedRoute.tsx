import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-200">
        <div className="relative mb-6">
          <img 
            src="/logo.png" 
            alt="RepoGhost" 
            className="w-16 h-16 object-contain animate-bounce" 
          />
          <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full -z-10 animate-pulse" />
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
          <span>Verifying your session...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
