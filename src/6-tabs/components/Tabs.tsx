import type { ITab } from "../interfaces/ITab";

interface ITabsProps {
  tab: ITab;
  active: boolean;
  onTabClick: (id: string) => void;
}

const Tabs = ({ tab, onTabClick, active }: ITabsProps) => {
  return (
    <div
      key={tab.id}
      onClick={() => onTabClick(tab.id)}
      className={"tab pb-5 m-3 border-b-2 md:border-b-0 md:border-l-2 md:pb-0 md:pl-10"+ (active ? " active" : "")}
    >
      {tab.title}
    </div>
  );
};

export default Tabs;
