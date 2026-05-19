import './style.css'    
const url = 'https://course-api.com/react-tabs-project';
const TabsApp = () => {

    console.log("url: ", url);
  return (
    <main>
        <h1 className='text-center text-4xl font-bold pt-52'>Experience</h1>

        <div className='grid  grid-cols-2 mt-10 gap-5 justify-center'>
            <div>Tabs</div>
            <div>Info</div>
        </div>
    </main>
  )
}

export default TabsApp