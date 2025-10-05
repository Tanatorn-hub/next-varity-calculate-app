"use client"; //คือการกำหนดให้ไฟล์นี้เป็น Client Component

import Image from "next/image";
import calculator from "../assets/images/calculator.png";
import Footer from "@/components/Footer";
import { useState } from "react";
import { handler } from "next/dist/build/templates/app-page";

export default function HomePage() {
  //สร้างตัวแปร state สำหรับเก็บค่ารหัสที่ผู้ใช้ป้อนเข้ามา
  const [ucode, setUcode] = useState("");

  const handleAccessWebClick = () => {
    //validateว่าผู้ใช้ป้อนรหัสถูกต้องหรือไม่
    if (ucode == "") {
      alert("กรุณาป้อนรหัสเข้าใช้งาน");
      return;
    }
    if (ucode.toLowerCase() === "sau") {
      //เปิดไป component  page /menu
      window.location.href = "/menu";
    } else {
      alert("รหัสไม่ถูกต้อง");
    }
  };

  return (
    <>
      <div className="w-8/12 border border-gray-500 mx-auto mt-20 p-20 flex flex-col  mb-10 items-center rounded-2xl shadow-2xl">
        <Image src={calculator} alt="Calculator" width={200} />
        <h1 className="text-3xl text-green-800 font-bold mt-5">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-3xl text-green-800 mt-2 mb-5">โปรแกรมคำนวณ</h1>

        <div className="flex flex-col w-full">
          <label className="mb-2">
            ป้อนรหัสเข้าใช้งาน
            <span className=" text-orange-500">(ชื่อย่อ ม.เอเชีย)</span>
          </label>
          <input
            value={ucode}
            onChange={(e) => {
              setUcode(e.target.value);
            }} //อัพเดทค่ารหัสเมื่อผู้ใช้ป้อนข้อมูล
            type="text"
            className="border border-gray-400 rounded p-2 "
          />
        </div>
        <button
          type="button"
          onClick={handleAccessWebClick}
          className=" bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded  mt-5 w-full"
        >
          เข้าใช้งาน
        </button>
      </div>

      <Footer />
    </>
  );
}
