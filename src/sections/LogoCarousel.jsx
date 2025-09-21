import {motion} from "framer-motion"

const LogoCarousel = () => {

    const logos = [
        "/log1.png",
        "/log2.png",
        "/log3.png",
        "/log4.png",
        "/log5.png",
    ]

    const extendedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="w-full overflow-hidden cursor-pointer bg-[#050505] backdrop-blur-sm py-12 mt-5">
        <motion.div 
            className="flex space-x-16" 
            style={{
                width: "fit-content",
                display:"flex",
                gap:"4rem"
            }}
            initial={{ opacity: 0, x: "0" }}
            animate={{ opacity: 1, x: "-100%" }}
            transition={{
                opacity: { duration: 0.5 },
                x: {
                    repeat: Infinity, 
                    duration: 30,  // زيادة الوقت لجعل الحركة أبطأ وأقل قفزًا
                    ease: "linear"
                }
            }}>
            {
                extendedLogos.map((logo, index) => (
                    <motion.img 
                        key={index} 
                        src={logo} 
                        alt={`Logo ${index + 1}`}
                        className="h-8 object-contain"
                        initial={{ opacity: 0.5 }}
                        whileHover={{ scale: 1.05, opacity: 1, transition: { duration: 0.2 } }}
                    />
                ))
            }
        </motion.div>
    </div>
  )
}

export default LogoCarousel
