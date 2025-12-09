const Info = () => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        연정 한식뷔페 안내
      </h2>

      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        📌 평일 아침/점심 8,000원
      </p>

      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        🍱 도시락 배달 가능
      </p>

      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        👥 단체 주문 환영 (사무실/공사 현장)
      </p>

      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        📍 부산시 강서구 에코델타 스마트로 1길 51
      </p>

      <p style={{ fontSize: "18px", marginBottom: "8px" }}>📞 010-7252-5821</p>
    </section>
  );
};

export default Info;
