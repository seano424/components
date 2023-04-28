import { Inter } from 'next/font/google'
import Accordion from '@/components/Accordion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Accordion />
    </main>
  )
}
