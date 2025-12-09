import React from "react";

const Location: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>찾아오시는 길</h2>

      <p style={{ marginBottom: "5px", fontSize: "16px" }}>
        📍 부산시 강서구 에코델타 스마트로 1길 51
      </p>
      <p style={{ marginBottom: "25px", fontSize: "14px", color: "#666" }}>
        ※ 네이버 플레이스 등록 후 지도 연동 예정
      </p>

      {/* 회색 박스 (지도 자리 placeholder) */}
      <div
        style={{
          width: "100%",
          height: "400px",
          background: "#d9d9d9",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "#666",
        }}
      >
        지도가 여기에 표시될 예정
      </div>
    </div>
  );
};

export default Location;
