import React from "react";
import styled from "@emotion/styled";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  width: 85%;
  max-width: 350px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
`;

const CallButton = styled.a`
  display: block;
  background: #222;
  color: white;
  padding: 14px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  text-decoration: none;
`;

const CancelButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  font-size: 18px;
  background: #e5e5e5;
  border: none;
`;

const InquiryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox>
        <CallButton href="tel:01077405821">Call 010-7252-5821</CallButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalBox>
    </Overlay>
  );
};

export default InquiryModal;
