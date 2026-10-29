import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, X, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ThemeToggle } from './ThemeToggle';
import { LoginModal } from './LoginModal';
import { GithubIcon } from './Icons';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDashboard = location.pathname.startsWith('/dashboard');

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#070b14]/80 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="RepoGhost Logo" 
                  className="w-9 h-9 object-contain group-hover:scale-105 transition-transform" 
                />
                <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full -z-10 group-hover:bg-cyan-400/40 transition-all" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-cyan-600 to-indigo-600 dark:from-white dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  RepoGhost
                </span>
                <span className="text-[10px] -mt-1 font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  AI Repository Assistant
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            {!isDashboard && (
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('security')}
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Permissions & Privacy
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  FAQ
                </button>
              </div>
            )}

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              {user ? (
                <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-800">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </Link>

                  <div className="flex items-center gap-2 px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                    {user.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.githubUsername}
                        className="w-6 h-6 rounded-full border border-cyan-400/30"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold">
                        {user.githubUsername.slice(0, 1).toUpperCase()}
                      </div>
                    )}
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 max-w-[100px] truncate">
                      {user.displayName || user.githubUsername}
                    </span>
                  </div>

                  <button
                    onClick={logout}
                    className="p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl transition-colors"
                    title="Sign Out"
                    aria-label="Sign out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-600 dark:hover:from-cyan-400 dark:hover:to-indigo-500 shadow-sm hover:shadow-cyan-500/25 transition-all active:scale-[0.98]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Connect GitHub</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-xl px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
            {!isDashboard && (
              <div className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 pb-3 border-b border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-left py-1.5 hover:text-cyan-400"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-left py-1.5 hover:text-cyan-400"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('security')}
                  className="text-left py-1.5 hover:text-cyan-400"
                >
                  Permissions & Privacy
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-left py-1.5 hover:text-cyan-400"
                >
                  FAQ
                </button>
              </div>
            )}

            {user ? (
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {user.avatarUrl && (
                    <img src={user.avatarUrl} alt="" className="w-8 h-8 rounded-full" />
                  )}
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">
                      {user.displayName || user.githubUsername}
                    </div>
                    <div className="text-[11px] text-slate-500">@{user.githubUsername}</div>
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500 text-white text-xs font-semibold"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Go to Dashboard</span>
                </Link>

                <button
                  onClick={logout}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-xs font-semibold"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-md"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Connect GitHub</span>
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};
