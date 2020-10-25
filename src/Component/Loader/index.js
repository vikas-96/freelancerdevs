import React, { useEffect } from "react";

export default function ({ show }) {
  useEffect(() => {
    let selectDiv = document.getElementById("mm-0");
    if (selectDiv != null) {
      selectDiv.classList.add("loader-active");
    }
    // Anything in here is fired on component mount.
    return () => {
      if (selectDiv != null) {
        selectDiv.classList.remove("loader-active");
      }
      // Anything in here is fired on component unmount.
    };
  }, []);
  return show ? <div className="customloader"></div> : true;
}
