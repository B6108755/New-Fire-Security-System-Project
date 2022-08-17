import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";
import AlarmMonitor from "./pages/AlarmMonitor";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <>
      <Navber></Navber>
    </>
  );
}

export default App;
