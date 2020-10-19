import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Notification from "../../../Component/Notification";
import { StoreContactUs } from "../../../Request/Contactus";

const initialState = {
  name: "",
  email: "",
  contact: "",
  comment: "",
};

const ContactForm = (props) => {
  const [ContactData, setContactData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, forceUpdate] = useState();
  var validator = useRef(new SimpleReactValidator());

  const handleChange = (e) => {
    e.persist();
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      forceUpdate(1);
      return false;
    } else {
      setIsSubmitting(true);
      StoreContactUs(ContactData)
        .then((res) => {
          setIsSubmitting(false);
          Notification.show({
            type: "success",
            message: res.message,
          });
          setContactData(initialState);
        })
        .catch((err) => {
          setIsSubmitting(false);
          Notification.show({
            type: "error",
            message: "Something went wrong, try again later.",
          });
        });
    }
  };

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Your Name"
          value={ContactData.name}
          onChange={handleChange}
        />
        {validator.current.message("Name", ContactData.name, "required")}
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Your Email"
          value={ContactData.email}
          onChange={handleChange}
        />
        {validator.current.message("Email-id", ContactData.email, "required")}
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          name="contact"
          placeholder="Phone No."
          value={ContactData.contact}
          onChange={handleChange}
        />
        {validator.current.message(
          "Phone No.",
          ContactData.contact,
          "required"
        )}
      </div>
      <div className="form-group">
        <textarea
          name="comment"
          id=""
          cols="30"
          rows={props.page === "contactus" ? "7" : "5"}
          className="form-control"
          placeholder="Message"
          value={ContactData.comment}
          onChange={handleChange}
        ></textarea>
        {validator.current.message("Message", ContactData.comment, "required")}
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.buttontext}
          className="btn btn-primary py-3 px-5"
          onClick={handleSubmit}
          disabled={isSubmitting}
        />
      </div>
    </>
  );
};

export default ContactForm;
