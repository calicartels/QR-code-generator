import { QRCodeSVG } from '@cheprasov/qrcode';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InputLabel, Select, MenuItem, Link } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import WifiIcon from "@material-ui/icons/Wifi";
import QRForm from "./WifiQR";
import Formselector from "./Formselector";
import WifiQR from "./WifiQR";

import qrcode from "qrcode";

import {
  ArrowDownward,
  ArrowForwardIos,
  EmailOutlined,
  FontDownloadRounded,
  GetApp,
  MoreHorizOutlined,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCoffee,
  faFileAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import LinkQr from "./LinkQr";
import gsap from "gsap";
import EmailQR from "./EmailQR";
import VcardQR from "./VcardQR";
import BitcoinQR from "./BitcoinQR";

function QR() {
  const [Form, setForm] = useState("email");
  const [clickbg, setClickbg] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [qrCodeSource, setQrCodeSource] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX+/v4AAAD///90dHS9vb3Ozs6ZmZmJiYkeHh6dnZ1bW1tQUFBgYGDq6ur5+fnz8/OSkpJ9fX3ExMRqamrU1NRERES3t7cwMDClpaXb29vk5OSsrKzY2NgPDw/t7e1vb28mJiY+Pj55eXkXFxdKSko5OTlUVFQrKyuFhYX3xPd8AAAGcklEQVR4nO2d2XraMBBGicIW9kDCYiCQlBLe/wnbxjPKx4hBsiwToP+5I5Y0PtBqt1yrAQAAAAAAAAAAAAAAADiPiad4CcliFhGcbx7jmLzk4cxiEppjSDnqsTE30+KKZvMQS53utxGco085nqJjNiMMH6OjwdAFhn5gCMNi3JrhrhXIaO0zfKSUPZ/hbBQac5bAsBXcrWj7DBeUsO4z7AXH5C+rnGFoDq8hd3amPsNOcEwYnssLQzcHDK/e0Dc0CzHMCTf0xkxqONAwqmE7h0UaeRk1a8jXNUPjjZnQ0AzkF8+8K4bfP4CWcyZ+EtdQy/lwUcOuZmiL0g1FQhjCEIYwhGGE4b21FvV+9o/+nD6v990v3t+0Fv/WDFdFe203Z1i45w1DGMIQhj5DZ/R0b4am/zQ/4olFFnTBTnHfqqGdxXDmHghb5O0bKiGGMIQhDGEYaLgLNpTDwWszfO+eZPcYamjy4WGW8XBw+O4bH54O+TdoBYZndmRxDq9hTy2ydtrwwrP63hxewwl9Hmn/MW927QmGtgQYujlgeC7v/2M40psJQWFDtbUI308zSWC4bofyUNDwb59GWQMOj7lOYFicAobEze/cgyEMYQhDxXDiLzbYkOBHOJr02ZlNbEbH1DoR5wxf6rH0pSHt+B39ps9d3uFLGaa0xcksomMuihuWfwbJv897K3Jc9rmn8vgN5U6FWwOGMLx+rt4wuNqKr0tnbtbQqjJBXWoWDYXBcWlmIBO8yfZQY7vSYihFfgeVCbKUfRpRmMlkguLPPXkZi5jOdH9Mn0btl16lYdKeNwxhCEMYVm/YF21tXyaYpjdsiM5EUkNnzvtVFP5auE/TdHIQvHnYznnLnBs5W55izluuW5iuiNpVCtcNg9ctHMNneTNVrMzAEIYwhGE6Q66HDz7DfeHWQltWdldIZc4PMeAtZZi95MixpWPY3kyO6DVki794OUYbrlrDLRVpzzmar74yrqYchL/FEoZyE5pu6KDvEVaKdAwdxpRR3WYVY6iaRxiGFn3GME8whiEMYXhfhinrUl8Ivl91hVStSzvxhqYxzXnR2sPe6DStVaChGSzzEEteIR23jouyxq06peQrbEh/aI0jDL19mqU2jnX6NJqhXMd35+rlbyn7NOq/tBBDb7907ik1wtBJIQ1lv7QMMIQhDGvXZChwDLUq1RlbnDFUUA3jq1DX8DAYHjFwDIenGdgOCKdwDNezL35lWhEz4pcwNMPTRUYZqpChO6uv4nQemJmWgxO0jg2/f9xV/K94CUMbS06jW2oU46AZxuz2giEMYQjDyxl69wg/RRvKIY9uyAnZ8CC7AmVai2HfAx2GXxso19/sYbpcFA90679fv7CT96phnu51t6XP7R39RRQZp+jFl1I7NcKe/PHpNVRxbuInUHve1nBWwvDyPi4whCEMy99gPI6hgJsRu0d4F21Yok419adImtTPMP35Mkem4IXP9jz/PP+kPzxSBv/TQbbhoZiNiBnh0u+Z8Z8j7MCTzP5ukpzVT7pH2Evw2ZcOS/r1F96UCVZmYHgGGOrA8JvrMIyvS8MNy6yQsuGs1wmjJ98zM1zkZF1KsBW3uaaiezzh28zyHOO9KJonVD8px54NW3nK/bKEYYpzMQjZxKp9GmcjmTPGt7dZok9T4dkm34Z0QfZL5dkmcp4mCTA8kQOGMIRh1YZ6K+E3LNpaOKcoifVDZzdVCsP4s6AL9Gm8VLJuUcKQv+f7NeSiYAhDGMLwlgyTrpBWaLhpjMNwnit6P+Q8U4L68DoNwwfVWswUK6TVGobehG4YbwZDGMLwrgzVGlE1jKhL4+vUBO9GeONW7eP5iI+pcj8m87WHFtmixpyiVMV7Zjxf+IVPhqz+/RZuzJ85vxSGMIThfRhqVai4cK2GAW/SURRl8/GzhmXmvBmxz1t/htQ5eoo5+G6ijKE/R3lDvqCu41/rygwMYQjDOP4jwwT7aZiFaP7U1kLdX+oYpmgtZr1AJnJPlGPYzRN27AamVb4FasUP00w7eYpn2hvFZBvF0LTyHB1tUB1iWBzv2Zd2uKr1aTryn4e2jp9kX1uVhjKm9r4n3fBH9ybCEIYwLG1Y+nmLiFMFeTZxL0We6cKHVpfGzCZOm5GM+JmZbKSk0I48Mg3KIXf8mjrldBYM6C5HEc/MJHjnizeBHrP8BQAAAAAAAAAAAAAAAACCP5IF57xc3OReAAAAAElFTkSuQmCC"
  );

  const data = {
    email: [
      { heading: "Email QR", input: true, button: "Generate" },
      { label: "Email ID", inputs: { text: ["Enter mail id"] } },
      { lable: "Subject", inputs: { text: ["Enter the subject"] } },
      { label: "Body", inputs: { textarea: ["enter the body"] } },
    ],
    wifi: [
      { heading: "Wifi QR", input: true, button: "Generate" },
      { label: "Email ID", inputs: { text: [""], checkbox: ["hidden"] } },
      { label: "password", inputs: { text: [""] } },
      { label: "Encryption", inputs: { radio: ["none", "WPA3/WPA2", "WEP"] } },
    ],
    vcard: [
      { heading: "V Card QR", input: true, button: "Generate" },
      {
        label: "Name",
        inputs: { text: ["Enter first name", "enter last name"] },
      },
      {
        label: "Contact",
        inputs: { text: ["enter phone number", "enter fax"] },
      },
      { label: "Email ID", inputs: { text: ["enter email id"] } },
      { label: "Company", inputs: { text: ["company name", "Your role"] } },

      { label: "Address", inputs: { text: ["building number,street"] } },
      { label: "", inputs: { text: ["City", "ZIP Code"] } },
      { label: "State", inputs: { text: ["Enter your state"] } },
      { label: "Country", inputs: { text: ["Enter your country"] } },
      { label: "Website", inputs: { text: ["www.enteryourwebsite.com"] } },
      { label: "Any note", inputs: { text: [""] } },
    ],
    text: [
      {
        heading: "Text QR",
        button: false,
        content: "Enter the text that you want to show",
      },
    ],
    app: [
      {
        heading: "App store QR",
        button: "Sign up for free",
        content:
          "Link your app in Apple App Store, Google Play Store, or Amazon Appstore on one page.",
      },
    ],
    link: [
      { heading: "Enter URL here", file: true },
      { label: false, inputs: { file: [""] } },
    ],
    bitcoin: [
      { heading: "Bitcoin QR", input: true, button: "Sign up for free" },
      {
        label: "Cryptocurrency",
        inputs: { radio: ["Bitcoin", "Dodge", "Ether", "Other"] },
      },
      { label: "", inputs: { text: ["Enter type of crypto"] } },
      { label: "Amount", inputs: { text: ["Enter the amount"] } },
      { label: "Reciever", inputs: { text: ["Enter the address"] } },
      { label: "Message", inputs: { text: ["optional"] } },
    ],
    twitter: [
      { heading: "Twitter QR", input: true, button: "Sign up for free" },
      { label: "Choose an option", inputs: { radio: ["Post", "Profile"] } },
      { label: "Text", inputs: { textarea: ["Enter your article"] } },
      { label: false, inputs: { file: [""] } },
    ],
    facebook: [
      { heading: "Facebook QR", input: true, button: "Sign up for free" },
      { label: "Choose an option", inputs: { radio: ["Post", "Profile"] } },
      { label: "Text", inputs: { textarea: ["Enter your article"] } },
      { label: false, inputs: { file: [""] } },
    ],
  };

  useEffect(() => {
    let obj = document.querySelector("#email");
    var doc = document.querySelector(".side-bar");
    setOffset({ y: doc.offsetTop, x: doc.offsetLeft });

    console.log(obj.scrollHeight, obj.offsetLeft);
  }, []);

  const handleClick = (a) => {
    // let Y=y-offset.y+58;
    // let X=x-offset.x+43;
    // console.log(X,Y)
    // setClickbg({x:X,y:Y})
    if (window.innerWidth > 700) {
      document.querySelector(".click-bg").style.marginTop =
        88 - 12.5 + a * 50 + "px";
      document.querySelectorAll(".side-bar svg").forEach((item) => {
        item.classList.remove("active");
      });
      document.querySelectorAll(".side-bar svg")[a].classList.add("active");
    } else {
      document.querySelector(".click-bg").style.marginTop =
        94 - 12.5 + a * 44 + "px";
      document.querySelectorAll(".side-bar svg").forEach((item) => {
        item.classList.remove("active");
      });
      document.querySelectorAll(".side-bar svg")[a].classList.add("active");
    }
  };
  const [userData, setUserData] = useState({});

  useEffect(async () => {
    console.log(userData);
    await qrcode.toDataURL(userData, (err, src) => {
      if (err) console.log("Error occured " + err);
      console.log(src);
      setQrCodeSource(src);
    });
  }, [userData]);
  
  
  const svgQrCodeDownloadHandler = async (e) => {
    console.log(userData);

    const qrSVG = new QRCodeSVG(userData);
    const dataUrlWithSVGQRCode = qrSVG.toDataUrl();
    console.log(dataUrlWithSVGQRCode);


    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", dataUrlWithSVGQRCode);
    dl.setAttribute("download", "QRCode.svg");
    dl.click();

  };

  return (
    <Container>
      <Wrap className="qr-container">
        <LeftContent>
          <div
            className="click-bg"
            style={{ backgroundColor: "#8566FF" }}
          ></div>
          <div className="side-bar">
            <EmailOutlined
              id="email"
              className="active"
              onClick={(e) => {
                setForm("email");

                handleClick(0);
              }}
            />
            <WifiIcon
              onClick={() => {
                setForm("wifi");
                handleClick(1);
              }}
            />

            <svg
              onClick={() => {
                setForm("vcard");
                handleClick(2);
              }}
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8667 0H1.53333C0.686806 0 0 0.671875 0 1.5V12.5C0 13.3281 0.686806 14 1.53333 14H16.8667C17.7132 14 18.4 13.3281 18.4 12.5V1.5C18.4 0.671875 17.7132 0 16.8667 0ZM16.8667 12.5H1.53333V1.5H16.8667V12.5ZM6.64444 7C7.77208 7 8.68889 6.10313 8.68889 5C8.68889 3.89687 7.77208 3 6.64444 3C5.51681 3 4.6 3.89687 4.6 5C4.6 6.10313 5.51681 7 6.64444 7ZM3.78222 11H9.50667C9.90278 11 10.2222 10.7312 10.2222 10.4V9.8C10.2222 8.80625 9.2607 8 8.07556 8C7.73056 8 7.47819 8.25 6.64444 8.25C5.78514 8.25 5.5775 8 5.21333 8C4.02819 8 3.06667 8.80625 3.06667 9.8V10.4C3.06667 10.7312 3.38611 11 3.78222 11ZM11.5 9H15.0778C15.2183 9 15.3333 8.8875 15.3333 8.75V8.25C15.3333 8.1125 15.2183 8 15.0778 8H11.5C11.3594 8 11.2444 8.1125 11.2444 8.25V8.75C11.2444 8.8875 11.3594 9 11.5 9ZM11.5 7H15.0778C15.2183 7 15.3333 6.8875 15.3333 6.75V6.25C15.3333 6.1125 15.2183 6 15.0778 6H11.5C11.3594 6 11.2444 6.1125 11.2444 6.25V6.75C11.2444 6.8875 11.3594 7 11.5 7ZM11.5 5H15.0778C15.2183 5 15.3333 4.8875 15.3333 4.75V4.25C15.3333 4.1125 15.2183 4 15.0778 4H11.5C11.3594 4 11.2444 4.1125 11.2444 4.25V4.75C11.2444 4.8875 11.3594 5 11.5 5Z"
                fill="#344FA1"
              />
            </svg>

            <svg
              onClick={() => {
                setForm("text");
                handleClick(3);
              }}
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3605 5.20039L10.7371 0.576953C10.6082 0.448047 10.4342 0.375 10.2516 0.375H1.125C0.744727 0.375 0.4375 0.682227 0.4375 1.0625V18.9375C0.4375 19.3178 0.744727 19.625 1.125 19.625H14.875C15.2553 19.625 15.5625 19.3178 15.5625 18.9375V5.68809C15.5625 5.50547 15.4895 5.3293 15.3605 5.20039ZM13.977 6.00391H9.93359V1.96055L13.977 6.00391ZM14.0156 18.0781H1.98438V1.92188H8.47266V6.5625C8.47266 6.80182 8.56772 7.03133 8.73695 7.20055C8.90617 7.36978 9.13568 7.46484 9.375 7.46484H14.0156V18.0781ZM7.82812 12.2773H3.875C3.78047 12.2773 3.70312 12.3547 3.70312 12.4492V13.4805C3.70312 13.575 3.78047 13.6523 3.875 13.6523H7.82812C7.92266 13.6523 8 13.575 8 13.4805V12.4492C8 12.3547 7.92266 12.2773 7.82812 12.2773ZM3.70312 9.52734V10.5586C3.70312 10.6531 3.78047 10.7305 3.875 10.7305H12.125C12.2195 10.7305 12.2969 10.6531 12.2969 10.5586V9.52734C12.2969 9.43281 12.2195 9.35547 12.125 9.35547H3.875C3.78047 9.35547 3.70312 9.43281 3.70312 9.52734Z"
                fill="#344FA1"
              />
            </svg>

            <svg
              onClick={() => {
                setForm("link");
                handleClick(4);
              }}
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5431 18.2559C10.6051 18.2786 10.6465 18.3239 10.6671 18.392C10.6878 18.46 10.6775 18.528 10.6361 18.596L8.06307 21.4186C7.64972 21.8721 7.17437 22.2348 6.63702 22.5069C6.09967 22.7789 5.55199 22.9377 4.99397 22.983C4.43595 23.0283 3.87794 22.983 3.31992 22.847C2.7619 22.7109 2.25555 22.4275 1.80087 21.9968C1.24286 21.5207 0.808843 20.9425 0.498834 20.2624C0.188824 19.5822 0.0234856 18.9021 0.00281827 18.2219C-0.017849 17.5418 0.0751538 16.8503 0.281827 16.1475C0.4885 15.4446 0.839844 14.8325 1.33586 14.311L5.33498 9.92405C5.97567 9.22123 6.71969 8.69978 7.56705 8.3597C8.41441 8.01962 9.28244 7.92894 10.1711 8.08764C10.9565 8.22367 11.5765 8.47306 12.0312 8.83581C12.4859 9.19856 12.8475 9.61798 13.1162 10.0941C13.1576 10.2074 13.1524 10.2925 13.1007 10.3491C13.0491 10.4058 12.9922 10.4568 12.9302 10.5022C12.8682 10.5475 12.7959 10.6155 12.7132 10.7062L12.4962 10.9443C12.2895 11.1937 12.0415 11.3184 11.7522 11.3184C11.4628 11.3184 11.1993 11.188 10.9617 10.9273C10.724 10.6666 10.4605 10.4682 10.1711 10.3321C9.88179 10.1961 9.56145 10.1394 9.2101 10.1621C8.85876 10.1848 8.54875 10.2415 8.28007 10.3321C8.0114 10.4228 7.73239 10.6269 7.44305 10.9443L2.85491 15.9774C2.58623 16.2722 2.38989 16.6122 2.26589 16.9976C2.14188 17.3831 2.10055 17.7685 2.14188 18.1539C2.18322 18.5393 2.28656 18.9247 2.45189 19.3102C2.61723 19.6956 2.88591 20.0017 3.25792 20.2284C3.7746 20.6138 4.33262 20.7498 4.93197 20.6365C5.53132 20.5231 6.03767 20.251 6.45102 19.8203L8.43508 17.6778C8.47641 17.6098 8.53841 17.5984 8.62108 17.6438C9.2411 17.9385 9.88179 18.1426 10.5431 18.2559ZM19.1614 1.04805C19.7194 1.52416 20.1534 2.09096 20.4634 2.74844C20.7735 3.40592 20.9491 4.08607 20.9905 4.7889C21.0318 5.49172 20.9388 6.19455 20.7115 6.89737C20.4841 7.6002 20.1224 8.21233 19.6264 8.73378L15.6273 13.1208C14.9866 13.8236 14.2426 14.3337 13.3952 14.6511C12.5479 14.9685 11.6695 15.0592 10.7601 14.9232C9.97479 14.8098 9.36511 14.5604 8.93109 14.175C8.49708 13.7896 8.1354 13.3702 7.84606 12.9167C7.80472 12.826 7.81506 12.7467 7.87706 12.6787L8.43508 12.0665C8.66242 11.8398 8.92076 11.7265 9.2101 11.7265C9.49944 11.7265 9.74745 11.8398 9.95412 12.0665C10.2021 12.3386 10.4811 12.5426 10.7911 12.6787C11.1012 12.8147 11.4215 12.8827 11.7522 12.8827C12.0829 12.8827 12.4032 12.8147 12.7132 12.6787C13.0232 12.5426 13.2919 12.3386 13.5192 12.0665L18.1074 7.06741C18.376 6.77268 18.5724 6.42126 18.6964 6.01317C18.8204 5.60508 18.8617 5.20832 18.8204 4.8229C18.7791 4.43748 18.6654 4.0634 18.4794 3.70065C18.2934 3.3379 18.0247 3.03183 17.6734 2.78244C17.1773 2.4197 16.6297 2.28367 16.0303 2.37435C15.431 2.46504 14.9143 2.74844 14.4803 3.22454L12.5272 5.36703C12.4652 5.43504 12.4032 5.44638 12.3412 5.40103C11.7625 5.12897 11.1218 4.91359 10.4191 4.75489C10.3365 4.75489 10.2951 4.70955 10.2951 4.61886C10.2951 4.52817 10.3055 4.47149 10.3261 4.44882L12.8992 1.62618C13.3126 1.17275 13.7879 0.810001 14.3253 0.537939C14.8626 0.265878 15.4 0.0958398 15.9373 0.0278245C16.4747 -0.0401909 17.0327 0.0164886 17.6114 0.197863C18.19 0.379237 18.7067 0.662634 19.1614 1.04805Z"
                fill="#344FA1"
              />
            </svg>

            <svg
              onClick={() => {
                setForm("app");
                handleClick(5);
              }}
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.125 1.375C11.4897 1.375 11.8394 1.51987 12.0973 1.77773C12.3551 2.03559 12.5 2.38533 12.5 2.75V19.25C12.5 19.6147 12.3551 19.9644 12.0973 20.2223C11.8394 20.4801 11.4897 20.625 11.125 20.625H2.875C2.51033 20.625 2.16059 20.4801 1.90273 20.2223C1.64487 19.9644 1.5 19.6147 1.5 19.25V2.75C1.5 2.38533 1.64487 2.03559 1.90273 1.77773C2.16059 1.51987 2.51033 1.375 2.875 1.375H11.125ZM2.875 0C2.14565 0 1.44618 0.289731 0.930456 0.805456C0.414731 1.32118 0.125 2.02065 0.125 2.75V19.25C0.125 19.9793 0.414731 20.6788 0.930456 21.1945C1.44618 21.7103 2.14565 22 2.875 22H11.125C11.8543 22 12.5538 21.7103 13.0695 21.1945C13.5853 20.6788 13.875 19.9793 13.875 19.25V2.75C13.875 2.02065 13.5853 1.32118 13.0695 0.805456C12.5538 0.289731 11.8543 0 11.125 0L2.875 0Z"
                fill="#344FA1"
              />
            </svg>

            <svg
              onClick={() => {
                setForm("bitcoin");
                handleClick(6);
              }}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 0.875C8.59636 0.875 6.73546 1.4395 5.15264 2.4971C3.56982 3.55471 2.33616 5.05793 1.60766 6.81667C0.87917 8.57541 0.688563 10.5107 1.05995 12.3777C1.43133 14.2448 2.34802 15.9598 3.6941 17.3059C5.04018 18.652 6.75519 19.5687 8.62226 19.9401C10.4893 20.3114 12.4246 20.1208 14.1833 19.3923C15.9421 18.6638 17.4453 17.4302 18.5029 15.8474C19.5605 14.2645 20.125 12.4036 20.125 10.5C20.125 7.94729 19.1109 5.49913 17.3059 3.6941C15.5009 1.88906 13.0527 0.875 10.5 0.875ZM10.5 18.375C8.94248 18.375 7.41993 17.9131 6.12489 17.0478C4.82985 16.1825 3.82049 14.9526 3.22445 13.5136C2.62841 12.0747 2.47246 10.4913 2.77632 8.96366C3.08018 7.43606 3.8302 6.03287 4.93154 4.93153C6.03288 3.83019 7.43607 3.08017 8.96367 2.77632C10.4913 2.47246 12.0747 2.62841 13.5136 3.22445C14.9526 3.82049 16.1825 4.82985 17.0478 6.12488C17.9131 7.41992 18.375 8.94247 18.375 10.5C18.375 12.5886 17.5453 14.5916 16.0685 16.0685C14.5916 17.5453 12.5886 18.375 10.5 18.375ZM12.25 6.125V5.25C12.25 5.01793 12.1578 4.79538 11.9937 4.63128C11.8296 4.46719 11.6071 4.375 11.375 4.375C11.1429 4.375 10.9204 4.46719 10.7563 4.63128C10.5922 4.79538 10.5 5.01793 10.5 5.25V6.125H9.625V5.25C9.625 5.01793 9.53282 4.79538 9.36872 4.63128C9.20463 4.46719 8.98207 4.375 8.75 4.375C8.51794 4.375 8.29538 4.46719 8.13129 4.63128C7.96719 4.79538 7.875 5.01793 7.875 5.25V6.125H7C6.76794 6.125 6.54538 6.21719 6.38129 6.38128C6.21719 6.54537 6.125 6.76793 6.125 7C6.125 7.23206 6.21719 7.45462 6.38129 7.61872C6.54538 7.78281 6.76794 7.875 7 7.875H7.875V13.125H7C6.76794 13.125 6.54538 13.2172 6.38129 13.3813C6.21719 13.5454 6.125 13.7679 6.125 14C6.125 14.2321 6.21719 14.4546 6.38129 14.6187C6.54538 14.7828 6.76794 14.875 7 14.875H7.875V15.75C7.875 15.9821 7.96719 16.2046 8.13129 16.3687C8.29538 16.5328 8.51794 16.625 8.75 16.625C8.98207 16.625 9.20463 16.5328 9.36872 16.3687C9.53282 16.2046 9.625 15.9821 9.625 15.75V14.875H10.5V15.75C10.5 15.9821 10.5922 16.2046 10.7563 16.3687C10.9204 16.5328 11.1429 16.625 11.375 16.625C11.6071 16.625 11.8296 16.5328 11.9937 16.3687C12.1578 16.2046 12.25 15.9821 12.25 15.75V14.875C12.9462 14.875 13.6139 14.5984 14.1062 14.1062C14.5984 13.6139 14.875 12.9462 14.875 12.25C14.8735 11.6036 14.6336 10.9805 14.2013 10.5C14.6336 10.0195 14.8735 9.39639 14.875 8.75C14.875 8.05381 14.5984 7.38613 14.1062 6.89384C13.6139 6.40156 12.9462 6.125 12.25 6.125ZM12.25 13.125H9.625V11.375H12.25C12.4821 11.375 12.7046 11.4672 12.8687 11.6313C13.0328 11.7954 13.125 12.0179 13.125 12.25C13.125 12.4821 13.0328 12.7046 12.8687 12.8687C12.7046 13.0328 12.4821 13.125 12.25 13.125ZM12.25 9.625H9.625V7.875H12.25C12.4821 7.875 12.7046 7.96719 12.8687 8.13128C13.0328 8.29537 13.125 8.51793 13.125 8.75C13.125 8.98206 13.0328 9.20462 12.8687 9.36872C12.7046 9.53281 12.4821 9.625 12.25 9.625Z"
                fill="#344FA1"
              />
            </svg>

            <svg
              onClick={() => {
                setForm("twitter");

                handleClick(7);
              }}
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.44615 14.4998H5.37615C3.96596 14.4875 2.57617 14.1617 1.3074 13.5461C1.07401 13.4365 0.881848 13.255 0.759038 13.0283C0.636227 12.8015 0.58922 12.5415 0.624897 12.2861C0.663698 12.029 0.782736 11.7907 0.965015 11.6053C1.14729 11.4199 1.3835 11.2968 1.6399 11.2536C2.42618 11.1487 3.1826 10.8836 3.8624 10.4748C2.68216 9.55208 1.77355 8.32721 1.23286 6.93004C0.692172 5.53287 0.539542 4.01545 0.791147 2.53858C0.825261 2.30466 0.925866 2.08545 1.08099 1.90706C1.23611 1.72867 1.43922 1.5986 1.66615 1.53233C1.88692 1.463 2.1232 1.46004 2.34564 1.52381C2.56809 1.58759 2.7669 1.7153 2.9174 1.89109C3.4284 2.56115 4.07055 3.12008 4.80469 3.53378C5.53882 3.94748 6.34955 4.20728 7.1874 4.29733C7.22742 3.26646 7.67043 2.29246 8.42115 1.58483C8.796 1.22589 9.23854 0.945132 9.72298 0.75893C10.2074 0.572727 10.7241 0.484801 11.2429 0.500274C11.7616 0.515747 12.2721 0.634311 12.7446 0.849057C13.2171 1.0638 13.6421 1.37043 13.9949 1.75108C14.0868 1.83234 14.201 1.88413 14.3227 1.89973C14.4444 1.91533 14.568 1.89403 14.6774 1.83859C14.886 1.74019 15.1183 1.70315 15.3472 1.73179C15.5761 1.76042 15.7921 1.85356 15.9701 2.00032C16.148 2.14709 16.2806 2.34143 16.3523 2.56068C16.4239 2.77993 16.4318 3.01504 16.3749 3.23858C16.1731 4.06994 15.7907 4.84665 15.2549 5.51358C15.1368 8.00274 14.0394 10.3443 12.202 12.0276C10.3645 13.711 7.9361 14.5996 5.44615 14.4998ZM5.44615 12.7498H5.51615C6.53348 12.7848 7.54764 12.6175 8.49984 12.2576C9.45203 11.8977 10.3233 11.3524 11.0632 10.6532C11.803 9.95408 12.3967 9.11502 12.8098 8.18469C13.223 7.25436 13.4473 6.25127 13.4699 5.23358C13.4843 4.95468 13.5994 4.69046 13.7936 4.48984C14.0071 4.21968 14.1891 3.92612 14.3361 3.61483C14.0209 3.61543 13.7091 3.5495 13.4211 3.42133C13.1332 3.29317 12.8755 3.10567 12.6649 2.87108C12.4624 2.67032 12.2219 2.51196 11.9575 2.40529C11.6931 2.29862 11.41 2.24577 11.1249 2.24983C10.8369 2.24239 10.5503 2.29189 10.2816 2.3955C10.0128 2.49911 9.76711 2.65478 9.55865 2.85359C9.27741 3.12046 9.07119 3.45652 8.96062 3.82813C8.85006 4.19974 8.83904 4.59387 8.92865 4.97108L9.15615 5.96858L8.1324 6.03858C7.08335 6.12413 6.02825 5.98063 5.04016 5.61802C4.05207 5.25542 3.1546 4.68238 2.4099 3.93858C2.37796 5.09043 2.6661 6.22857 3.24228 7.22646C3.81846 8.22435 4.66011 9.0429 5.67365 9.59108L6.5049 10.0636L5.95365 10.8511C5.3575 11.6329 4.54068 12.2181 3.60865 12.5311C4.20655 12.6809 4.82102 12.7544 5.4374 12.7498H5.44615Z"
                fill="#344FA1"
              />
            </svg>

            <svg
              onClick={() => {
                setForm("facebook");
                handleClick(8);
              }}
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.91683 19.1669H4.25016C4.00705 19.1669 3.77389 19.0703 3.60198 18.8984C3.43007 18.7265 3.3335 18.4933 3.3335 18.2502V12.5669H1.50016C1.25705 12.5669 1.02389 12.4703 0.851982 12.2984C0.680073 12.1265 0.583496 11.8933 0.583496 11.6502V8.3502C0.583496 8.10709 0.680073 7.87393 0.851982 7.70202C1.02389 7.53011 1.25705 7.43354 1.50016 7.43354H3.3335V5.8752C3.39775 4.47853 4.0124 3.16411 5.04306 2.21934C6.07371 1.27458 7.43651 0.776326 8.8335 0.833536H11.5835C11.8266 0.833536 12.0598 0.930113 12.2317 1.10202C12.4036 1.27393 12.5002 1.50709 12.5002 1.7502V5.0502C12.5002 5.29332 12.4036 5.52648 12.2317 5.69838C12.0598 5.87029 11.8266 5.96687 11.5835 5.96687H8.8335V7.43354H11.5835C11.725 7.43246 11.8649 7.46418 11.9921 7.52621C12.1194 7.58823 12.2305 7.67887 12.3168 7.79104C12.4022 7.90488 12.4599 8.03704 12.4854 8.17706C12.5108 8.31707 12.5033 8.46109 12.4635 8.5977L11.5468 11.8977C11.4914 12.096 11.3708 12.2698 11.2045 12.3912C11.0382 12.5126 10.8359 12.5745 10.6302 12.5669H8.8335V18.2502C8.8335 18.4933 8.73692 18.7265 8.56501 18.8984C8.3931 19.0703 8.15994 19.1669 7.91683 19.1669ZM5.16683 17.3335H7.00016V11.6502C7.00016 11.4071 7.09674 11.1739 7.26865 11.002C7.44056 10.8301 7.67371 10.7335 7.91683 10.7335H9.97016L10.3735 9.26687H7.91683C7.67371 9.26687 7.44056 9.17029 7.26865 8.99838C7.09674 8.82647 7.00016 8.59332 7.00016 8.3502V5.8752C7.0237 5.40503 7.2272 4.96194 7.5685 4.6377C7.9098 4.31347 8.36274 4.13295 8.8335 4.13354H10.6668V2.66687H8.8335C7.92307 2.6114 7.0275 2.91715 6.34106 3.51778C5.65463 4.11841 5.23271 4.96547 5.16683 5.8752V8.3502C5.16683 8.59332 5.07025 8.82647 4.89834 8.99838C4.72644 9.17029 4.49328 9.26687 4.25016 9.26687H2.41683V10.7335H4.25016C4.49328 10.7335 4.72644 10.8301 4.89834 11.002C5.07025 11.1739 5.16683 11.4071 5.16683 11.6502V17.3335Z"
                fill="#344FA1"
              />
            </svg>

            <MoreHorizOutlined
              onClick={() => {
                handleClick(9);
              }}
            />
          </div>
          {/* {Form!=='link'&& Form!=='text'&&Form!=='app'?<WifiQR data={data[Form]}/>:<LinkQr data={data[Form]} />} */}

          {Form === "wifi" ? (
            <WifiQR setUserData={setUserData} />
          ) : Form === "email" ? (
            <EmailQR setUserData={setUserData} />
          ) : Form === "vcard" ? (
            <VcardQR setUserData={setUserData} />
          ) : Form === "bitcoin" ? (
            <BitcoinQR setUserData={setUserData} />
          ) : null}
          {Form !== "link" && Form !== "text" && Form !== "app" ? null : (
            <LinkQr data={data[Form]} />
          )}
        </LeftContent>
        <RightContent>
          <svg
            className="expand-icon"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.54488 16.5191C6.8042 16.2687 7.15153 16.1301 7.51205 16.1332C7.87257 16.1363 8.21744 16.2809 8.47238 16.5359C8.72731 16.7908 8.87192 17.1357 8.87505 17.4962C8.87819 17.8567 8.73959 18.204 8.48913 18.4634L4.82062 22.1305H7C7.33699 22.1306 7.66222 22.2544 7.91393 22.4785C8.16563 22.7026 8.32628 23.0113 8.36538 23.346L8.375 23.5055C8.375 23.8702 8.23013 24.2199 7.97227 24.4778C7.71441 24.7356 7.36467 24.8805 7 24.8805H1.5C1.13533 24.8805 0.785591 24.7356 0.527728 24.4778C0.269866 24.2199 0.125 23.8702 0.125 23.5055V18.0055C0.125 17.6408 0.269866 17.2911 0.527728 17.0332C0.785591 16.7754 1.13533 16.6305 1.5 16.6305C1.86467 16.6305 2.21441 16.7754 2.47227 17.0332C2.73013 17.2911 2.875 17.6408 2.875 18.0055V20.1876L6.54488 16.5191ZM18.0069 24.8805C17.6422 24.8805 17.2925 24.7356 17.0346 24.4778C16.7767 24.2199 16.6319 23.8702 16.6319 23.5055C16.6319 23.1408 16.7767 22.7911 17.0346 22.5332C17.2925 22.2754 17.6422 22.1305 18.0069 22.1305H20.1835L16.5191 18.4634C16.2824 18.2266 16.1402 17.9116 16.1192 17.5774C16.0981 17.2433 16.1998 16.9129 16.405 16.6484L16.5191 16.5191C16.777 16.2614 17.1266 16.1165 17.4913 16.1165C17.8559 16.1165 18.2055 16.2614 18.4634 16.5191L22.1319 20.1904V18.0055C22.1319 17.6687 22.2556 17.3437 22.4794 17.092C22.7032 16.8403 23.0115 16.6795 23.346 16.6401L23.5069 16.6305C23.8715 16.6305 24.2213 16.7754 24.4791 17.0332C24.737 17.2911 24.8819 17.6408 24.8819 18.0055V23.5055C24.8819 23.8702 24.737 24.2199 24.4791 24.4778C24.2213 24.7356 23.8715 24.8805 23.5069 24.8805H18.0069ZM7 0.125C7.36467 0.125 7.71441 0.269866 7.97227 0.527728C8.23013 0.785591 8.375 1.13533 8.375 1.5C8.375 1.86467 8.23013 2.21441 7.97227 2.47227C7.71441 2.73013 7.36467 2.875 7 2.875H4.82337L8.48775 6.5435C8.72449 6.78027 8.86671 7.09528 8.88772 7.42944C8.90873 7.7636 8.8071 8.09394 8.60188 8.3585L8.48775 8.48775C8.2299 8.74552 7.88023 8.89033 7.51562 8.89033C7.15102 8.89033 6.80135 8.74552 6.5435 8.48775L2.875 4.8165V7C2.87496 7.33678 2.75131 7.66184 2.52752 7.91351C2.30372 8.16518 1.99535 8.32597 1.66088 8.36538L1.5 8.375C1.13533 8.375 0.785591 8.23013 0.527728 7.97227C0.269866 7.71441 0.125 7.36467 0.125 7V1.5C0.125 1.13533 0.269866 0.785591 0.527728 0.527728C0.785591 0.269866 1.13533 0.125 1.5 0.125H7ZM23.5069 0.125C23.8715 0.125 24.2213 0.269866 24.4791 0.527728C24.737 0.785591 24.8819 1.13533 24.8819 1.5V7C24.8819 7.36467 24.737 7.71441 24.4791 7.97227C24.2213 8.23013 23.8715 8.375 23.5069 8.375C23.1422 8.375 22.7925 8.23013 22.5346 7.97227C22.2767 7.71441 22.1319 7.36467 22.1319 7V4.8165L18.4634 8.48775C18.2266 8.72449 17.9116 8.86671 17.5774 8.88772C17.2433 8.90873 16.9129 8.8071 16.6484 8.60188L16.5191 8.48775C16.2614 8.2299 16.1165 7.88023 16.1165 7.51562C16.1165 7.15102 16.2614 6.80135 16.5191 6.5435L20.1849 2.875H18.0069C17.6701 2.87496 17.345 2.75131 17.0934 2.52752C16.8417 2.30372 16.6809 1.99535 16.6415 1.66088L16.6319 1.5C16.6319 1.13533 16.7767 0.785591 17.0346 0.527728C17.2925 0.269866 17.6422 0.125 18.0069 0.125H23.5069Z"
              fill="#344FA1"
            />
          </svg>

          <div className="img-wrap">
            <img src={qrCodeSource} alt="" />
          </div>
          <div className="content-wrap">
            <div className="shape-color">
              <p>Shape & Color</p>
              <ArrowForwardIos />
            </div>
            <div className="shape-color">
              <p>Logo position</p>
              <ArrowForwardIos />
            </div>

            <div className="links">
              <div className="PNG">
                <GetApp />
                <div style={{cursor: "pointer"}}>
                  <a
                    href={qrCodeSource}
                    download="QRCode.png"
                    style={{ textDecoration: "none" }}
                  >
                    <h3>Download</h3>
                    <h5>PNG</h5>
                  </a>
                </div>
              </div>
              <div className="SVG" style={{cursor: "pointer"}}>
                <GetApp />
                <div onClick={svgQrCodeDownloadHandler}>
                  <h3>Download</h3>
                  <h5>SVG</h5>
                </div>
              </div>
            </div>
          </div>
        </RightContent>
      </Wrap>
    </Container>
  );
}

