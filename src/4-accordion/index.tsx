import Accordion from "./components/Accordion"
import "./style.css"
import questions from "./data.ts"

const AccordionApp = () => {
  return (
    <main id="AccordionApp" className="flex justify-center items-center">
        <div className="card flex">
            <h2 className="text-3xl w-5/12 font-bold">Questions And Answers about the login</h2>
            <div className="accordion-container w-8/12 p-4">
            {questions.map((q) => 
                <Accordion key={q.id} question={q.title} info={q.info}/>
            )}
            </div>
        </div>
    </main>
  )
}

export default AccordionApp