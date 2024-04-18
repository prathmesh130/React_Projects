import { Send } from "lucide-react";
import { useParams } from "react-router-dom";

function Chat() {
  let { chatId } = useParams();
  return (
    <div className="flex flex-col mx-2 justify-between md:h-[89vh] h-[92vh]">
      <div className="flex justify-between mt-2 border-b-[1px] border-b-slate-500">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div> {chatId}</div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Action</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Mute</a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full py-2 overflow-auto flex flex-col-reverse gap-1">
        <p className="self-end w-5/6 md:w-1/2 bg-green-700 p-1 rounded-md">
          prahdb necessitatibus odit nulla reiciendis vitae aspernatur error
          debitis, numquam velit veritatis deleniti quis.
        </p>
        <p className="self-start w-5/6 md:w-1/2 bg-slate-800 p-1 rounded-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quisquam delectus maiores velit doloribus odit dolor? Aliquid
          necessitatibus odit nulla reiciendis vitae aspernatur error debitis,
          numquam velit veritatis deleniti quis.
        </p>
        <p className="self-end w-5/6 md:w-1/2 bg-green-700 p-1 rounded-md">
          necessitatibus odit nulla reiciendis vitae aspernatur error debitis,
          numquam velit veritatis deleniti quis.
        </p>
        <p className="self-end	w-5/6 md:w-1/2 bg-green-700 p-1 rounded-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <Send className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Chat;
