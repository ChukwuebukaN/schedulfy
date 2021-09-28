import React from "react";
import { useHistory } from "react-router-dom";
import SchedulfyLogoBlack from "./schedulfyLogoBlack.png";
// import Date

function HomePage() {
  const history = useHistory();

  const handleCreateSchedule = () => {
    history.push("/CreateSchedule");
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-center text-6xl font-black pb-8">Schedulfy</h1>
        <img
          src={SchedulfyLogoBlack}
          alt="Schedulfy Logo"
          className="mx-auto p-8"
        />
        <h2 className="text-center text-2xl font-black pb-8">
          Organize Your Week
        </h2>
        <div className="grid justify-items-center">
          <button
            type="button"
            onClick={handleCreateSchedule}
            className="text-white font-bold rounded-lg py-2 px-4 border-2 border-green-700 bg-green-400 hover:bg-green-500"
          >
            Create Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