export default QR;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 100px;
`;
const Wrap = styled.div`
  width: 80%;
  background-color: #eaecf8;

  border-radius: 50px;
  display: flex;
  box-shadow: 0px 0px 32px #344fa170;
  overflow: hidden;

  transition: all 3s ease-in-out;

  @media screen and (max-width: 700px) {
    width: 95%;
    flex-direction: column;
    border-radius: 20px;
  }
`;
const LeftContent = styled.div`
  flex: 60%;
  display: flex;

  .click-bg {
    border-radius: 50px;
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: 78px;
    margin-left: 57px;
    transition: all 0.3s ease-in-out;
  }
  .side-bar {
    padding-top: 30px;
    margin: 58px 0px 58px 43px;
    display: flex;
    flex-direction: column;
    background-color: #f1f3f9;
    width: 75px;
    height: 500px;
    align-items: center;
    border: 2px solid white;
    border-radius: 63px;
    box-shadow: 6px 0px 12px #344fa120;

    svg {
      padding: 0px 30px 30px 30px;
      color: #344fa1;
      position: relative;
      height: 20px;
    }
    .active path {
      fill: white !important;
      transform: scale(1.02);
      transition: all 0.3s ease-in-out;
    }
  }
  @media screen and (max-width: 700px) {
    .side-bar {
      margin-left: 6px;
      width: 36px;
      svg {
        height: 14px;
      }
    }
    .click-bg {
      width: 30px !important;
      height: 30px !important;
      margin-left: 11px !important;
      margin-top: 82px;
    }
  }
