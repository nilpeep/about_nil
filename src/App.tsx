import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
// import cat from "./cat.gif";
import bash from "./assets/bash.svg";
import satellite from "./assets/satellite4.svg";
import earth from "./assets/earth.svg";
import cloud from "./assets/cloud.svg";
import sky from "./assets/colorfullStars.png";
import Navbar from "./components/navbar";
import clientsMain from "./assets/clients-main.svg";
import Intro from "./components/intro";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const parallax = useRef<IParallax>(null!);
  // const [scrolled, setScrolled] = useState(false);

  return (
    <div
      className="bg-[#161616] h-screen w-screen overflow-hidden"
      // style={{ height: "100%", background: "#253237" }}
    >
      <div className="fixed z-50 w-full">
        <Navbar parallax={parallax} />
      </div>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer className="z-50" offset={0} speed={1}>
          <Intro parallax={parallax} />
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#FFFF" }}
        /> */}
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />
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
        <ParallaxLayer
          offset={0}
          speed={-1}
          // style={{ pointerEvents: "none" }}
          horizontal={true}
        >
          <img className="mt-96 w-40 ml-64" src={satellite} />
        </ParallaxLayer>

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
          offset={3.2}
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
          className="flex flex-col justify-center"
        >
          <div className="rounded-lg bg-[#FFF] m-5 p-5 text-black">
            <h1 className="font-roboto text-3xl text-black font-bold animate-slidein">
              It's Nilufer Kaplan, a software developer, artist, and a cat
              lover.
            </h1>
            <p>
              I am a passionate and skilled MERN-stack Developer. I am
              proficient in React, Node.js, Express, and MongoDB. I am also
              experienced in using Redux, Context API, and Firebase. I have
              experience in building full-stack applications and RESTful APIs. I
              have a strong understanding of the fundamentals of web development
              and I am always eager to learn new technologies.
            </p>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer
          className="flex items-center justify-center "
          offset={0}
          speed={-1.05}
        >
          <img src={cat} className=" h-74 mb-[350px] w-32 " />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={1}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={clientsMain} style={{ width: "40%" }} />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
