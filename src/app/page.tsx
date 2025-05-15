import { BackgroundLines } from "@/components/ui/background-lines"
import { HeroSection } from "@/sections/hero-section"
import { TargetAudienceSection } from "@/sections/target-audience"


const page = () => {
  return (
       <div>
        <BackgroundLines>
          <HeroSection /> 
        </BackgroundLines>

        <TargetAudienceSection/>
       </div>
     
  )
}

export default page