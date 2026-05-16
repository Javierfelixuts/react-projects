type AccordionProps = {
    question: string,
    info: string
}

const Accordion = ({question, info} : AccordionProps) => {
  return (
    <div className="accordion shadow p-2 my-3 block">
        <h3 className="text-lg font-bold">{question}</h3>
        <p className="font-semibold">{info}</p>
    </div>
  )
}

export default Accordion