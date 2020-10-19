import notify from "../../Utils/notify";
import { browserHistory as history } from "../../App";

class Notification {
  static show = (props) => {
    if (props.message === "") return;
    switch (props.type) {
      case "success":
        notify({
          type: props.type,
          text: props.message,
          timeout: 6000,
        });
        props.path && this.redirect(props.path);
        break;
      case "error":
        notify({
          type: props.type,
          text: props.message,
          timeout: 10000,
        });
        props.path && this.redirect(props.path);
        break;
      case "warning":
        notify({
          type: props.type,
          text: props.message,
          timeout: 8000,
        });
        props.path && this.redirect(props.path);
        break;
      case "info":
        notify({
          type: props.type,
          text: props.message,
          timeout: 8000,
        });
        props.path && this.redirect(props.path);
        break;
      default:
        break;
    }
  };

  static redirect = (path, time = null) => {
    setTimeout(() => {
      history.push(path);
    }, time || 1000);
  };
}

export default Notification;
