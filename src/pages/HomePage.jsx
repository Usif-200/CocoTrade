
import Features from "../sections/Features"
import Hero from "../sections/Hero"
import LogoCarousel from "../sections/LogoCarousel"
import Pricing from "../sections/Pricing"
import Testimonial from "../sections/Testimonial"
const HomePage = () => {
  return (
    <div className="bg-black mx-auto">
        {/* hero section */}
        <Hero/>
        {/* logo carousel section */}
        <LogoCarousel/>
        {/* features section */}
        <Features/>
        {/* pricing section */}
        <Pricing/>
        {/* testimonial section */}
        <Testimonial/>
    </div>
  )
}

export default HomePage