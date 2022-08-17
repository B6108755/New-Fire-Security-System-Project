import React, { useState } from "react";
import { Card } from "antd";
import { Radio, Tabs } from "antd";
import { Layout, Menu } from "antd";
import type { RadioChangeEvent } from "antd";
import "antd/dist/antd.css";
import { Col, Divider, Row } from "antd";
import d3 from "../../public/img/3D.jpg";
import { Progress } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import {
  VideoCameraOutlined,
  AlertOutlined,
  ExclamationCircleOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";

type Props = {};
const style: React.CSSProperties = {
  background: "#f52222",
  padding: "8px 0",
  color: "white",
};
const style1: React.CSSProperties = {
  background: "#590c0c",
  padding: "8px 0",
  color: "white",
};

const { TabPane } = Tabs;
const { Search } = Input;
type TabPosition = "left" | "right" | "top" | "bottom";
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value: string) => console.log(value);

const AlarmMonitor = (props: Props) => {
  const [mode, setMode] = useState<TabPosition>("top");
  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };
  return (
    <Row gutter={[0, 8]} style={{ backgroundColor: "black", height: "100%" }}>
      <Col xl={1}> </Col>

      <Col xl={8}>
        <div style={{ marginTop: "25px", width: "250px" }}>
          <p style={{ width: "425px", backgroundColor: "black" }}>
            <Radio.Group
              onChange={handleModeChange}
              value={mode}
              style={{ marginBottom: 8 }}
            >
              <Radio.Button value="top" style={{ width: "200px" }}>
                Single Alarm
              </Radio.Button>
              <Radio.Button value="left" style={{ width: "200px" }}>
                Multi Map
              </Radio.Button>
            </Radio.Group>
          </p>
        </div>
        <p
          style={{
            backgroundColor: "#5e2019",
            textAlign: "left",
            marginRight: "20px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            Overview alram monitoring
          </h1>
        </p>
        <p
          style={{
            backgroundColor: "#5e2019",
            height: "250px",
            textAlign: "left",
            marginRight: "20px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <Search
            placeholder="Arrival Hall"
            allowClear
            onSearch={onSearch}
            style={{
              width: "425px",
            }}
          />
          <div
            style={{
              width: "400px",
              textAlign: "center",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            <Row>
              <Col xl={8}>
                <Progress
                  type="circle"
                  percent={64}
                  strokeColor="red"
                  trailColor="blue"
                />
                <p style={{ marginTop: "10px" }}>Completion rate</p>
              </Col>
              <Col xl={8}>
                <Progress
                  type="circle"
                  percent={30}
                  strokeColor="red"
                  trailColor="blue"
                  format={() => "Low"}
                />
                <p style={{ marginTop: "10px" }}>Single Alarm</p>
              </Col>
              <Col xl={8}>
                <Progress
                  type="circle"
                  percent={90}
                  strokeColor="red"
                  trailColor="blue"
                  format={() => "High"}
                />
                <p style={{ marginTop: "10px" }}>Multi map alarm</p>
              </Col>
            </Row>
          </div>
        </p>
        <p
          style={{
            backgroundColor: "#5e2019",
            height: "40px",
            textAlign: "left",
            marginRight: "20px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "center",
              paddingTop: "8px",
            }}
          >
            The total number of problems with alarms.
          </p>
        </p>
        <p
          style={{
            backgroundColor: "#5e2019",
            height: "200px",
            textAlign: "left",
            marginRight: "20px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <Search
            placeholder="Seach"
            allowClear
            onSearch={onSearch}
            style={{
              width: "425px",
            }}
          />
          <div
            style={{
              color: "white",
              marginTop: "15px",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            <Row gutter={1}>
              <Col xl={3}>Zone A</Col>
              <Col xl={10}>
                <span style={{ color: "blue", marginLeft: "10px" }}>
                  (Fire alarm signle tody)
                </span>
              </Col>
              <Col xl={8}>
                <div
                  style={{
                    height: "2px",
                    width: "1px",
                    marginLeft: "80px",
                    marginBottom: "10px",
                  }}
                >
                  <Progress
                    width={25}
                    type="circle"
                    percent={50}
                    format={() => " "}
                    strokeWidth={9}
                  />
                </div>
              </Col>
              <Col xl={3}>
                <span>50%</span>
              </Col>
            </Row>{" "}
          </div>
          <div
            style={{
              color: "white",
              marginTop: "15px",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            <Row gutter={1}>
              <Col xl={3}>Zone B</Col>
              <Col xl={10}>
                <span style={{ color: "blue", marginLeft: "10px" }}>
                  (Fire alarm signle tody)
                </span>
              </Col>
              <Col xl={8}>
                <div
                  style={{
                    height: "2px",
                    width: "1px",
                    marginLeft: "80px",
                    marginBottom: "10px",
                  }}
                >
                  <Progress
                    width={25}
                    type="circle"
                    percent={13}
                    strokeColor="red"
                    format={() => " "}
                    strokeWidth={9}
                  />
                </div>
              </Col>
              <Col xl={3}>
                <span>13%</span>
              </Col>
            </Row>{" "}
          </div>
          <div
            style={{
              color: "white",
              marginTop: "15px",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            <Row gutter={1}>
              <Col xl={3}>Zone C</Col>
              <Col xl={10}>
                <span style={{ color: "blue", marginLeft: "10px" }}>
                  (Fire alarm signle tody)
                </span>
              </Col>
              <Col xl={8}>
                <div
                  style={{
                    height: "2px",
                    width: "1px",
                    marginLeft: "80px",
                    marginBottom: "10px",
                  }}
                >
                  <Progress
                    width={25}
                    type="circle"
                    percent={37}
                    strokeColor="yellow"
                    format={() => " "}
                    strokeWidth={9}
                  />
                </div>
              </Col>
              <Col xl={3}>
                <span>37%</span>
              </Col>
            </Row>{" "}
          </div>
          <div
            style={{
              color: "white",
              marginTop: "15px",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            <Row gutter={1}>
              <Col xl={3}>Zone D</Col>
              <Col xl={10}>
                <span style={{ color: "blue", marginLeft: "10px" }}>
                  (Fire alarm signle tody)
                </span>
              </Col>
              <Col xl={8}>
                <div
                  style={{
                    height: "2px",
                    width: "1px",
                    marginLeft: "80px",
                    marginBottom: "10px",
                  }}
                >
                  <Progress
                    width={25}
                    type="circle"
                    percent={50}
                    strokeColor="pink"
                    format={() => " "}
                    strokeWidth={9}
                  />
                </div>
              </Col>
              <Col xl={3}>
                <span>50%</span>
              </Col>
            </Row>{" "}
          </div>
        </p>
      </Col>

      <Col xl={15} style={{ backgroundColor: "black", width: "100%" }}>
        <div
          style={{
            backgroundColor: "black",
            height: "10%",
            paddingTop: "25px",
            paddingRight: "20px",
          }}
        >
          <Row gutter={[16, 8]}>
            <Col xl={8}>
              <Card
                style={{ backgroundColor: "#8a8987", borderRadius: "15px" }}
              >
                <p style={{ color: "black" }}>
                  <AlertOutlined style={{ marginRight: "15px" }} />
                  Alarm in the area
                </p>
                <h1
                  style={{
                    textAlign: "center",
                  }}
                >
                  4,198 <span>(Price)</span>
                </h1>
              </Card>
            </Col>
            <Col xl={8}>
              <Card
                style={{ backgroundColor: "#8a8987", borderRadius: "15px" }}
              >
                <p style={{ color: "black" }}>
                  <VideoCameraOutlined style={{ marginRight: "15px" }} />
                  fire alarm malfunction
                </p>
                <h1
                  style={{
                    textAlign: "center",
                  }}
                >
                  2,012 <span>(Price)</span>
                </h1>
              </Card>
            </Col>
            <Col xl={8}>
              <Card
                style={{ backgroundColor: "#8a8987", borderRadius: "15px" }}
              >
                <p style={{ color: "black" }}>
                  <ExclamationCircleOutlined style={{ marginRight: "15px" }} />
                  fire alram not working
                </p>
                <h1
                  style={{
                    textAlign: "center",
                  }}
                >
                  1,008 <span>(Price)</span>
                </h1>
              </Card>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: "black#5e2019",
              height: "490px",
              width: "815px",
              textAlign: "center",
              marginRight: "20px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <img src={d3} style={{ maxHeight: "100%", maxWidth: "100%" }} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AlarmMonitor;
