import React from 'react';
import SoftwareIcon from './assets/软件图标.png';
import table from './assets/notice.png';

export default function Pastpage() {
    return (
<div
  style={{ width: 1280, height: 720, position: "relative", overflow: "hidden", background: "#fff" }}
>
  <div style={{ width: 1280, height: 80 }}>
    <p
      style={{
        width: 1280,
        height: 80,
        position: "absolute",
        left: 0,
        top: 70,
        fontSize: 70,
        textAlign: "center",
        color: "#000",
      }}
    >

    <img
      src={table} alt="table Icon"
      style={{
        width: 750,
        height: 500,
        position: "absolute",
        left: "280px",
        top: "0px",
        objectFit: "cover",
      }}
    />    
    
    </p>
  </div>
  <div style={{ width: "580.68px", height: "90.73px" }}>
    
  </div>
  <div style={{ width: 1280, height: 120 }}>
    <div
      style={{
        width: 1280,
        height: 120,
        position: "absolute",
        left: "-0.5px",
        top: "-0.5px",
        background: "#a750ff",
      }}
    />
    <img
      src={SoftwareIcon} alt="Software Icon"
      style={{
        width: 124,
        height: 119,
        position: "absolute",
        left: "-0.5px",
        top: "0.5px",
        objectFit: "cover",
      }}
    />
    <p
      style={{
        width: 448,
        height: 48,
        position: "absolute",
        left: 120,
        top: -20,
        fontSize: 50,
        fontWeight: 900,
        textAlign: "center",
        color: "rgba(255,255,255,0.95)",
      }}
    >
      문제 추천 AI 시스템
    </p>
    <p
      style={{
        width: 363,
        height: 63,
        position: "absolute",
        left: 900,
        top: -20,
        fontSize: 50,
        fontWeight: 600,
        textAlign: "center",
        color: "#fff",
      }}
    >
      계정 / 로그아웃
    </p>
  </div>
</div>

);
}