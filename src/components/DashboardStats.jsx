import { IoBagHandle, IoStatsChartOutline, IoPeople, IoCart } from "react-icons/io5";

function DashboardStats() {
  return (
    <div className="flex p-5 gap-4 w-full">
      <BoxWrapper >
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500 ">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4" >
            <span className="text-sm text-gray-500 font-light" > Total Sales </span>
            <div className="flex items-center" >
                <strong className="text-xl text-gray-700 font-semibold">$55551</strong>
                <span className="text-sm text-green-500 pl-2" >+5550</span>
            </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-orange-500 ">
          <IoStatsChartOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4" >
            <span className="text-sm text-gray-500 font-light" > Total expanses </span>
            <div className="flex items-center" >
                <strong className="text-xl text-gray-700 font-semibold">$55551</strong>
                <span className="text-sm text-green-500 pl-2" >+5550</span>
            </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-yellow-500 ">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4" >
            <span className="text-sm text-gray-500 font-light" > Total customers </span>
            <div className="flex items-center" >
                <strong className="text-xl text-gray-700 font-semibold">$55551</strong>
                <span className="text-sm text-green-500 pl-2" >+5550</span>
            </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-green-500 ">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4" >
            <span className="text-sm text-gray-500 font-light" > Total orders </span>
            <div className="flex items-center" >
                <strong className="text-xl text-gray-700 font-semibold">$55551</strong>
                <span className="text-sm text-green-500 pl-2" >+5550</span>
            </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardStats;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
