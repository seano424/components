import AccordionCard from './AccordionCard'

const cards = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    points: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus veniam quaerat nihil.',
      'Lorem, ipsum dolor.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi.',
    ],
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    points: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus veniam quaerat nihil.',
      'Lorem, ipsum dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore perspiciatis aperiam dolorem. Veniam quisquam doloribus facilis labore consectetur ipsam exercitationem.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi.',
    ],
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    points: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus veniam quaerat nihil.',
      'Lorem, ipsum dolor.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi.',
    ],
  },
]

export default function Accordion() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-3 py-10">
      {cards.map((card, i) => (
        <AccordionCard card={card} index={i} />
      ))}
    </div>
  )
}
