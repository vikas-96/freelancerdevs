import React, { useEffect, useState } from "react";
import { getContactus } from "../../Request/Contactus";

const Home = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    await getContactus()
      .then((res) => {
        setContactData(res.data);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };

  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs"></p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pb ftco-no-pt contactus-table">
        <div className="container">
          <div className="row">
            <div className="wrap-about py-md-5 ftco-animate">
              <table>
                <thead>
                  <tr>
                    <th>Sr no.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contactData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                        <td>{data.comment}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
