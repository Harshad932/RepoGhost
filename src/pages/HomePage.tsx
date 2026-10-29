import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  FileCode2, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Lock, 
  Zap, 
  Search, 
  GitBranch, 
  MessageSquare, 
  Code2, 
  FolderGit2 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LoginModal } from '../components/LoginModal';
import { GithubIcon } from '../components/Icons';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleAuthAction = () => {
    if (user) {
      window.location.href = '/dashboard';
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const faqs = [
    {
      q: 'What is RepoGhost?',
      a: 'RepoGhost is an AI assistant for your GitHub repositories. It allows you to explore any codebase through natural language conversation, helping you understand complex logic, find where features are implemented, and navigate architectures effortlessly.'
    },
    {
      q: 'What kind of questions can I ask about my repository?',
      a: 'You can ask anything from high-level architecture overviews ("How does authentication work in this app?") to pinpoint implementation details ("Where is the payment webhook handled and what does it validate?").'
    },
    {
      q: 'Does RepoGhost modify my code?',
      a: 'No. RepoGhost only requires read access to inspect your repository structure and files so it can answer your questions accurately. It never commits changes or alters your code.'
    },
    {
      q: 'Can I use RepoGhost with both public and private repositories?',
      a: 'Yes. Once you connect your GitHub account, you can select any repository you have access to, whether public or private.'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>AI-Powered GitHub Repository Assistant</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Talk Directly to <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Any GitHub Repository
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Turn your repositories into interactive knowledge hubs.
            Understand unfamiliar codebases, locate key logic, and get instant answers with accurate code references.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <Link
                to="/dashboard"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <button
                onClick={handleAuthAction}
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-600 dark:hover:from-cyan-400 dark:hover:to-indigo-500 shadow-xl hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <GithubIcon className="w-5 h-5" />
                <span>Connect GitHub</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            )}

            <a
              href="#how-it-works"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <span>See How It Works</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Seamless GitHub Sign-In
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Read-Only Repository Access
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Your Code Remains Private
            </span>
          </div>

        </div>

        {/* Hero Interactive Visual Mockup (Generic Demo Code) */}
        <div className="mt-14 md:mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-xl dark:opacity-40 animate-pulse-glow" />
          
          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B1120]/90 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  repoghost-assistant — demo-workspace / web-platform
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  AI Assistant Active
                </span>
              </div>
            </div>

            {/* Split Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
              
              {/* Left Tree Explorer (Generic Demo Files) */}
              <div className="hidden md:block md:col-span-4 border-r border-slate-200 dark:border-slate-800 p-4 font-mono text-xs text-slate-600 dark:text-slate-400 space-y-2 bg-slate-50/50 dark:bg-slate-950/40">
                <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Selected Repository
                </div>
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>main (developer/ecommerce-core)</span>
                </div>
                <div className="pl-3 space-y-1.5 pt-1">
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>src/index.ts</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>src/routes/checkout.ts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>src/services/payment.ts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>src/middleware/auth.ts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>package.json</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6">
                  <div className="text-[11px] font-semibold text-slate-400">Repository Insights</div>
                  <div className="mt-2 text-slate-500 text-[11px] space-y-1">
                    <div>• 142 total files analyzed</div>
                    <div>• Full project structure mapped</div>
                    <div>• Ready for instant conversation</div>
                  </div>
                </div>
              </div>

              {/* Right Chat Mockup */}
              <div className="md:col-span-8 p-5 flex flex-col justify-between space-y-4">
                
                {/* Chat History */}
                <div className="space-y-4">
                  {/* User Question */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-cyan-500 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-md text-xs font-medium shadow-sm">
                      How is order validation and inventory reserve handled during checkout in this project?
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center shrink-0 p-1">
                      <img src="/logo.png" alt="Ghost" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl rounded-tl-sm p-4 max-w-lg text-xs space-y-2 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200">
                      <p className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>RepoGhost Assistant</span>
                      </p>
                      <p className="leading-relaxed">
                        Checkout logic is orchestrated in <code className="font-mono text-cyan-500">src/routes/checkout.ts</code>. When a request arrives, <code className="font-mono text-cyan-500">validateCartItems()</code> verifies stock availability before dispatching payment.
                      </p>
                      <div className="p-2 rounded bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
                        <code>await inventoryService.reserveItems(cart.id, cart.items);</code>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        If payment succeeds, the order status transitions to confirmed; otherwise, the reserve hold expires automatically.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simulated Input Box */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <Terminal className="w-4 h-4 text-cyan-500 ml-2" />
                    <input
                      type="text"
                      disabled
                      placeholder="Ask RepoGhost any question about your codebase..."
                      className="w-full bg-transparent text-xs text-slate-700 dark:text-slate-300 focus:outline-none placeholder:text-slate-400"
                    />
                    <button
                      onClick={handleAuthAction}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-400 transition-colors"
                    >
                      Connect
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics & Statistics */}
      <section className="py-12 border-y border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#060A14]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-500 font-mono">
                Instant
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Code Answers
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Immediate answers to complex questions
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-500 font-mono">
                100%
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Repository Grounded
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Grounded strictly in your source files
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-500 font-mono">
                Private
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Safe & Confidential
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Your code is never shared or publicized
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 font-mono">
                10x
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Faster Onboarding
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Understand new repositories in minutes
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
            Product Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Everything You Need to Understand Any Codebase
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            RepoGhost helps developers explore unfamiliar projects, trace logic, and answer architectural questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 hover:border-cyan-500/50 transition-all shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-5 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Natural Language Code Chat
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Ask questions naturally about how features work, where specific functionality is defined, and how modules connect.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 hover:border-cyan-500/50 transition-all shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 mb-5 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Deep Codebase Context
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every answer references your actual files, functions, and logic flows, providing context-aware guidance rather than generic advice.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 hover:border-cyan-500/50 transition-all shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-5 group-hover:scale-110 transition-transform">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Repository Access Control
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect with your GitHub account to access both public open-source projects and your private team repositories securely.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 hover:border-cyan-500/50 transition-all shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-5 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Read-Only Security
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              RepoGhost operates in read-only mode to analyze and explain code. It will never push commits, modify files, or trigger deployments.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 hover:border-cyan-500/50 transition-all shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 mb-5 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Rapid Developer Onboarding
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Save hours of ramp-up time on unfamiliar codebases by asking RepoGhost to explain the architecture, data flows, and dependencies.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 hover:border-cyan-500/50 transition-all shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Any Language & Stack
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Works across any programming language, framework, or project structure, whether full-stack web, mobile, CLI, or backend services.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#060913]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
              Simple 3-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              How RepoGhost Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Get started with RepoGhost in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Sign in with GitHub
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect your GitHub account to allow RepoGhost to list and view repositories you choose to explore.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Select a Repository
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Pick any repository you own or contribute to. RepoGhost reads the project structure and prepares the assistant.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-500 text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Chat & Explore
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ask questions about code architecture, implementation details, and business logic with instant, accurate answers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Permissions & Privacy Transparency */}
      <section id="security" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-[#0B1120] dark:via-[#0E172B] dark:to-[#0B1120] p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Permissions & Privacy</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                How We Protect Your Repositories
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                RepoGhost connects with your GitHub account strictly to deliver repository assistance while safeguarding your privacy:
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Profile Identity:</strong> We verify your GitHub account to show your profile and keep your sessions separate.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Repository Access:</strong> Only the repositories you choose to inspect are accessed to answer your inquiries.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Privacy:</strong> Your proprietary source code is never used to train public machine learning models.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleAuthAction}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 shadow-md transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Connect GitHub</span>
                </button>
              </div>
            </div>

            {/* Visual Security Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-lg w-full max-w-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">Security Guarantees</span>
                  <span className="text-emerald-500">Verified</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Authentication:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">GitHub OAuth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Access Mode:</span>
                    <span className="font-medium text-cyan-500">Read-Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Code Training:</span>
                    <span className="font-medium text-emerald-500">Zero Retention</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Account Privacy:</span>
                    <span className="font-medium text-purple-400">Protected</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
            Got Questions?
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-slate-900 dark:text-white"
              >
                <span>{faq.q}</span>
                <span className="text-cyan-500 font-mono text-lg ml-4">
                  {activeFaq === idx ? '−' : '+'}
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center bg-slate-900 text-white shadow-2xl dark:border dark:border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 pointer-events-none" />
          
          <div className="relative space-y-5 max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-2">
              <img src="/logo.png" alt="RepoGhost Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Ready to converse with your repository?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Connect your GitHub account today and explore your code with an intelligent AI assistant.
            </p>
            <div className="pt-3">
              <button
                onClick={handleAuthAction}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 shadow-xl hover:shadow-cyan-400/25 transition-all transform hover:-translate-y-0.5"
              >
                <GithubIcon className="w-5 h-5 text-slate-950" />
                <span>{user ? 'Open Dashboard' : 'Connect GitHub'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};
