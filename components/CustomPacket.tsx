import React, { useContext } from "react";
import Tabs from "@/components/Tabs";
import { BasketContext } from "@/context/BasketContext";

type Props = {};

const CustomPacket = (props: Props) => {
  const {
    basket,
    standartPed,
    setStandartPed,
    superPed,
    setSuperPed,
    superPlusPed,
    setSuperPlusPed,
    dailyPed,
    setDailyPed,
    superDailyPed,
    setSuperDailyPed,
    miniTampon,
    setMiniTampon,
    standartTampon,
    setStandartTampon,
  } = useContext(BasketContext);

  return (
    <div className="bg-[#F9F5F2] flex w-full h-auto py-10 items-center justify-center  ">
      <div className="flex flex-row  w-5/6  justify-between">
        <div className="flex flex-col w-full md:w-1/2 mr-8">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-semibold text-3xl">Kendi Paketini Oluştur</h1>
            <a href="#">Nasıl Çalışır?</a>
          </div>
          <text className="text-lg text-[#656362] my-6 ">
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </text>
        <Tabs />
        </div>
        <div className="bg-white rounded-2xl h-auto p-8  w-[444px]   flex-col hidden md:flex ">
          <text className="text-2xl font-semibold mb-6">Özel Paketin</text>
          <div className="w-full  h-12 bg-white shadow-md rounded-lg text-center mb-6 items-center flex px-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              stroke-width="1"
            >
              <path
                d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3"
                stroke="#343131"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <text className="ml-4">2 ayda 1 gönderim</text>
          </div>
          <img
            src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=640&q=75"
            alt="beije"
          />
          {standartPed || superPed || superPlusPed ? (
            <div className="bg-white p-4 shadow-md my-4   ">
              <p className="font-semibold text-lg">Ped Paketleri</p>
              <p>
                {standartPed ? (
                  <span className="text-[#00000099]">
                    {standartPed} Standart Ped
                  </span>
                ) : (
                  ""
                )}
                {superPed ? (
                  <span className="text-[#00000099]">
                    ,{superPed} Super Ped
                  </span>
                ) : (
                  ""
                )}
                {superPlusPed ? (
                  <span className="text-[#00000099]">
                    {" "}
                    ve {superPlusPed} Süper+ Ped
                  </span>
                ) : (
                  ""
                )}
              </p>

              <button
                className="font-semibold text-sm text-left my-3 text-[#343131]"
                onClick={() => {
                  setStandartPed(0);
                  setSuperPed(0);
                  setSuperPlusPed(0);
                }}
              >
                Paketten Çıkar
              </button>
            </div>
          ) : (
            ""
          )}
          {dailyPed || superDailyPed ? (
            <div className="bg-white p-4 shadow-md my-4 flex-col flex  ">
              <p className="font-semibold text-lg">Günlük Ped Paketleri</p>
              <p>
                {dailyPed ? (
                  <span className="text-[#00000099]">
                    {dailyPed} Standart Ped
                  </span>
                ) : (
                  ""
                )}
                {superDailyPed ? (
                  <span className="text-[#00000099]">
                    {" "}
                    ve {superDailyPed} Super Ped
                  </span>
                ) : (
                  ""
                )}
              </p>
              <button
                className="font-semibold text-sm text-left my-3 text-[#343131]"
                onClick={() => {
                  setDailyPed(0);
                  setSuperDailyPed(0);
                }}
              >
                Paketten Çıkar
              </button>
            </div>
          ) : (
            ""
          )}
          {miniTampon || standartTampon ? (
            <div className="bg-white p-4 shadow-md my-4 flex-col flex  ">
              <p className="font-semibold text-lg">Tampon Paketleri</p>
              <p>
                {miniTampon ? (
                  <span className="text-[#00000099]">
                    {miniTampon} Standart Ped
                  </span>
                ) : (
                  ""
                )}
                {standartTampon ? (
                  <span className="text-[#00000099]">
                    {" "}
                    ve {standartTampon} Super Ped
                  </span>
                ) : (
                  ""
                )}
              </p>
              <button
                className="font-semibold text-sm text-left my-3 text-[#343131]"
                onClick={() => {
                  setMiniTampon(0);
                  setStandartTampon(0);
                }}
              >
                Paketten Çıkar
              </button>
            </div>
          ) : (
            ""
          )}

          <button className="bg-[#262626] text-white rounded-xl p-2 font-semibold mt-4 ">
            Sepete Ekle (₺{basket})
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPacket;
