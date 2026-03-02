import React from 'react'
import { UserCheck, Mic, Timer } from "lucide-react";


const Steps = () => {
    const steps = [
        {
            id: 1,
            title: "Role & Experience",
            desc: "Select your role and experience level.",
            icon: <UserCheck size={32} />,
        },
        {
            id: 2,
            title: "Smart Voice Interview",
            desc: "AI-powered real-time voice interaction.",
            icon: <Mic size={32} />,
        },
        {
            id: 3,
            title: "Timer-Based Simulation",
            desc: "Answer within a live countdown timer.",
            icon: <Timer size={32} />,
        }
    ];
    return (
        <section className="max-w-7xl  mx-auto py-16 ">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className='text-4xl font-mono tracking-tight leading-tight text-zinc-900 outline-text italic'>Interview Flow</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 ">

                    {steps.map((step) => (
                        <div className=' px-4 group border border-gray-200 rounded-2xl hover:shadow-md transition duration-300 ' key={step.id}>
                            <span className='flex items-center justify-center py-4 text-blue-950 mt-4'>{step.icon}</span>
                            <h1 className='text-2xl font-medium font-mono '>{step.title}</h1>
                            <p className='text-gray-700 mb-8'>{step.desc}</p>

                        </div>
                    ))}

                </div>
            </div>
        </section >
    )
}

export default Steps
