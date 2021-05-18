import React, { useState } from "react";
import { Typography } from "antd";
import MapGL, {
  Source,
  Layer,
  FeatureState,
  Popup,
} from "@urbica/react-map-gl";
import { useSelector } from "react-redux";
import "mapbox-gl/dist/mapbox-gl.css";
import polygonData from "../laomap.json";
const MAPBOX_ACCESS_TOKEN = "MapGL API";
const { Title, Text } = Typography;
export default function ClusterMaps() {
  const patients = useSelector((state) => state.patients.patients);

  const [hoveredStateId, setHoveredStateId] = useState(null);
  const [provinceName, setProvinceName] = useState(null);
  const [popupPoint, setPopupPoint] = useState({
    latitude: 17.942155,
    longitude: 102.632904,
  });
  const [patientTotal, setPatientTotal] = useState({
    new: 0,
    total: 0,
  });
  const [viewport, setViewport] = useState({
    latitude: 17.942155,
    longitude: 102.632904,
    zoom: 4.5,
  });
  const onHover = (event) => {
    if (event.features.length > 0) {
      const nextHoveredStateId = event.features[0].id;
      setPopupPoint({
        latitude: event.lngLat.lat,
        longitude: event.lngLat.lng,
      });
      if (hoveredStateId !== nextHoveredStateId) {
        setHoveredStateId(nextHoveredStateId);
        setProvinceName(event.features[0].properties.Name);
        // loop fetch data
        patients.provinces.forEach((item) => {
          if (event.features[0].properties.Name === item.name) {
            setPatientTotal({
              new: item.new_case,
              total: item.total,
            });
          }
        });
      }
    }
  };

  const onLeave = () => {
    if (hoveredStateId) {
      setHoveredStateId(null);
      setPopupPoint({
        latitude: 17.942155,
        longitude: 102.632904,
      });
      setProvinceName(null);
      setPatientTotal({
        new: 0,
        total: 0,
      });
    }
  };

  return (
    <>
      <Title level={3}> ຈຳນວນຂອງຜູ້ຕິດເຊື້ອທັງໝົດ </Title>
      <MapGL
        style={{ width: "100%", height: "400px" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        onViewportChange={setViewport}
        {...viewport}
      >
        <Source id="states" type="geojson" data={polygonData} />
        <Layer
          id="state-fills"
          type="fill"
          source="states"
          paint={{
            "fill-color": "#627BC1",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.5,
            ],
          }}
          onHover={onHover}
          onLeave={onLeave}
        />
        {hoveredStateId && (
          <FeatureState
            id={hoveredStateId}
            source="states"
            state={{ hover: true }}
          />
        )}
        {hoveredStateId && (
          <Popup
            longitude={popupPoint.longitude}
            latitude={popupPoint.latitude}
            closeButton={false}
            closeOnClick={false}
          >
            <Title level={5} style={{ textAlign: "center" }}>
              {provinceName}
            </Title>
            <Text type="danger">ເພີ່ມໃໝ່ {patientTotal.new}</Text>
            <br />
            <Text type="warning">ສະສົມ {patientTotal.total}</Text>
          </Popup>
        )}
      </MapGL>
    </>
  );
}
