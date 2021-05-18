import React from "react";
import { Card, Col, Row, Statistic, Typography } from "antd";
import moment from "moment";
import {
  TeamOutlined,
  PlusOutlined,
  MedicineBoxOutlined,
  SmileOutlined,
  FileDoneOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import "../styles/static.css";
const { Title } = Typography;
export default function StaticData() {
  const patients = useSelector((state) => state.patients.patients);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Card bordered={false}>
          <Title level={3} style={{ textAlign: "left" }}>
            ຍອດຜູ້ຕິດເຊື້ອ
          </Title>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} order={1}>
              <Card bordered={false}>
                <Statistic
                  title="ຜູ້ຕິດເຊື້ອໃໝ່"
                  value={patients.new_case}
                  // precision={2}
                  valueStyle={{ color: "#ff4d4f" }}
                  prefix={<PlusOutlined />}
                  suffix="ຄົນ"
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} order={1}>
              <Card bordered={false}>
                <Statistic
                  title="ຍອດຜູ້ຕິດເຊື້ອສະສົມ"
                  value={patients.total}
                  // precision={2}
                  valueStyle={{ color: "#ff4d4f" }}
                  prefix={<TeamOutlined />}
                  suffix="ຄົນ"
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} order={2}>
              <Card bordered={false}>
                <Statistic
                  title="ກຳລັງຮັກສາ"
                  value={patients.decovering_case}
                  // precision={2}
                  valueStyle={{ color: "#faad14" }}
                  prefix={<MedicineBoxOutlined />}
                  suffix="ຄົນ"
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} order={3}>
              <Card bordered={false}>
                <Statistic
                  title="ຮັບການກວດ"
                  value={patients.test_case}
                  //   precision={`ເພີ່ມໃໝ່ ${patients.new_health_examination}`}
                  valueStyle={{ color: "#1890ff" }}
                  prefix={<FileDoneOutlined />}
                  suffix="ຄົນ"
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} order={3}>
              <Card bordered={false}>
                <Statistic
                  title="ບໍ່ຕິດເຊື້ອ"
                  value={patients.negative_case}
                  //   precision={`ເພີ່ມໃໝ່ ${patients.new_no_genes_found}`}
                  valueStyle={{ color: "#52c41a" }}
                  prefix={<HeartOutlined />}
                  suffix="ຄົນ"
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} order={3}>
              <Card bordered={false}>
                <Statistic
                  title="ປິ່ນປົວຫາຍດີ"
                  value={patients.treaded}
                  // precision={2}
                  valueStyle={{ color: "#52c41a" }}
                  prefix={<SmileOutlined />}
                  suffix="ຄົນ"
                />
              </Card>
            </Col>
          </Row>
          <small>
            ອັບເດດຫຼ້າສຸດ: {moment(patients.updated_at).format("LLLL")}
          </small>
        </Card>
      </div>
    </>
  );
}
