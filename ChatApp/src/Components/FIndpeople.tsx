import { CirclePlus } from "lucide-react";

type findPeopleTypes = {
  isGroup?: boolean;
};
function FIndpeople({ isGroup = false }: findPeopleTypes) {
  const grpModal = document.getElementById("group_modal") as any;
  const Addpeople = () => {
    return (
      <div className="flex justify-between items-center mx-2">
        <div className="flex gap-2 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="text-lg font-semibold">Selmon</h1>
        </div>
        <CirclePlus className="text-white cursor-pointer" />
      </div>
    );
  };
  return (
    <div className="my-2 mx-4">
      <div className="mb-4">
        {isGroup ? (
          <input
            type="text"
            placeholder="Group Name"
            className="input input-bordered w-full"
          />
        ) : (
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        )}
      </div>
      {isGroup && <p className="m-2 ">Add people to this group</p>}
      <div className="flex flex-col gap-3">
        <Addpeople />
        <Addpeople />
        <Addpeople />
      </div>
      {isGroup && (
        <div className="flex gap-12 items-center justify-center mt-2">
          <button className="btn btn-error" onClick={() => grpModal.close()}>
            Cancel
          </button>
          <button className="btn btn-info">Create</button>
        </div>
      )}
    </div>
  );
}

export default FIndpeople;
