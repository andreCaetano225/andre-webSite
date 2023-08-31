import { AboutMe } from '@/components/AboutMe/AboutMe'
import { DownloadCv } from '@/components/DownloadCv/DownloadCv'
import { Education } from '@/components/Education/Education'
import { Experience } from '@/components/Experience/Experience'
import { Finaly } from '@/components/Finaly/Finaly'
import { Profile } from '@/components/Profile'
import { TechStack } from '@/components/TechStack/TechStack'

export default function Home() {
  return (
    <div className="max-w-[1180px] w-full m-auto p-4 flex flex-col gap-10">
      <Profile />
      <AboutMe />
      <TechStack />
      <Experience />
      <Education />
      <DownloadCv />
      <Finaly />
    </div>
  )
}