`;
const RightContent = styled.div`
  flex: 40%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 650px;
  position: relative;

  .expand-icon {
    position: absolute;
    right: 30px;
    top: 20px;
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    width: 100%;
    margin: 0px 0px 50px 0px;
    .shape-color {
      display: flex;
      width: 330px;
      height: 50px;
      background-color: #eaecf8;
      border: 10px solid white;
      border-radius: 95px;
      box-shadow: 0 2px 6px #00000040;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 16px;
        font-weight: 500;
        color: #344fa1;
        margin-left: 30px;
      }
      svg {
        color: #344fa1;
        transform: rotate(90deg);
        margin-right: 13px;
      }
    }
  }
  .links {
    display: flex;
    width: 100%;

    padding: 0 50px;
    box-sizing: border-box;
    justify-content: space-between;
  }

  .img-wrap {
    padding: 30px 0px;
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    img {
      height: 100%;
      padding: 10px;

      box-shadow: 0px 12px 20px #344fa152;
      border-radius: 15px;
    }
  }
  .PNG {
    display: flex;
    height: 50px;
    width: 180px;
    border-radius: 50px;
    background-color: #8566ff;
    align-items: center;
    justify-content: center;

    svg {
      color: white;
      height: 33px;
      width: 33px;
      margin-right: 20px;
    }
    * {
      color: white;
    }
    h3 {
      font-size: 16px;
      font-weight: 500;
    }
    h5 {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
    }
  }
  .SVG {
    display: flex;
    height: 50px;
    width: 180px;
    border-radius: 50px;
    border: 2px solid #8566ff;
    align-items: center;
    justify-content: center;

    svg {
      color: #8566ff;
      height: 33px;
      width: 33px;
      margin-right: 20px;
    }
    * {
      color: #8566ff;
    }
    h3 {
      font-size: 16px;
      font-weight: 500;
    }
    h5 {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
    }
  }

  @media screen and (max-width: 700px) {
    border-radius: 0 0 50px 50px;
    .content-wrap {
      .shape-color {
        width: 80%;
        height: 50px;
        margin-bottom: 20px;
        p {
          font-size: 13px;
        }
        svg {
          height: 13px;
          width: 13px;
        }
      }
      .links {
        padding: 0 30px;
        div {
          h3 {
            font-size: 13px;
          }
          h5 {
            font-size: 10px;
          }
          svg {
            width: 25px;
            height: 25px;
            margin-right: 4px;
          }
        }
      }
    }
    .SVG {
      margin-left: 4px;
    }
  }
`;
