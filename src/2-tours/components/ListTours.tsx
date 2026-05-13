import type { ITour } from "../interface/Itour"
import Tour from "./Tour"

type ListToursProps = {
    listTours: ITour[],
    removeTour: (id: number) => void
}
const ListTours = ({ listTours, removeTour }: ListToursProps) => {
  return (
    <div className="flex flex-col items-center">
      {listTours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  )
}

export default ListTours