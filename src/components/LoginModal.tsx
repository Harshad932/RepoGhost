import React from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { GithubIcon } from './Icons';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { login } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative">
            <img src="/logo.png" alt="RepoGhost" className="w-12 h-12 object-contain" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full -z-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Sign in to RepoGhost
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Explore your GitHub repositories with AI
            </p>
          </div>
        </div>

        {/* Explanation Card */}
        <div className="mb-6 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>Connect Your GitHub Account</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              RepoGhost connects directly to your GitHub account to let you select repositories and chat with an intelligent assistant about your codebase.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Profile Access</strong> — Displays your username, identity, and profile picture.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Repository Access</strong> — Allows you to choose public or private repositories to explore with AI.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Strict Privacy</strong> — Your source code is strictly read-only and never used to train public AI models.
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={login}
          className="w-full group relative flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 font-medium text-sm transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-[0.99]"
        >
          <GithubIcon className="w-5 h-5 text-white" />
          <span>Continue with GitHub</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Footer disclaimer */}
        <p className="mt-4 text-[11px] text-center text-slate-400 dark:text-slate-500">
          By signing in, you connect your GitHub account with read-only repository assistant access.
        </p>
      </div>
    </div>
  );
};
