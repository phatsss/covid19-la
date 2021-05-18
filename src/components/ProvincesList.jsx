import React from "react";
import { List, Avatar, Typography } from "antd";
import { useSelector } from "react-redux";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export default function ProvincesList() {
  const patients = useSelector((state) => state.patients.patients);
  return (
    <div style={{ marginTop: "25px" }}>
      <Title level={3}>ຈຳນວນຜູ້ຕິດເຊື້ອໃນແຕ່ລະແຂວງ</Title>
      <List
        dataSource={patients.provinces}
        bordered
        renderItem={(item, key) => (
          <List.Item
            key={item.id}
            actions={[
              <Title level={5}>
                ເພີ່ມໃໝ່ <Text type="danger">{item.new_case}</Text> ຄົນ
              </Title>,
              <Title level={5}>
                ສະສົມ <Text type="warning">{item.total}</Text> ຄົນ
              </Title>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  icon={<EnvironmentOutlined />}
                  style={{
                    backgroundColor: "transparent",
                    color: "rgb(255, 77, 79)",
                  }}
                />
              }
              title={<Title level={5}>{item.name}</Title>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
