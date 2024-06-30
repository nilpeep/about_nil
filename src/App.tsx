import { useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import earth from "/assets/earth.svg";
import cloud from "/assets/cloud.svg";
import sky from "/assets/colorfullStars.png";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import classnames from "classnames";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./redux/theme/themeSlice";

export default function App() {
  const parallax = useRef<IParallax>(null!);
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div className={`  transition-all duration-500 ease-in-out`}>
      <div className="fixed z-50 w-full">
        <button onClick={() => dispatch(changeTheme("dark"))}>
          change theme to dark
        </button>
        <button onClick={() => dispatch(changeTheme("light"))}>
          change theme to light
        </button>
        <button onClick={() => dispatch(changeTheme("space"))}>
          change theme to space
        </button>

        <Navbar parallax={parallax} />
      </div>
      <Parallax className="bg-primary" ref={parallax} pages={5}>
        <ParallaxLayer
          className="flex items-center justify-center px-10"
          offset={0}
          speed={1}
        >
          <Intro parallax={parallax} />
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#FFFF" }}
        /> */}
        {/* <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "	#27214f" }}
        /> */}

        {/* <ParallaxLayer
          offset={0}
          speed={-1}
          // style={{ pointerEvents: "none" }}
          horizontal={true}
        >
          <img className="mt-96 w-40 ml-64" src={satellite} />
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: `url(${sky})`,
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "repeat",
          }}
        />

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={earth} className="w-[40%] mb-[550px]" />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1}
          speed={-0.3}
          style={{
            backgroundImage: url("clients", true),
          }}
        ></ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={0.1}
          className="flex justify-center  items-center"
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          className="flex flex-col mt-[60px] z-10"
        >
          <About parallax={parallax} />
        </ParallaxLayer>
        {/* <ParallaxLayer
          className="flex items-center justify-center  "
          offset={0}
          speed={-1.05}
        >
          <img src={cat} className=" h-74 mb-[350px] w-32 " />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={0.6}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={clientsMain} style={{ width: "40%" }} />
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          offset={1.8}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={bash} style={{ width: "40%" }} />
        </ParallaxLayer> */}
        {/* <ParallaxLayer className="mt-[50px] " offset={2} speed={1}>
          <Portfolio />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
