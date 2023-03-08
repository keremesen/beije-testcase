import React, { useState, useEffect } from "react";
import { SlBasket, SlUser } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-[#F5F5F5] flex items-center justify-center flex-col">
      <div className="w-3/4 lg:h-24 h-16 flex flex-row justify-between items-center ">
        <h1 className="text-[#CE7328] text-3xl ">beije.</h1>
        <ul className="lg:flex flex-row text-[#343131] space-x-7 hidden">
          <li className="text-xl">Ürünler</li>
          <li className="text-xl">Biz Kimiz</li>
          <li className="text-xl">Bağış Kültürü</li>
          <li className="text-xl">Blog</li>
          <li className="text-xl">Kendi Paketini Oluştur!</li>
        </ul>
        <div className="text-[#343131] flex flex-row  items-center space-x-5">
          <button>
            <SlBasket className="text-2xl " />
          </button>
          <button>
            <SlUser className="text-xl" />
          </button>
          <button onClick={() => setOpen((value) => !value)}>
            <AiOutlineMenu className="text-2xl lg:hidden flex" />
          </button>
        </div>
      </div>
      {open && (
        <div className="w-full py-10 px-6 lg:hidden flex">
          <ul className="text-xl  space-y-7 ">
            <li>Ürünler</li>
            <li>Biz Kimiz</li>
            <li>Bağış Kültürü</li>
            <li>Blog</li>
            <li>Kendi Paketini Oluştur! </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
