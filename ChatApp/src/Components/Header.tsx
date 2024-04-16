import {
  Bell,
  LogOut,
  Menu,
  MessagesSquare,
  Plus,
  Search,
  Users,
} from "lucide-react";
import Requests from "./Requests";
import FIndpeople from "./FIndpeople";
import { NavLink } from "react-router-dom";

function Header() {
  const notitfyModal = document.getElementById("notify_modal") as any;
  const searchModal = document.getElementById("search_modal") as any;
  const grpModal = document.getElementById("group_modal") as any;

  return (
    <>
      <div className="px-4 flex justify-between items-center bg-slate-500 h-[7vh] md:h-[10vh]">
        <NavLink to={"/"}>
          <div className="text-white cursor-pointer font-semibold text-lg tracking-widest flex gap-2 items-center">
            <MessagesSquare />
            <p>MyChat</p>
          </div>
        </NavLink>
        <Menu className="md:hidden text-white" />
        <div className="hidden md:flex gap-6 px-2">
          <Search
            className="text-white cursor-pointer"
            onClick={() => searchModal.showModal()}
          />
          <Plus
            className="text-white cursor-pointer"
            onClick={() => grpModal.showModal()}
          />
          <NavLink to={"/group"}>
            <Users className="text-white cursor-pointer" />
          </NavLink>
          <Bell
            className="text-white cursor-pointer"
            onClick={() => notitfyModal.showModal()}
          />
          <LogOut className="text-white cursor-pointer" />
        </div>
      </div>
      <dialog id="notify_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Notifications</h3>
          <Requests />
          <Requests />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="search_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Find People</h3>
          <FIndpeople />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="group_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">New Group</h3>
          <FIndpeople isGroup />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Header;
