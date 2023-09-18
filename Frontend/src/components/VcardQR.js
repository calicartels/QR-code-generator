import React, { useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import File from "./File";
import axios from "axios";

function VcardQR({ setUserData }) {
  const [fname, setfname] = useState("");
  const [sname, setsname] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [note, setNote] = useState("");

  const [hidden, setHidden] = useState(false);

  const [formdata, setFormdata] = useState({});

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(".form-container", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {}, [fname]);

  const handleClick = (e) => {
    e.preventDefault();

    setFormdata({
      fname: fname,
      sname: sname,
      phone: phone,
      fax: fax,
      email: email,
      company: company,
      role: role,
      address: address,
      city: city,
      zip: zip,
      state: state,
      country: country,
      website: website,
      note: note || "None",
    });
  };

  useEffect(async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/api/vCardQR",
      data: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const string = response.data;
    setUserData(string);
  }, [formdata]);
  return (
    <Container className="form-container">
      <div>
        <h1>V Card QR</h1>
        <div className="row">
          <p className="label">
            Wifi ID<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type={hidden ? "password" : "text"}
                placeholder="Enter first name"
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter second name"
                value={sname}
                onChange={(e) => setsname(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label">
            Contact<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="enter phone number"
              />
              <input
                type="text"
                placeholder="enter FAX"
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <p className="label">
            Email id<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="Enter email id"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label">
            Company<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="company name"
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your role"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label">
            Address<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="Building no,street"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label"></p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="city"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Zip code"
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label">
            State<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="Enter your state"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label">
            Country<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="Enter your country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <p className="label">
            Website<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="www.enteryourwebsite.com"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label">
            Any note<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder=""
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <button onClick={(e) => handleClick(e)}>Generate</button>
    </Container>
  );
}

export default VcardQR;

const Container = styled.form`
  padding: 50px;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .row {
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
  }

  h1 {
    color: #344fa199;
    font-weight: 700;
    font-size: 64px;
  }
  .label {
    flex: 0.2;
    width: 100%;
    display: flex;
    justify-content: space-between;

    color: #344fa1;
    font-size: 18px;
    font-weight: 500;
  }
  .inputs {
    flex: 0.8;
    width: 100%;
    padding-left: 0px;
  }
  .inputwrap {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    input {
      margin-left: 12px;
    }
    input[type="text"],
    input[type="password"] {
      flex: 1;
      height: 50px;
      width: 100%;
      border-radius: 20px;
      border: 2px solid #8566ff66;
      padding: 0 2px 0 18px;
      z-index: 2;
      outline: none;
    }
    input[type="radio"] {
      flex: unset;
      height: 25px;
      width: 25px;
      border-radius: 20px;
      border: 2px solid #8566ff66;
      z-index: 2;
      outline: none;
    }
    input[type="checkbox"] {
      height: 25px;
      width: 25px;
      border-radius: 4px;
      border: none;
      outline: none;
    }
    .input-file {
      width: 100%;
      margin-top: 290px;
      transform: translateX(-15%);
    }
    textarea {
      height: 164px;
      width: 100%;
      transform: translateY(70px);
      border-radius: 20px;
      border: 2px solid #8566ff66;
      padding-left: 18px;
      padding-top: 18px;
      outline: none;
      margin-left: 12px;
      z-index: 0;
    }
    p {
      font-size: 16px;
      color: #344fa1;
      margin-left: 12px;
    }
  }

  button {
    height: 50px;
    width: 180px;
    background-color: #8566ff;
    color: white;
    border-radius: 50px;
    outline: none;
    border: none;
    align-self: flex-end;
  }

  @media screen and (max-width: 700px) {
    height: 100%;
    padding: 50px 0px 20px 0;

    box-sizing: border-box !important;
    h1 {
      font-size: 30px;
      margin: 0 0 20px 10px;
    }
    .label {
      font-size: 13px;
      flex: 0.15;
      span {
        padding-left: 2px !important;
      }
    }
    .inputs {
      flex: 0.85;
    }

    .row {
      box-sizing: border-box;
      padding: 0 10px;
      height: 60px;
    }
    .inputwrap {
      input {
        margin-left: 0px;
      }
      input[type="text"],
      input[type="password"] {
        flex: 1;
        height: 35px;
        width: 100%;
        border: 1px solid #8566ff66;
      }
      input[type="radio"] {
        flex: unset;
        height: 12px;
        width: 12px;
        border: 1px solid #8566ff66;
      }
      input[type="checkbox"] {
        height: 12px;
        width: 12px;
        border: 1px solid #8566ff66;
      }
      .input-file {
        width: 100%;
        margin-top: 290px;
        transform: translateX(-15%);
      }
      textarea {
        height: 164px;
        width: 100%;
        transform: translateY(70px);
        border-radius: 20px;
        border: 1px solid #8566ff66;
        padding-left: 18px;
        padding-top: 18px;
        outline: none;
        margin-left: 12px;
        z-index: 0;
      }
      p {
        font-size: 12px;
        color: #344fa1;
        margin-left: 3px;
      }
    }

    button {
      width: 160px;
      font-size: 13px;
      height: 50px !important;
      margin-right: 10px;
    }
  }
`;
