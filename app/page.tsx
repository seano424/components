import { Inter } from 'next/font/google'
import Accordion from '@/components/Accordion'
import WithCallToAction from '@/components/headers/WithCallToAction'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <WithCallToAction />
      <Accordion />
    </main>
  )
}
