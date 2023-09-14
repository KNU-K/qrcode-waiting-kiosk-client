// m_redirect 필요
import { useEffect, useState } from "react";
import "./menu.css";
import QRGenerator from "./QR-Generator";
import React from "react";
function Menu() {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isPay, setIsPay] = useState(false);
  const menuItems = [
    { productName: "1000원권", productPrice: 1000 },
    { productName: "3500원권", productPrice: 3500 },
    { productName: "4000원권", productPrice: 4000 },
    { productName: "4500원권", productPrice: 4500 },
    { productName: "5000원권", productPrice: 5000 },
    { productName: "5500원권", productPrice: 5500 },
    { productName: "6000원권", productPrice: 6000 },
    { productName: "6500원권", productPrice: 6500 },
    { productName: "7000원권", productPrice: 7000 },
  ];
  const selectMenu = (menuItem) => {
    setSelected(true);
    setSelectedItem(menuItem);
    document.querySelector(
      ".select-menu"
    ).innerHTML = `${menuItem.productName}을 선택하셨습니다.`;
  };

  const onClickPayment = () => {
    if (selected === false) {
      alert("선택해주세요");
      return;
    }
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp71711184");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: selectedItem.productPrice, // 결제금액
      name: selectedItem.productName, // 주문명
      buyer_name: "test", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
      m_redirect_url: "https://192.168.45.61:8002/api/auth/mobile-register",
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  const callback = async (response) => {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      setIsPay(true);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <>
      <div className="menu-container">
        {menuItems.map((menuItem, index) => (
          <div
            onClick={() => selectMenu(menuItem)}
            key={index}
            className="menu-item"
          >
            <p>{menuItem.productName}</p>
          </div>
        ))}
        <h1 className="select-menu"></h1>
        <br />
        <br />
      </div>
      <button onClick={onClickPayment}>구매</button>

      {isPay ? (
        <div className="QR-container">
          <QRGenerator></QRGenerator>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Menu;
