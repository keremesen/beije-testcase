import React, { createContext, useEffect, useState } from "react";

export const BasketContext = createContext<any>({});

type Props = {
  children: JSX.Element;
};

export const BasketProvider: React.FC<Props> = ({ children }) => {
  const [standartPed, setStandartPed] = useState(0);
  const [superPed, setSuperPed] = useState(0);
  const [superPlusPed, setSuperPlusPed] = useState(0);
  const [dailyPed, setDailyPed] = useState(0);
  const [superDailyPed, setSuperDailyPed] = useState(0);
  const [miniTampon, setMiniTampon] = useState(0);
  const [standartTampon, setStandartTampon] = useState(0);

  const [basket, setBasket] = useState(0);

  useEffect(() => {
    setBasket(standartPed * 3 + superPed * 3.3 + superPlusPed * 3.7 + dailyPed * 1.9 + superDailyPed * 2 + miniTampon * 3.3 + standartTampon * 3.7 );
  }, [
    standartPed,
    superPed,
    superPlusPed,
    dailyPed,
    superDailyPed,
    miniTampon,
    standartTampon,
  ]);

  return (
    <BasketContext.Provider
      value={{
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
        setStandartTampon
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
