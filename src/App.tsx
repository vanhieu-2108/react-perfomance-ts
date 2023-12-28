import { useState } from "react";
import useInputChange from "./useInputChange";
const tabClassName = "cursor-pointer py-3 px-6 rounded text-sm";
const activeClassName = "text-white bg-blue-500 pointer-events-none";
type SortedData = "desc" | "asc";
export default function App() {
  const [sortedType, setSortedType] = useState<SortedData>("desc");
  const handleSortData = (value: SortedData) => {
    setSortedType(value);
  };
  const { value: fullname, handleChange } = useInputChange("");
  return (
    <div>
      <div className="flex items-center gap-x-5 p-5">
        <TabItem
          isActive={sortedType === "desc"}
          onClick={() => handleSortData("desc")}
        >
          Sort DESC
        </TabItem>
        <TabItem
          isActive={sortedType === "asc"}
          onClick={() => handleSortData("asc")}
        >
          Sort ASC
        </TabItem>
        <input type="text" name="fullname" onChange={handleChange} />
        {/* <div
          onClick={handleClickDesc}
          className={`${tabClassName} ${
            activeTab === "tab1" ? activeClassName : "bg-gray-100"
          }`}
        >
          Sort DESC
        </div> */}
        {/* <div
          onClick={handleClickAsc}
          className={`${tabClassName} ${
            activeTab === "tab2" ? activeClassName : "bg-gray-100"
          }`}
        >
          Sort ASC
        </div> */}
      </div>
    </div>
  );
}
interface TabItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

function TabItem({ children, isActive, onClick }: TabItemProps) {
  return (
    <div
      onClick={isActive ? undefined : onClick}
      className={`${tabClassName} ${
        isActive ? activeClassName : "bg-gray-100"
      }`}
    >
      {children}
    </div>
  );
}
