"use client";

import Image from "next/image";
import calculator from "../../assets/images/calculator.png";
import money from "../../assets/images/money.png";
import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  //สร้างตัวแปร state ทำงานกับ เงิน คน และเงินที่จะแชร์กัน
  const [moneyInput, setMoneyInput] = useState("");
  const [peoson, setPerson] = useState("");
  const [moneyShare, setMoneyShare] = useState("0.00");

  //ฟังก์ชันคำนวณเงิน
  const handleCalClick = () => {
    //validate input
    if (moneyInput == "" || peoson == "" || peoson == "0") {
      alert("กรุณาป้อนจำนวนเงินและคนก่อนคำนวณ และต้องไม่เป็น 0");
      return;
    }

    //ตรวจสอบว่า input เป็นตัวเลขหรือไม่
    if (isNaN(Number(moneyInput)) || isNaN(Number(peoson))) {
      alert("กรุณาป้อนจำนวนเงินและจำนวนคนเป็นตัวเลขเท่านั้น");
      return;
    }

    //คํานวณ
    const result = parseFloat(moneyInput) / parseInt(peoson);
    setMoneyShare(result.toFixed(2));
  };

  //ฟังก์ชันล้างข้อมูล
  const handleCancelClick = () => {
    setMoneyInput("");
    setPerson("");
    setMoneyShare("0.00");
  };

  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 p-20 flex flex-col  mb-10 items-center rounded-2xl shadow-2xl">
        <Image src={calculator} alt="Calculator" width={100} />

        <h1 className="text-lg text-green-800 font-bold mt-5">
          Varity Calculator V.1.0
        </h1>

        <h1 className="text-lg text-green-800 mt-1 mb-5">โปรแกรมคำนวณ</h1>

        <div className="w-full border border-gray-300  flex flex-col items-center p-5 rounded-xl ">
          <Image src={money} alt="Money" width={50} />
          <h1 className="text-lg text-green-800 mt-1 mb-5">แชร์เงินกันเถอะ</h1>
          <div className="w-full flex flex-col mb-2">
            <label className="mb-1">ป้อนเงิน (บาท)</label>
            <input
              value={moneyInput}
              onChange={(e) => setMoneyInput(e.target.value)}
              type="text"
              className="border border-gray-300 rounded p-2 "
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-1">ป้อนคน</label>
            <input
              value={peoson}
              onChange={(e) => setPerson(e.target.value)}
              type="text"
              className="border border-gray-300 rounded p-2  "
            />
          </div>
          <button
            onClick={handleCalClick}
            className="w-full text-lg text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded text-center mt-5 cursor-pointer"
          >
            คํานวณ
          </button>

          <button
            onClick={handleCancelClick}
            className="w-full text-lg text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded text-center mt-5 cursor-pointer"
          >
            ยกเลิก
          </button>

          <div className="w-full flex  mt-5 justify-center text-center ">
            <span>หารกันคนละ</span>
            <span className="font-bold text-3xl text-red-600 mx-10">
              {moneyShare}
            </span>
            <span>บาท</span>
          </div>
        </div>
        <Link href="/menu" className="text-green-800 mt-5">
          กลับไปหน้าเมนู
        </Link>
      </div>
      <Footer />
    </>
  );
}
