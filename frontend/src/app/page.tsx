'use client'

import React from "react";
// import { Button } from "../components/ui/button";
import { Swords, Globe, TrendingUp, LogIn } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Swords,
    title: "Deck Forge",
    description: "Craft your ultimate strategy with precision tools",
  },
  {
    icon: Globe,
    title: "Global Meta",
    description: "Analyze trends across competitive landscapes",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Measure and improve your deck's potential",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Unleash Your{" "}
              <span className="text-emerald-500">Deck's Potential</span>
            </h1>
            <p className="text-slate-400 text-xl mb-8">
              Transform your Magic: The Gathering strategy with intelligent deck
              building and deep competitive insights
            </p>
            <div className="flex space-x-4">
              <Link href="/deck-builder">
                <button className="flex items-center space-x-2">
                  <LogIn size={20} />
                  <span>Get Started</span>
                </button>
              </Link>
              <button>
                Explore Decks
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
              <div className="bg-gradient-to-br from-emerald-900 to-slate-800 h-72 rounded-lg opacity-80"></div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-700 transition-all"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="text-emerald-500 mr-4" size={36} />
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        <div className="mt-16 bg-slate-900 rounded-xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-emerald-500">50K+</h2>
              <p className="text-slate-400">Decks Created</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-emerald-500">250+</h2>
              <p className="text-slate-400">Active Tournaments</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-emerald-500">10K+</h2>
              <p className="text-slate-400">Community Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
