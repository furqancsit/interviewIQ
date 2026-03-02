import React, { useState } from 'react'
import Steps from '../components/Steps';
import Features from '../components/Features';
import Auth from './Auth';

const Home = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (

        <section className="w-full bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-24 text-center">

                <div className="max-w-4xl mx-auto">

                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                        ✨ AI Powered Smart Interview Platform
                    </span>


                    <h1 className="serif text-6xl tracking-tight leading-tight text-zinc-900">
                        <span className="outline-text italic">Practice</span> with AI.<br />
                        Perform with{" "}
                        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                            Confidence.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Role-specific AI interviews with intelligent follow-ups — practice, get feedback, and perform with confidence.
                    </p>


                    <div className="mt-10">
                        <button
                            onClick={() => setIsAuthOpen(true)}
                            className="
              px-8 py-3
              rounded-full
              bg-black
              text-white
              font-medium
              text-base
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-0.5
              transition-all
              duration-300
              ease-out
              active:scale-95 cursor-pointer
            "
                        >
                            Start Interview →
                        </button>
                    </div>

                </div>
                {isAuthOpen && <Auth onClose={() => setIsAuthOpen(false)} />}
            </div>
            <Steps />
            <Features />
        </section>
    );
}

export default Home