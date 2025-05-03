import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import PythonBackground from '../../components/PythonBackground';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Holographic from './sections/Holographic';
import Code from './sections/Code';
const DarkStatsLanding = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden relative">
            {/* Python-themed background elements */}
            <PythonBackground />
            {/* Glowing accent lines */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute left-0 top-1/3 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-20 blur-lg" />
                <div className="absolute left-0 top-2/3 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-20 blur-lg" />
            </div>
            {/* Navigation */}
            <Navbar />
            {/* Hero Section */}
            <Hero />
            {/* Features Section */}
            <Features />
            {/* Holographic Display Section */}
            <Holographic />
            {/* Code Example Section */}
            <Code />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DarkStatsLanding;