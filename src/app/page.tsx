import { AboutMe } from '@/components/AboutMe/AboutMe'
import { Profile } from '@/components/Profile'
import { TechStack } from '@/components/TechStack/TechStack'

export default function Home() {
  return (
    <div className="max-w-[1180px] w-full m-auto ">
      <Profile />
      <AboutMe />
      <TechStack />
    </div>
  )
}
