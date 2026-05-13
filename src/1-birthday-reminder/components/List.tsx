import type { IBirthDayList } from "../interfaces/Ibirthday"

  type BirthdayProps = {
    birthdayList: IBirthDayList[]
  }
const List = ({ birthdayList }: BirthdayProps) => {

  return (
    <div>
         {birthdayList.map((person: IBirthDayList) => {
          const { id, name, age, image } = person
          return (
            <article key={id} className="flex justify-start items-center m-2">
              <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mx-4" />
              <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-500">{age} years</p>
              </div>
            </article>
          )
        })}
    </div>
  )
}

export default List