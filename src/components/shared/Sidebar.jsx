import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout} from "react-icons/hi";
import { dashboardSidebarLinks, dashboardSidebarBottomLinks } from "../../library/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';
const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  return (
    <div className=" bg-neutral-800 w-60 flex flex-col" >
        <div className="flex items-center gap-2 px-1 py-3">
            <FcBullish fontSize={24} />
            <span className=" text-neutral-100 text-lg " >OpenShop</span>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
            {dashboardSidebarLinks.map ((item) => ( 
                <SidebarLink key={item.key} item={item} />
            ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {dashboardSidebarBottomLinks.map ((item) => ( 
                <SidebarBottomLink key={item.key} item={item} />
            ))}
        </div>
        <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
            <span className="text-xl">
                <HiOutlineLogout />
            </span>
            <p className={classNames(linkClass, 'cursor-pointer text-red-500')}>Logout</p>
        </div>
    </div>
  )
}

 function SidebarLink({item}) {
    const {pathname} = useLocation();
  return (
    <Link to={item.path}className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)} >
        <span className="text-xl"> {item.icon} </span>
        {item.label}
    </Link>
  )
}
function SidebarBottomLink({item}) {
    const {pathname} = useLocation();

    return (
        <Link to={item.path}className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)} >
          <span className="text-xl"> {item.icon} </span>
          {item.label}
      </Link>
    )
  }


