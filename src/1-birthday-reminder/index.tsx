import { useState } from 'react';
import './style.css'
import List from './components/List'
import data from './data';
import type { IBirthDayList } from './interfaces/Ibirthday';
function BirthdayReminderApp() {
  const [people, setPeople] = useState<IBirthDayList[]>(data);


  const clearAll = () => {
    setPeople([])
  }
  return (
    <>
    <main id="BirthdayReminderApp" className='bg-pink-400'>
      <section id="center" className="container flex justify-center flex-col items-center bg-white w-fit px-20 py-10 rounded shadow-2xl shadow-indigo-950">
        <h3 className='text-3xl'>{people.length} birthdays today</h3>
       <List birthdayList={people} />

       <button onClick={clearAll} className="text-2xl mt-4 w-full bg-pink-400 px-3 py-2 rounded-md hover:bg-pink-500 text-white"> Clear All</button>
      </section>
    </main>
    </>
  )
}

export default BirthdayReminderApp
