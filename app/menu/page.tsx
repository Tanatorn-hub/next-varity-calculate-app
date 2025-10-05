import Image from "next/image";
import calculator from "../../assets/images/calculator.png";
import Link from "next/link";
import money from "../../assets/images/money.png";
import bmi from "../../assets/images/bmi.png";
import bmr from "../../assets/images/bmr.png";
import shapes from "../../assets/images/shapes.png";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 p-20 flex flex-col  mb-10 items-center rounded-2xl shadow-2xl">
        <Image src={calculator} alt="Calculator" width={100} />
        <h1 className="text-xl text-green-800 font-bold mt-5">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-xl text-green-800 mt-2 mb-5">โปรแกรมคำนวณ</h1>
        <div className="w-full flex justify-center">
          <Link
            href="/moneyshare"
            className="text-xl text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl text-center mx-2.5"
          >
            <Image src={money} alt="Money" width={80} className="mx-auto" />
            แชร์เงินกันเถอะ
          </Link>

          <Link
            href="/bmi"
            className="text-xl text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl text-center mx-2.5"
          >
            <Image src={bmi} alt="Money" width={80} className="mx-auto" />
            BMI
          </Link>

          <Link
            href="/bmr"
            className="text-xl text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl text-center mx-2.5"
          >
            <Image src={bmr} alt="Money" width={80} className="mx-auto" />
            BMR
          </Link>
          <Link
            href="/shape"
            className="text-xl text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl text-center mx-2.5"
          >
            <Image src={shapes} alt="Money" width={80} className="mx-auto" />
            พื้นที่รูปทรง
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
