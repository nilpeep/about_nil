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

  return (
    <>
      <Navbar />
      <Intro />
    </>
  );
}
