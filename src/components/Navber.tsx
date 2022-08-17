import React from "react";
import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AimOutlined,
  FolderOpenOutlined,
  HeatMapOutlined,
  SnippetsOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import AlarmMonitor from "../pages/AlarmMonitor";
import "antd/dist/antd.css";
import { Col, Layout, Menu, Row } from "antd";
import MapInterface from "../pages/MapInterface";
import InformationLink from "../pages/InformationLink";
import VideoWall from "../pages/VideoWall";
import EventNotification from "../pages/EventNotification";
import Report from "../pages/Report";
type Props = {};
const { Header, Content, Footer, Sider } = Layout;
const Navber = (props: Props) => {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    // let path = `newPath`;
    navigate(`/${path}`);
  };
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "#140e0d", height: "8vh" }}>
          <p
            className=""
            style={{ color: "red", textAlign: "left", marginLeft: "20px" }}
          >
            Fire & Security System
          </p>
        </Header>

        <Layout style={{ height: "92vh" }}>
          <Sider style={{ backgroundColor: "dark" }}>
            <p
              className="align-center"
              style={{ color: "white", marginTop: "10px" }}
            >
              Friday, October 21,2022
            </p>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={({ item, key, keyPath, domEvent }) => {
                // let navigate = useNavigate();
                // console.log("menu click");
                console.log(key);
                routeChange(key);
                // navigate(`/${key}`, { replace: true });
                // <Link to={`/${key}`}></Link>;
              }}
              items={[
                {
                  key: "mapInterface",
                  icon: <HeatMapOutlined />,
                  label: "Map Interface",
                },
                {
                  key: "alarmMonitor",
                  icon: <AimOutlined />,
                  label: "Alarm Monitor",
                },
                {
                  key: "informationLink",
                  icon: <FolderOpenOutlined />,
                  label: "Information Link",
                },
                {
                  key: "videoWallIntegration",
                  icon: <VideoCameraOutlined />,
                  label: "Video Wall Integration",
                },
                {
                  key: "eventNotification",
                  icon: <ScheduleOutlined />,
                  label: "Event Notification",
                },
                {
                  key: "report",
                  icon: <SnippetsOutlined />,
                  label: "Report",
                },
              ]}
            />
          </Sider>
          <Content>
            <Routes>
              <Route path="/mapInterface" element={<MapInterface />} />
              <Route path="/alarmMonitor" element={<AlarmMonitor />} />
              <Route path="/informationLink" element={<InformationLink />} />
              <Route
                path="/eventNotification"
                element={<EventNotification />}
              />
              <Route path="/report" element={<Report />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Navber;
