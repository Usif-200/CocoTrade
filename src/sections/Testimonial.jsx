import React from 'react'
import { testimonials } from '../assets/data'

const Testimonial = () => {
  return (
    <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
            {/* title - كما هو تمامًا */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-normal mb-4 clash-display">Trusted by Traders</h2>
                <p className="text-zinc-400/90 text-lg">Join thousands of satisfied traders on CocoTrade</p>
            </div>
            
            {/* grid container للكروت */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    testimonials.map((testimonial, index) => (
                        <div key={index} className="cursor-pointer bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/30 transition-all duration-500 p-8 border-2 rounded-xl group hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                            {/* image & name */}
                            <div className="flex items-center gap-4 mb-6">
                                {/* img */}
                                <div className="h-12 w-12 overflow-clip rounded-full center-item text-center bg-pink-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-xl">{testimonial.name[0]}</span>
                                    )}
                                </div>
                                {/* name & role*/}
                                <div className="min-w-0">
                                    <h4 className="font-medium text-lg clash-display text-white/90 truncate group-hover:text-white transition-colors duration-300">{testimonial.name}</h4>
                                    <p className="text-sm text-white/60 truncate group-hover:text-white/80 transition-colors duration-300">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* content */}
                            <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">{testimonial.content}</p>

                            {/* تأثير إضافي عند Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/10 transition-all duration-700 rounded-xl pointer-events-none"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonial