import React from 'react';
import { Shield, Sparkles } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#050811] text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/logo.png" alt="RepoGhost Logo" className="w-10 h-10 object-contain" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full -z-10" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                RepoGhost
              </span>
            </div>
            
            <p className="text-sm leading-relaxed max-w-sm text-slate-600 dark:text-slate-400">
              An intelligent GitHub repository assistant that brings codebases to life.
              Explore project architecture, trace logic, and chat with AI grounded in your repository context.
            </p>

            {/* Social Links as requested: GitHub, Instagram, LinkedIn */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-all shadow-sm"
                aria-label="RepoGhost on GitHub"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-400/40 transition-all shadow-sm"
                aria-label="RepoGhost on Instagram"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/40 transition-all shadow-sm"
                aria-label="RepoGhost on LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Product Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Permissions & Privacy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Trust & Security
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <Shield className="w-3.5 h-3.5 text-cyan-500" />
                <span className="text-slate-600 dark:text-slate-400">
                  Read-Only Repository Access
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span className="text-slate-600 dark:text-slate-400">
                  Zero Code Training Guarantee
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} RepoGhost. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">
              AI Codebase Assistant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
