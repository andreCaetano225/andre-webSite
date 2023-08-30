import { AboutMe } from '@/components/AboutMe/AboutMe'
import { Experience } from '@/components/Experience/Experience'
import { Profile } from '@/components/Profile'
import { TechStack } from '@/components/TechStack/TechStack'

export default function Home() {
  return (
    <div className="max-w-[1180px] w-full m-auto p-4">
      <Profile />
      <AboutMe />
      <TechStack />
      <Experience />
    </div>
  )
}
