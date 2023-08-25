import { Profile } from '@/components/Profile'
import { Skills } from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-[1180px] w-full m-auto ">
      <Profile />
      <Skills />
    </div>
  )
}
