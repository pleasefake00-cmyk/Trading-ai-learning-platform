import Link from "next/link";
import { ArrowRight, Bot, BookOpen, TrendingUp, CheckCircle2 } from "lucide-react";
import { Price } from "@/components/ui/Price";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 pt-20 pb-16 text-center lg:pt-32 lg:pb-24">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
          Trade Smarter. Learn Faster. Powered by AI.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Master the markets with personalized AI-driven learning paths, real-time paper trading, and instant feedback. From absolute beginner to professional trader.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105"
          >
            Start Free <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-8 text-base font-medium shadow-sm transition-all hover:bg-accent/10 hover:text-accent hover:border-accent"
          >
            View Demo
          </Link>
        </div>
        
        {/* Mock Dashboard Screenshot */}
        <div className="mt-16 relative mx-auto w-full max-w-4xl rounded-xl border border-border bg-card/50 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 opacity-50"></div>
          <div className="aspect-[16/9] w-full flex flex-col items-center justify-center border-b border-border/50 bg-black/40">
             <TrendingUp className="w-16 h-16 text-accent animate-bounce mb-4" />
             <p className="text-muted-foreground font-mono">Interactive Trading Simulator Placeholder</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full border-y border-border bg-muted/30 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-foreground font-mono">12,000+</span>
            <span className="text-sm text-muted-foreground mt-1">Active Learners</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-accent font-mono">94%</span>
            <span className="text-sm text-muted-foreground mt-1">Pass Rate on Prop Firm Challenges</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary font-mono">6</span>
            <span className="text-sm text-muted-foreground mt-1">Markets Covered</span>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need to succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines traditional learning with cutting-edge AI and market simulation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-start p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-primary/20 transition-all">
            <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Adaptive Learning Path</h3>
            <p className="text-muted-foreground">
              Courses that adapt to your skill level. Skip what you know, focus on what you need to master.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-start p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-accent/20 transition-all">
            <div className="p-3 rounded-xl bg-accent/10 text-accent mb-4">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Trading Coach</h3>
            <p className="text-muted-foreground">
              Get instant feedback on quizzes, ask questions during lessons, and receive daily personalized market tips.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-start p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-destructive/20 transition-all">
            <div className="p-3 rounded-xl bg-destructive/10 text-destructive mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Paper Trading Simulator</h3>
            <p className="text-muted-foreground">
              Practice strategies in real-time with <Price amount={100000} currency="USD" /> in virtual funds before risking real capital.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full border-t border-border bg-muted/10 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple, transparent pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start for free, upgrade when you need more power.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="flex flex-col p-8 rounded-3xl bg-card border border-border shadow-sm relative">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="mb-6 flex items-baseline justify-center">
                <Price amount={0} currency="USD" className="text-4xl font-extrabold font-mono" />
                <span className="text-muted-foreground ml-1">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Basic courses (Stocks only)</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Standard paper trading</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Community access</li>
              </ul>
              <Link href="/signup" className="w-full py-3 rounded-lg border border-border text-center font-medium hover:bg-muted transition-colors">
                Get Started
              </Link>
            </div>
            
            {/* Pro Tier */}
            <div className="flex flex-col p-8 rounded-3xl bg-card border-2 border-primary shadow-xl shadow-primary/10 relative scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6 flex items-baseline justify-center">
                <Price amount={29} currency="USD" className="text-4xl font-extrabold font-mono" />
                <span className="text-muted-foreground ml-1">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> All Markets (Crypto, Forex)</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> AI Trading Coach (100 prompts/mo)</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Advanced Simulator features</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Certificate of completion</li>
              </ul>
              <Link href="/signup?plan=pro" className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-center font-medium hover:bg-primary/90 transition-colors">
                Start Pro Trial
              </Link>
            </div>
            
            {/* Elite Tier */}
            <div className="flex flex-col p-8 rounded-3xl bg-card border border-border shadow-sm relative">
              <h3 className="text-2xl font-bold mb-2">Elite</h3>
              <div className="mb-6 flex items-baseline justify-center">
                <Price amount={79} currency="USD" className="text-4xl font-extrabold font-mono" />
                <span className="text-muted-foreground ml-1">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Options & Futures included</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Unlimited AI Coach</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> 1-on-1 Mentor matching</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3" /> Proprietary trading firm prep</li>
              </ul>
              <Link href="/signup?plan=elite" className="w-full py-3 rounded-lg border border-border text-center font-medium hover:bg-muted transition-colors">
                Upgrade to Elite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
