import React from "react";
import SchedulfyIconBlack from "./schedulfyIconBlack.png";

function CreateSchedule() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <img src={SchedulfyIconBlack} alt="Schedulfy Logo" className="" />
        <div className="text-center text-2xl font-black">
          <h1>Create New Schedule</h1>
        </div>
      </div>
    </div>
  );
}

export default CreateSchedule;
