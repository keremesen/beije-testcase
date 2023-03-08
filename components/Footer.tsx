import { Divider, TextField } from "@mui/material";
import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedin,
  GrSpotify,
  GrTwitter,
} from "react-icons/gr";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex w-full h-auto bg-[#262626] py-10 justify-center items-center ">
      <div className="flex flex-col w-5/6 ">
        <div className="flex max-md:flex-col max-md:items-center justify-between text-white text-lg mb-6">
          <div className="flex flex-col md:w-1/3 space-y-4">
            <text className="text-2xl font-semibold">beije.</text>
            <p className="flex flex-col">
              <text className="text-[#BBBB] font-semibold ">
                Arayı açmayalım!
              </text>
              <text className="text-[#BBBB] text-base ">
                Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
              </text>
            </p>
            <div className="flex flex-row">
              <TextField
                id="outlined-basic"
                label="e-mail adresin"
                variant="outlined"
                placeholder="halide.edip@adivar.com"
                size="small"
                sx={{
                  "& label.Mui-focused": {
                    color: "#BBBB",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#BBBB",
                    },
                    "&:hover fieldset": {
                      borderColor: "#BBBB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#BBBB",
                      borderWidth: "1px",
                    },
                    "& label.Mui-focused": {
                      color: "white",
                    },
                  },
                  "& label": {
                    color: "#BBBB",
                  },
                  input: {
                    "&::placeholder": {
                      color: "#BBBB",
                    },
                    color: "#BBBB",
                  },
                  width: "75%",
                }}
              />
              <button className="bg-white  rounded-full w-24 h-12 text-black font-semibold hover:bg-[#262626] ml-4 shadow-md shadow-black">
                Gönder
              </button>
            </div>
            <text className="text-[#BBBB] text-base ">
              Abone olarak, beije KVKK ve Gizlilik Politikası{"'"}nı kabul
              ediyor ve beije{"'"}den haber almayı onaylıyorum.
            </text>
          </div>
          <div className="max-md:flex-row max-md:mt-8 max-md:space-x-8 md:space-x-24 lg:space-x-36  flex ">

          <div className="flex flex-col space-y-4 ">
            <text>Paketler</text>
            <text>Deneme Paketi</text>
            <text>Ekibimize Katıl</text>
          </div>
          <div className="flex flex-col  space-y-4">
            <text>Blog</text>
            <text>Sıkça Sorulan Sorular</text>
            <text>Biz Kimiz?</text>
          </div>
          </div>
          <div className="flex flex-col max-md:flex-row max-md:space-x-12 max-md:mt-12  space-y-4">
            <a className="flex flex-row items-center space-x-2" href="#">
              <GrFacebookOption className="text-xl" />
              <text className="max-md:hidden" >Facebook</text>
            </a>
            <a className="flex flex-row items-center space-x-2" href="#">
              <GrInstagram className="text-xl" />
              <text className="max-md:hidden" >Instagram</text>
            </a>
            <a className="flex flex-row items-center space-x-2" href="#">
              <GrTwitter className="text-xl" />
              <text className="max-md:hidden" >Twitter</text>
            </a>
            <a className="flex flex-row items-center space-x-2" href="#">
              <GrLinkedin className="text-xl" />
              <text className="max-md:hidden" >Linkedin</text>
            </a>
            <a className="flex flex-row items-center space-x-2" href="#">
              <GrSpotify className="text-xl" />
              <text className="max-md:hidden" >Spotify</text>
            </a>
          </div>
        </div>
        <Divider variant="inset" className="bg-[#BBBB] my-8 " />
        <div className="flex flex-col md:flex-row items-center text-[#BBBB] justify-evenly ">
          <text>2023 beije. Tüm hakları saklıdır.</text>
          <a href="#">KVKK Aydınlatma Metni</a>
          <a href="#">Üyelik Sözleşmesi</a>
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Test Sonuçları</a>
          <div className="space-x-4 font-semibold">
            <button>EN</button>
            <text>|</text>
            <button>TR</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center my-12 space-x-2">
          <img
            src="https://beije.co/_next/static/media/Master.2bedc059.svg"
            width={48}
            height={48}
            alt="mastercard"
          />
          <img
            src="https://beije.co/_next/static/media/Visa.9f651691.svg"
            width={48}
            height={48}
            alt="visa"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
