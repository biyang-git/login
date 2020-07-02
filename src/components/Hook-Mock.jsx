/* eslint-disable */
import React from "react";
import { useState } from "react";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

export default function HookMock() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      </>
    
  );
}
