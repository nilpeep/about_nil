import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import cat from "./cat.gif";
import satellite from "./assets/satellite4.svg";
import earth from "./assets/earth.svg";
import cloud from "./assets/cloud.svg";
import sky from "./assets/colorfullStars.png";
import Navbar from "./components/navbar";
import clientsMain from "./assets/clients-main.svg";
import About from "./components/about";

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
        <ParallaxLayer offset={0} speed={-0.7}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
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
        <ParallaxLayer offset={0.5} speed={1} style={{ pointerEvents: "none" }}>
          <img
            src={satellite}
            style={{ width: "15%", marginLeft: "70%", marginBottom: "70%" }}
          />
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
          offset={2.5}
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

        <ParallaxLayer
          offset={1}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          className="flex justify-center  items-center"
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          className="flex items-center justify-center z-50"
          offset={0}
          speed={-1.05}
        >
          <img src={cat} className=" h-74 mb-[350px] w-32 " />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={clientsMain} style={{ width: "40%" }} />
          <h1 className="text-black absolute left-50">HIII IT'S NILUFER</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
