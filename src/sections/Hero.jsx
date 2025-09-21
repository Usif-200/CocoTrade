import { ArrowRight, Command } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative container mx-auto px-4 pt-40 pb-20">
        {/* sub-title */}
            <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass">
                <span className="text-sm font-medium text-zinc-300">
                    <Command className='w-4 h-4 inline-block mr-2'/>
                    Next-gen forex trading platform
                </span>
            </div>

        {/* hero text */}
            <div className="max-w-4xl relative z-10">
                {/* heading */}
                <h1 className="text-5xl md:text-7xl mb-4 tracking-tight text-left">
                    <span className="clash-display grad1">
                        Trade forex with 
                    </span>
                    <br />
                    <span className="text-zinc-50 font-medium clash-display">
                        confidance & security
                    </span>
                </h1>
                {/* paragra */}
                <p className='text-lg text-zinc-300/80 mb-8 max-w-2xl text-left'>
                    Experience seamless forex trading with advanced features, real-time analytics, and institutional-grade security.
                    <span className="text-zinc-200">
                        Start trading in minutes.
                    </span>
                </p>
                {/* buttons */}
                <div className="col sm:flex-row gap-4 items-start">
                    <button className="bg-indigo-500 text-base clash-display glass px-4 centered-row gap-2 py-3 rounded-full cursor-pointer hover:-translate-y-1 transition2 hover:bg-indigo-500/20">
                        Start trading now
                    </button>

                    <button className="text-zinc-50 text-base clash-display  glass px-4 centered-row gap-2 py-3 rounded-full cursor-pointer hover:-translate-y-1 transition2 hover:bg-indigo-500/20">
                        view markets <ArrowRight className=''/>
                    </button>
                </div>
            </div>

        {/* hero img */}
        <div className="relative mx-auto max-w-5xl mt-20">
            <div className="glass rounded-xl overflow-hidden">
                <img src="/chart2.png" alt="hero img" className="w-full h-auto" />
            </div>
        </div>
    </section>
  )
}

export default Hero