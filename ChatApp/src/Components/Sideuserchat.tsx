import { useNavigate, useLocation } from "react-router-dom";
function Sideuserchat() {
  let location = useLocation();
  const Users = ({ status, id }: { status: boolean; id: string }) => {
    const navigate = useNavigate();
    const clickHandler = () => {
      navigate(`/chat/${id}`);
    };
    return (
      <div
        className="flex md:gap-4 items-center cursor-pointer justify-center md:justify-start flex-col md:flex-row"
        onClick={clickHandler}
      >
        <div className={`avatar ${status && "online"}`}>
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="">selmon</div>
      </div>
    );
  };

  return (
    <div className="w-1/5 border-[1px] border-slate-400 rounded-lg my-1">
      <div className="py-4 px-2 flex flex-col gap-6">
        {location.pathname === "/group" ? (
          <>
            <Users status id="sa" />
          </>
        ) : (
          <>
            <Users status id="sa" />
            <Users status={false} id="asasa" />
            <Users status id="qwe" />
            <Users status={false} id="op" />
          </>
        )}
      </div>
    </div>
  );
}

export default Sideuserchat;
