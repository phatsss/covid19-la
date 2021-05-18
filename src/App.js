import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ApartmentOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "antd/dist/antd.css";
import ClusterMaps from "./components/ClusterMaps";
import StaticData from "./components/StaticData";
import ProvincesList from "./components/ProvincesList";
import { getPatients } from "./redux/effect/patientsEffect";
const { Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch();
  const [currentMenu, setCurrentMenu] = useState("");
  const handleClick = (e) => {
    setCurrentMenu(e.key);
  };
  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Menu
          onClick={handleClick}
          selectedKeys={[currentMenu]}
          mode="horizontal"
        >
          <Menu.Item key="one" icon={<HomeOutlined />}>
            <a href="#all-case">ຍອດຜູ້ຕິດເຊື້ອ</a>
          </Menu.Item>
          <Menu.Item key="two" icon={<EnvironmentOutlined />}>
            <a href="#on-maps">ຈຳນວນຂອງຜູ້ຕິດເຊື້ອທັງໝົດ</a>
          </Menu.Item>
          <Menu.Item key="three" icon={<ApartmentOutlined />}>
            <a href="#provinces-list">ຈຳນວນຜູ້ຕິດເຊື້ອໃນແຕ່ລະແຂວງ</a>
          </Menu.Item>
        </Menu>
        <div id="all-case"></div>
        <StaticData />
        <div className="site-layout-content">
          <div id="on-maps"></div>
          <ClusterMaps />
          <div id="provinces-list"></div>
          <ProvincesList />
        </div>
        <small>
          *ໝາຍເຫດ: ຂໍ້ມູນຈາກເວັບໄຊ{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.covid19.gov.la/index.php"
          >
            ຄະນະສະເພາະກິດ COVID-19
          </a>
        </small>
      </Content>
      <Footer style={{ textAlign: "right" }}>
        <small>
          ©2021, Front-end: Phongphat KHAMPHIEW & Back-end: Pheungpheth
          PHOUMINITH
        </small>
      </Footer>
    </Layout>
  );
}

export default App;
