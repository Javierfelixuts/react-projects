import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import "./style.css";
import type { ITabInfo } from "./interfaces/ITabInfo";
const TabsApp = () => {
  const url = "https://www.course-api.com/react-tabs-project";

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<ITabInfo[]>([]);
  const [infoId, setInfoId] = useState<number>(0);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setLoading(false);
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, []);

  const onTabClick = (id: string) => {
    setInfoId((index) => {
      const newIndex = info.findIndex((item) => item.id === id);
      return newIndex !== -1 ? newIndex : index;
    });
  };

  if (loading) {
    return <h1 className="text-center text-4xl font-bold pt-52">Loading...</h1>;
  }
  return (
    <main>
      <h1 className="text-center text-4xl font-bold pt-10">Experience</h1>

      <div className="w-full grid grid-cols-12  mt-10 gap-5 justify-center">
        <div className="flex justify-center flex-wrap items-center col-span-12 md:justify-start md:flex-col md:col-span-4">
          {info.map((item: ITabInfo, index: number  ) => {
            const { id, company } = item;
            return (
              <Tabs
                key={id}
                active={index === infoId} 
                tab={{ id: id!, title: company! }}
                onTabClick={onTabClick}
              />
            );
          })}
        </div>
        <div className="col-span-12  text-justify px-8 md:text-left md:col-span-8">
          <h3 className="text-3xl ">{info[infoId].title}</h3>
          <p className="m-2 p-2 bg-slate-300 text-slate-700 w-fit rounded-md">{info[infoId].company}</p>
          <span className="text-slate-500">{info[infoId].dates}</span>
          <div>
            {
              info[infoId].duties?.map((duty: string, index: number) => (
                <div key={index} className="flex items-center gap-2 m-2">
                  <span className="text-blue-500 text-xl">▹</span>
                  <p>{duty}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default TabsApp;
