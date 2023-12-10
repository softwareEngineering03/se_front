import React from 'react';
import SoftwareIcon from './assets/软件图标.png';
import diff from './assets/diff.png';
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
        top: 145,
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
        난이도
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
        를 선택해주세요
      </span>
    </p>
  </div>
  <div style={{ width: "580.68px", height: "90.73px" }}>
    
    <img
      src={diff} alt="diff Icon"
      style={{
        width: 180,
        height: 100,
        position: "absolute",
        left: "80px",
        top: "450px",
        objectFit: "cover",
      }}
    />    

    <img
      src={diff} alt="diff Icon"
      style={{
        width: 180,
        height: 100,
        position: "absolute",
        left: "400px",
        top: "450px",
        objectFit: "cover",
      }}
    />  

<img
      src={diff} alt="diff Icon"
      style={{
        width: 180,
        height: 100,
        position: "absolute",
        left: "720px",
        top: "450px",
        objectFit: "cover",
      }}
    />  
    <img
      src={diff} alt="diff Icon"
      style={{
        width: 180,
        height: 100,
        position: "absolute",
        left: "1040px",
        top: "450px",
        objectFit: "cover",
      }}
    />  
    
  </div>

  <div>
  <p
      style={{
        width: 100,
        height: 75,
        position: "absolute",
        left: 120,
        top: 395,
        fontSize: 60,
        fontWeight: 600,
        textAlign: "center",
        color: "#fff",
      }}
    >
      1
    </p>
    <p
      style={{
        width: 100,
        height: 75,
        position: "absolute",
        left: 440,
        top: 395,
        fontSize: 60,
        fontWeight: 600,
        textAlign: "center",
        color: "#fff",
      }}
    >
      2
    </p>
    <p
      style={{
        width: 100,
        height: 75,
        position: "absolute",
        left: 760,
        top: 395,
        fontSize: 60,
        fontWeight: 600,
        textAlign: "center",
        color: "#fff",
      }}
    >
      3
    </p>
    <p
      style={{
        width: 100,
        height: 75,
        position: "absolute",
        left: 1080,
        top: 395,
        fontSize: 60,
        fontWeight: 600,
        textAlign: "center",
        color: "#fff",
      }}
    >
      4
    </p>
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