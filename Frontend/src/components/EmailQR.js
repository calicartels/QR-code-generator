import React, { useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import File from "./File";
import axios from "axios";

function EmailQR({setUserData}) {
  const [emailID, setEmailID] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [formdata, setFormdata] = useState({});

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(".form-container", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    setFormdata({
      emailID: emailID,
      subject: subject,
      body: body,
    });
  };

  useEffect(async() => {

    const response = await axios({
      method: "post",
      url: "http://localhost:5000/api/emailQR",
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
        <h1>Email QR</h1>
        <div className="row">
          <p className="label">
            Email ID<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="Enter your email id"
                value={emailID}
                onChange={(e) => setEmailID(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="label">
            Subject<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter your subject"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <p className="label">
            Body<span style={{ paddingLeft: 12 }}>:</span>
          </p>
          <div className="inputs">
            <div className="inputwrap">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="enter your body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <button onClick={(e) => handleClick(e)}>Generate</button>
    </Container>
  );
}

export default EmailQR;

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
