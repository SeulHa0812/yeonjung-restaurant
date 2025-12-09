const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
        marginTop: "60px",
        textAlign: "center",
        color: "#555",
        borderTop: "1px solid #ddd",
      }}
    >
      <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#333" }}>
        연정 한식뷔페
      </h3>

      <p style={{ margin: "4px 0", fontSize: "15px" }}>
        📍 부산시 강서구 에코델타 스마트로 1길 51
      </p>

      <p style={{ margin: "4px 0", fontSize: "15px" }}>📞 010-7252-5821</p>

      <p style={{ margin: "4px 0", fontSize: "15px" }}>
        🕒 평일 아침/점심 8,000원 — 도시락 배달 가능 / 단체 주문 환영
      </p>

      <div
        style={{
          marginTop: "20px",
          fontSize: "13px",
          color: "#888",
        }}
      >
        © {new Date().getFullYear()} 연정 한식뷔페 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
