import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";

export default function (opts) {
  return new Noty(
    Object.assign(
      {
        layout: "topRight",
        closeWith: ["click", "button"],
      },
      opts
    )
  ).show();
}
