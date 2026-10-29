import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, Sparkles, CheckCircle2, User, ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-[85vh] py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="/logo.png" alt="RepoGhost Logo" className="w-12 h-12 object-contain" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full -z-10" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              RepoGhost Dashboard
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Connected with GitHub
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-8 space-y-8">
        
        {/* Core Required Element: HELLO WORLD */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 dark:border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 via-slate-50 to-indigo-500/5 dark:from-[#0B1120] dark:via-[#0E172B] dark:to-[#13112E] p-8 sm:p-12 text-center shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Logged in successfully</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Hello World
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Welcome to RepoGhost! Your account is connected and ready.
          </p>
        </div>

        {/* Authenticated User Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* User Details Card */}
          <div className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-cyan-500" />
              <span>User Profile</span>
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.githubUsername}
                  className="w-20 h-20 rounded-2xl border-2 border-cyan-400 shadow-lg object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-cyan-500 text-white flex items-center justify-center text-3xl font-bold">
                  {user?.githubUsername?.slice(0, 1).toUpperCase() || 'U'}
                </div>
              )}

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {user?.displayName || user?.githubUsername}
                  </h4>
                  <a
                    href={`https://github.com/${user?.githubUsername}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    title="View GitHub Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400">
                  @{user?.githubUsername}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub Account Linked
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Status Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-cyan-500" />
                <span>Repository Status</span>
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>GitHub Authentication Active</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Repository Access Ready</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[11px] text-slate-400">
                Repository browser & chat assistant interface
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
