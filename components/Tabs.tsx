import React, { useContext, useState } from "react";
import { Box, Slider, Tab, Modal } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { BasketContext } from "@/context/BasketContext";
import {IoCloseOutline} from "react-icons/io5"



type Props = {};

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 366,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Tabs = (props: Props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const [value1, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value1}>
      <Box
       sx={{ marginTop: 4 , display:"flex" , justifyContent:"center", alignItems:"center" }} >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          TabIndicatorProps={{
            style: { background: "#343131"  },
          }}
          sx={{
            "& button.Mui-selected": { color: "#343131" },
          }}
        >
          <Tab
            label="beije Ped"
            value="1"
            sx={{
              color: "#00000099",
              textTransform: "none",
              fontWeight: "700",
            }}
            className="w-[114px] lg:min-w-[160px]"
          />
          <Tab
            label="beije Günlük Ped"
            value="2"
            sx={{
              color: "#00000099",
              textTransform: "none",
             
              fontWeight: "700",
            }}
            className="w-[114px] lg:min-w-[160px] "
          />
          <Tab
            label="beije Tampon"
            value="3"
            sx={{
              color: "#00000099",
              textTransform: "none",
              
              fontWeight: "700",
            }}
            className="w-[114px] lg:min-w-[160px]"
          />
        </TabList>
      </Box>
      <TabPanel value="1">
        <label className="block my-2  font-medium text-gray-900">
          Standart Ped
        </label>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={60}
          valueLabelDisplay="auto"
          value={standartPed}
          onChange={(e) => setStandartPed((e.target as HTMLInputElement).value)}
          sx={{ color: "#343131" }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>60</span>
        </div>
        <label className="block my-2  font-medium text-gray-900">
          Süper Ped
        </label>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={60}
          valueLabelDisplay="auto"
          value={superPed}
          onChange={(e) => setSuperPed((e.target as HTMLInputElement).value)}
          sx={{ color: "#343131" }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>60</span>
        </div>
        <label className="block my-2  font-semibold text-gray-900 ">
          Süper+ Ped
        </label>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={60}
          valueLabelDisplay="auto"
          value={superPlusPed}
          onChange={(e) =>
            setSuperPlusPed((e.target as HTMLInputElement).value)
          }
          sx={{ color: "#343131" }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>60</span>
        </div>
      </TabPanel>
      <TabPanel value="2">
        <label className="block my-2  font-semibold text-gray-900 ">
          Günlük Ped
        </label>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
          value={dailyPed}
          onChange={(e) => setDailyPed((e.target as HTMLInputElement).value)}
          sx={{ color: "#343131" }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>60</span>
        </div>
        <label className="block my-2  font-semibold text-gray-900 ">
          Süper Günlük Ped
        </label>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
          value={superDailyPed}
          onChange={(e) =>
            setSuperDailyPed((e.target as HTMLInputElement).value)
          }
          sx={{ color: "#343131" }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>60</span>
        </div>
      </TabPanel>
      <TabPanel value="3">
        <label className="block my-2  font-medium text-gray-900">
          Mini Tampon
        </label>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={60}
          valueLabelDisplay="auto"
          value={miniTampon}
          onChange={(e) => setMiniTampon((e.target as HTMLInputElement).value)}
          sx={{ color: "#343131" }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>60</span>
        </div>
        <label className="block my-2  font-medium text-gray-900">
          Standart Tampon
        </label>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          step={10}
          marks
          min={0}
          max={60}
          valueLabelDisplay="auto"
          value={standartTampon}
          onChange={(e) =>
            setStandartTampon((e.target as HTMLInputElement).value)
          }
          sx={{ color: "#343131" }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>60</span>
        </div>
      </TabPanel> 
        <button className="p-4 bg-[#262626] rounded-full text-white font-bold visible md:hidden  " onClick={handleOpen}>Paketini Gör</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="md:hidden"
      >
        <Box sx={style}>
        <div className="bg-white rounded-2xl h-auto   w-[300px]  flex flex-col ">
          <div className="flex flex-row items-end  justify-between mb-6 " >

          <text className="text-2xl font-semibold ">Özel Paketin</text>
          <IoCloseOutline onClick={handleClose} />
          </div>
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
              {standartPed ? <span className="text-[#00000099]" >{standartPed} Standart Ped</span> : ""}
              {superPed ? <span className="text-[#00000099]">,{superPed} Super Ped</span> : ""}
              {superPlusPed ? <span className="text-[#00000099]"> ve {superPlusPed} Süper+ Ped</span> : ""}
              </p>
              
              <button className="font-semibold text-sm text-left my-3 text-[#343131]" onClick={()=>{setStandartPed(0); setSuperPed(0); setSuperPlusPed(0) } } >Paketten Çıkar</button>
            </div>
          ) : (
            ""
          )}
          {dailyPed || superDailyPed  ? (
            <div className="bg-white p-4 shadow-md my-4 flex-col flex  ">
              <p className="font-semibold text-lg">Günlük Ped Paketleri</p>
              <p>
              {dailyPed ? <span className="text-[#00000099]" >{dailyPed} Standart Ped</span> : ""}
              {superDailyPed ? <span className="text-[#00000099]"> ve {superDailyPed} Super Ped</span> : ""}
              </p>
              <button className="font-semibold text-sm text-left my-3 text-[#343131]" onClick={()=>{setDailyPed(0); setSuperDailyPed(0)} } >Paketten Çıkar</button>
            </div>
          ) : (
            ""
          )}
          {miniTampon || standartTampon  ? (
            <div className="bg-white p-4 shadow-md my-4 flex-col flex  ">
              <p className="font-semibold text-lg">Tampon Paketleri</p>
              <p>
              {miniTampon ? <span className="text-[#00000099]" >{miniTampon} Standart Ped</span> : ""}
              {standartTampon ? <span className="text-[#00000099]"> ve {standartTampon} Super Ped</span> : ""}
              </p>
              <button className="font-semibold text-sm text-left my-3 text-[#343131]" onClick={()=>{setMiniTampon(0); setStandartTampon(0)} } >Paketten Çıkar</button>
            </div>
          ) : (
            ""
          )}

          <button disabled={basket===0} className="bg-[#262626] text-white rounded-xl p-2 font-semibold mt-4 disabled:bg-gray-200 disabled:text-gray-300 " onClick={handleOpen}  >
            Sepete Ekle (₺{basket})
          </button>
          </div>
        </Box>
      </Modal>
    </TabContext>

  );
};

export default Tabs;
