import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GithubIcon } from '../components/Icons';

export const LoginPage: React.FC = () => {
  const { user, login } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-lg p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D] shadow-2xl overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-52 h-52 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Brand & Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <img src="/logo.png" alt="RepoGhost Logo" className="w-16 h-16 object-contain" />
            <div className="absolute inset-0 bg-cyan-400/25 blur-xl rounded-full -z-10 animate-pulse" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Connect to RepoGhost
          </h1>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            Sign in with your GitHub account to start exploring repositories with AI.
          </p>
        </div>

        {/* Permission Explanation */}
        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>Permission Overview</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              RepoGhost connects to GitHub to allow you to select and chat with repositories directly in your browser.
            </p>
          </div>

          <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Profile Identity</strong> — Signs you in and displays your username and avatar.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Repository Access</strong> — Allows you to choose which repositories to analyze.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Privacy Guarantee</strong> — Read-only access; your code is never used to train public models.
              </span>
            </div>
          </div>
        </div>

        {/* GitHub Sign in Button */}
        <button
          onClick={login}
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl text-white font-semibold text-sm bg-slate-900 hover:bg-slate-800 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-600 dark:hover:from-cyan-400 dark:hover:to-indigo-500 shadow-lg hover:shadow-cyan-500/25 transition-all active:scale-[0.99]"
        >
          <GithubIcon className="w-5 h-5" />
          <span>Authenticate with GitHub</span>
        </button>

        <p className="mt-5 text-[11px] text-center text-slate-400 dark:text-slate-500">
          Secure, read-only GitHub OAuth authorization
        </p>
      </div>
    </div>
  );
};
