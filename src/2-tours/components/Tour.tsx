import type { ITour } from "../interface/Itour"

type TourProps = {
  tour: ITour,
  removeTour: (id: number) => void
}
const Tour = ({ tour, removeTour }: TourProps) => {
  return (
    <article id="article-tour" className="w-[800px] flex flex-col items-center m-3 p-3 shadow-lg rounded">
      <img className="w-full h-80 object-cover" src={tour.image} alt={tour.name} />
      <div className="flex justify-between w-full p-4">
        <h2 className="font-bold">{tour.name}</h2>
        <span className="text-blue-500 font-bold bg-blue-300 rounded px-2 py-1">${tour.price}</span>
      </div>
      <p className="w-fit text-justify pb-10">{tour.info}</p>
      <button className="border border-red-500 text-red-500 py-2 px-4 rounded hover:bg-red-600 hover:text-white" onClick={() => removeTour(tour.id)}>
        Not Interested
      </button>
    </article>
    )
  }

export default Tour