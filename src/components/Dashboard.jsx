
import DashboardStats from "./DashboardStats";
import Transaction from "./Transaction";
import PieChartL from "./PieChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

function Dashboard () {
  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <DashboardStats />
      <div className="flex h-300">
      <Transaction/>
      <PieChartL/>
      </div>
      <div className="flex flex-row gap-4 w-full">
          <RecentOrders/>
          <PopularProducts/>
      </div>
    </div>
  )
}
export default Dashboard