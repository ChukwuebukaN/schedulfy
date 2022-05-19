import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as SchedulfyIcon } from "../../assets/schedulfy-icon.svg";
import { ReactComponent as SchedulfyLogo } from "../../assets/schedulfy-logo-black.svg";

function HomePage() {
  const history = useHistory();

  /** Routes user to create schedule page */
  const handleCreateSchedule = () => {
    history.push("/CreateSchedule");
  };

  return (
    <div>
      <SchedulfyIcon className="left-0 mt-4 ml-4 w-10 h-10 fixed" />
      <div className="flex h-screen p-4">
        <div className="m-auto text-center">
          <SchedulfyLogo className="w-80 mb-14" />
          <button
            type="button"
            className="create-schedule-btn"
            onClick={handleCreateSchedule}
          >
            Organize Your Week 👋
          </button>
          {/* <h2 className="text-center text-lg font-bold mb-10 mt-4">
          </h2> */}
          {/* <div className="grid justify-items-center">
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
