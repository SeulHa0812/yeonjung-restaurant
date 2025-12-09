import React, { useState } from "react";
import InquiryModal from "./InquiryModal";

const Navbar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav
        style={{
          width: "100%",
          padding: "16px 30px",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* 왼쪽 로고 */}
        <div style={{ fontWeight: "bold", fontSize: "18px", marginLeft: "20px" }}>
          <a
            href="#home"
            style={{
              fontSize: "18px",
              marginLeft: "20px",
              textDecoration: "none",
              color: "#000",
              cursor: "pointer"
            }}
          >
            연정 한식뷔페
          </a>
        </div>

        {/* 가운데 메뉴 */}
        <div
          style={{
            display: "flex",
            gap: "100px",
            alignItems: "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <a
            href="#home"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            홈
          </a>
          <a
            href="#gallery"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            갤러리
          </a>
          <a
            href="#location"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            찾아오시는 길
          </a>
        </div>

        {/* 문의하기 버튼 */}
        <button
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "16px",
            marginRight: "20px"
          }}
          onClick={() => setOpenModal(true)}
        >
          문의하기
        </button>
      </nav>

      {/* 모달 */}
      <InquiryModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Navbar;
