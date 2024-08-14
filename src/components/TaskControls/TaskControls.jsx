import React from "react";

function TaskControls({ clearDoneTodos}) {
  

  return <button onClick={clearDoneTodos} className="clear">Clear Done Tasks</button>;
}

export default TaskControls;
