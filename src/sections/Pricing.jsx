
import PricingTier from '../components/PricingTier'     
const Pricing = () => {


  return (
    <section className="container mx-auto py-24 px-4">

        {/* title */}
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 clash-display">Choose your <span className="grad1 clash-display">Trading Plan</span> </h2>
            <p className="text-lg text-zinc-300/80">Select the perfect trading plan with advanced features competitive fees</p>
        </div>
        {/* subscription cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <PricingTier
        key={1}
        isPopular={true}
        name="Basic Plan"
        description="A basic plan for individuals"
        features={["Feature 1", "Feature 2"]}
        price="$10/month"
    />
    <PricingTier
        key={2}
        isPopular={false}
        name="Standard Plan"
        description="A standard plan for teams"
        features={["Feature 1", "Feature 2", "Feature 3"]}
        price="$20/month"
    />
    <PricingTier
        key={3}
        isPopular={true}
        name="Premium Plan"
        description="A premium plan with extra features"
        features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
        price="$30/month"
    />
</div>


    </section>
  )
}

export default Pricing