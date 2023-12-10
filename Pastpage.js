import React from 'react';
import SoftwareIcon from './assets/软件图标.png';
import select from './assets/三角.png';
import selectoption from './assets/selectoption.png';

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
      <span
        style={{
          width: 1280,
          height: 80,
          fontSize: 70,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        기업
      </span>
      <span
        style={{
          width: 1280,
          height: 80,
          fontSize: 70,
          fontWeight: 300,
          textAlign: "center",
          color: "#000",
        }}
      >
        을 선택해주세요
      </span>
    </p>
  </div>
  <div style={{ width: "580.68px", height: "90.73px" }}>
    <div
      style={{
        width: "580.68px",
        height: "90.73px",
        position: "absolute",
        left: "334.5px",
        top: "248.5px",
        borderRadius: 10,
        background: "#fff",
        borderWidth: 3,
        borderColor: "rgba(0,0,0,0.4)",
      }}
    />


      
    <img
      src={selectoption} alt="selectoption Icon"
      style={{
        width: 580,
        height: "90.73px",
        position: "absolute",
        left: "336px",
        top: "250px",
        objectFit: "cover",
      }}
    />
    
    
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