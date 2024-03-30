import React from "react";
import Logo from "../assets/logo.png";

import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const tabScreen = useMediaQuery("(max-width: 1120px)");
  const mobileScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div className="flex items-center text-[white] w-full justify-between bg-primary">
      <img src={Logo} alt="" className="h-[80px]" />
      <div
        className={`flex items-center ${
          tabScreen ? "w-[70%]" : "w-[40%]"
        } justify-evenly`}
      >
        {!mobileScreen && (
          <>
            <div className="flex items-center justify-between w-[60%]">
              <p>
                <a href="" className="hover:text-other">
                  Home
                </a>
              </p>
              <p>
                <a href="" className="hover:text-other">
                  Services
                </a>
              </p>
              <p>
                <a href="" className="hover:text-other">
                  Projects
                </a>
              </p>
              <p>
                <a href="" className="hover:text-other">
                  Contact
                </a>
              </p>
            </div>
            <div className="w-[2px] h-[50px] bg-[white]"></div>
          </>
        )}
        <div>
          <IconButton onClick={() => {
            window.open("https://www.linkedin.com/in/venkadeshs/");
          }}>
            <LinkedIn className="text-[white] hover:text-other" />
          </IconButton>
          <IconButton onClick={() => {
            window.open("https://www.instagram.com/venkadesh_developer/");
          }}>
            <Instagram className="text-[white] hover:text-other" />
          </IconButton>
          <IconButton onClick={() => {
            window.open("https://www.github.com/venkadesh004");
          }}>
            <GitHub className="text-[white] hover:text-other" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
