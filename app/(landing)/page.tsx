
import LandingNavbar from "@/components/LandingNavbar";
import { LandingContent } from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";


export default function Home() {
  return (
    <main className='h-full'>
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
    </main>
  )
}
