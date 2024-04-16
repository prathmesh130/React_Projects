function Requests() {
  return (
    <div className="flex items-center justify-between py-2 rounded-xl my-2 px-4">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h1 className="text-lg font-semibold">Selmon</h1>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-sm btn-outline btn-success">Accept</button>
        <button className="btn btn-sm btn-outline btn-error">Reject</button>
      </div>
    </div>
  );
}

export default Requests;
