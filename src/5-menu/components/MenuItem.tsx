import type { IMenu } from "../interfaces/Imenu"

type MenuProp =  {
    menu: IMenu
}

export const MenuItem = ({menu}: MenuProp) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap  max-w-[500px] mx-auto">
        <div className="w-11/12 md:w-48 aspect-square shrink-0 overflow-hidden mx-auto md:mx-0">
            <img className="w-full h-full object-cover border-4 border-yellow-600 " src={menu.img} alt={menu.title} />
        </div>
        <div className="px-4">
            <div className="flex justify-between">
                <h3 className="capitalize text-xl font-bold inline-block">{menu.title}</h3>
                <span className="text-yellow-600 font-bold text-2xl">${menu.price}</span>
            </div>
                <div className="underline block w-full h-0.5 bg-slate-300" ></div>
            <p className="mt-4 text-slate-700">{menu.desc}</p>
        </div>
    </div>
  )
}
