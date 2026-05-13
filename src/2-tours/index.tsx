import {useState, useEffect} from 'react';
import ListTours from './components/ListTours';
import type { ITour } from './interface/Itour';

export const ToursApp = () => {
    const url = 'https://www.course-api.com/react-tours-project';
    const [tours, setTours] = useState<ITour[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTours = async () => {
        try {
            const data = await fetch(url);
            const tours = await data.json();
            setTours(tours);
            setLoading(false);
        }catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
        fetchTours();
    }, []);


    const removeTour = (id: number) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }



    if (loading) {
        return <h2 className='text-3xl'>Loading...</h2>
    }
    

  return (
    <main>
        <div className='text-center mx-auto w-full mt-20'>
            <h2 className='text-4xl text-center'>Our tours</h2>
            <div className=' w-full h-1.25 flex justify-center'>
                <div className='w-[100px] h-1.25 bg-blue-500 mx-auto'></div>
            </div>

            <ListTours listTours={tours} removeTour={removeTour} />
        </div>
    </main>
  )
}
