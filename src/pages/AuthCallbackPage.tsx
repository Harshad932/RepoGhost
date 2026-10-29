import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { GithubIcon } from '../components/Icons';

export const AuthCallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { checkAuth, login } = useAuth();

  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const errorParam = searchParams.get('error');

    if (errorParam) {
      setStatus('error');
      if (errorParam === 'oauth_failed') {
        setErrorMessage('GitHub authorization was cancelled or could not be completed.');
      } else {
        setErrorMessage(`Authentication error: ${errorParam}`);
      }
      return;
    }

    // Verify session
    const verify = async () => {
      setStatus('verifying');
      try {
        const authenticated = await checkAuth();
        if (authenticated) {
          setStatus('success');
          setTimeout(() => {
            navigate('/dashboard', { replace: true });
          }, 800);
        } else {
          setStatus('error');
          setErrorMessage('Session was not established. Please check if cookies are enabled or try logging in again.');
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage('Unable to complete connection. Please check your network connection and try again.');
      }
    };

    verify();
  }, [searchParams, checkAuth, navigate]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="relative w-full max-w-md p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222] shadow-2xl text-center overflow-hidden">
        
        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative mx-auto w-16 h-16 mb-6 flex items-center justify-center">
          <img src="/logo.png" alt="RepoGhost Logo" className="w-16 h-16 object-contain" />
          <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full -z-10" />
        </div>

        {status === 'verifying' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Authenticating with GitHub
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Finalizing authorization and setting up your RepoGhost session...
            </p>
            <div className="flex items-center justify-center gap-2 pt-2 text-cyan-500 dark:text-cyan-400 text-sm font-medium">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Verifying credentials...</span>
            </div>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Authentication Successful!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Redirecting you to your RepoGhost dashboard...
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Authentication Incomplete
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {errorMessage}
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={login}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 font-semibold text-xs transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Retry GitHub Login</span>
              </button>

              <Link
                to="/"
                className="w-full py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
