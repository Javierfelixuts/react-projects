import Accordion from "./components/Accordion"
import "./style.css"
import questions from "./data.ts"


const AccordionApp = () => {
  
  return (
    <main id="AccordionApp" className="flex justify-center items-center">
        <div className="card flex flex-wrap">
            <h2 className="text-left text-3xl w-4/12  font-bold">Questions And Answers about the login</h2>
            <div className="accordion-container w-fit md:w-8/12">
            {questions.map((q) => 
                <Accordion key={q.id} question={q.title} info={q.info} id={q.id} isOpen={true}/>
            )}
            </div>
        </div>
    </main>
  )
}

export default AccordionApp