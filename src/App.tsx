import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [active, setActive] = useState(true);
  const [isMonthly, setIsMonthly] = useState(true);
  const monthly = [
    { price: 5, storage: "8GB" },
    { price: 10, storage: "80GB" },
    { price: 25, storage: "$410GB" }
  ];

  const yearly = [
    { price: 48, storage: "100GB" },
    { price: 80, storage: "1TB" },
    { price: 180, storage: "5TB" }
  ];

  const total = useRef(5);

  const [isSelect, setIsSelect] = useState(0);
  const handleSelect = (index: number) => {
    setIsSelect(index);
    calculateTotal(index);
  };

  const handleMonthly = (val: boolean) => {
    setIsMonthly(val);
    if (val) {
      total.current = monthly[isSelect].price;
    } else {
      total.current = yearly[isSelect].price;
    }
  };

  const calculateTotal = (index: number) => {
    if (isMonthly) {
      total.current = monthly[index].price;
    } else {
      total.current = yearly[index].price;
    }
  };


  return (
    <>
      <div className={"w-full h-screen flex flex-col items-center justify-center text-[1rem] gap-y-2 " + (!active ? "bg-[#7b7b7b]" : "bg-[#c7c7c7]")}>
        <div className="max-lg:w-[80%] max-xl:w-[70%] max-md:w-[70%] max-sm:w-[97%] w-3/5 flex flex-row items-center justify-start">
            <button 
              onClick={() => setActive(!active)}
              className={"outline-none cursor-pointer relative w-[4rem] h-[2rem] flex flex-row items-center justify-between rounded-full inset-ring-1 " + (active ? "bg-[#fdfdfb] inset-ring-[#d4d3d3]" : "bg-[#0e0e0e] inset-ring-[#404040]")}>
              <span className="flex flex-row items-center justify-center p-2 rounded-full">
                {!active ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-sun"
                    viewBox="0 0 24 24" 
                    fill="#aeaeb6"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                  :
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-back-sun"
                    viewBox="0 0 24 24" 
                    fill="#696871"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                }
              </span>
              <span className="flex flex-row items-center justify-center p-2 rounded-full">
                {!active ?
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-moon"
                    viewBox="0 0 24 24" 
                    fill="white"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                :
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-back-moon"
                    viewBox="0 0 24 24" 
                    fill="currentColor"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>
                }
              </span>
              <span
                className={"outline-none absolute text-transparent bg-[#aeaeb634] flex flex-row items-center justify-center p-[0.97rem] rounded-full inset-ring-1" + (!active ? "  transition-change inset-ring-[#404040]" : " inset-ring-[#d4d3d3] transition-change-back")}
              >
              </span>
            </button>
        </div>
        <div className={"max-lg:w-[80%] max-xl:w-[70%] max-md:w-[70%] max-sm:w-[97%] w-3/5 flex max-md:flex-col flex-row items-center justify-between text-nowrap rounded-3xl gap-y-1 " + (!active ? "bg-[#171717]" : "bg-white")}>
          <div className={"max-md:w-full max-md:border-r-0 max-md:border-b-1 max-md:border- w-3/5 p-4 flex flex-col items-center justify-center gap-y-5 border-r-1 " + (!active ? "border-[#404040]" : "border-[#d4d3d3] ")}>
            <div className="w-full flex flex-row items-end justify-between">
                <h1 className={"font-[500] text-lg " + (!active ? "text-white" : "text-black")}>Choose storage plan</h1>
                <div className={"relative w-2/6 cursor-pointer flex flex-row justify-center items-center text-[0.82rem] font-[550] rounded-md p-1 " + (!active ? "bg-[#262626]" : "bg-[#f7f7f7]")}>
                  <div className={"absolute z-10 w-full flex flex-row items-center justify-between " + (!active ? "text-[#939393]" : "text-[#717171]")}>
                    <span onClick={() => handleMonthly(true)} className="w-1/2 flex flex-row items-center justify-center">Monthly</span>
                    <span onClick={() => handleMonthly(false)} className="w-1/2 flex flex-row items-center justify-center">Yearly</span>
                  </div>
                  <div className="w-full flex flex-row items-center">
                    <span className={"w-1/2 p-[0.15rem] h-full rounded-md flex flex-row items-center justify-center text-transparent " + (isMonthly ? "monthly " : "yearly ") + (!active ? "bg-black" : "bg-white")}>Text</span>
                  </div>
                </div>
            </div>
            <div className="relative w-full flex flex-col items-center">
              <div className="w-full flex flex-col items-center justify-between gap-y-3">
                <button onClick={() => handleSelect(0)} className={"outline-none w-full flex flex-row items-center justify-between rounded-xl p-3 inset-ring-1 " + (!active ? "inset-ring-[#404040]" : " inset-ring-[#ededed]")}>
                  <div className="flex flex-row items-center justify-between gap-x-4">
                    <span className={"rounded-full w-4 h-4 " + (!active ? (isSelect == 0 ? " border-4 border-[#325cfe]" : "border-2 border-[#404040]") : (isSelect == 0 ? " border-4 border-[#325cfe]" : "border-2 border-[#ededed]"))}></span>
                    <div className="flex flex-col items-start justify-start font-[500] text-[0.82rem]">
                      <h1 className={"flex flex-row items-center gap-x-1 " + (!active ? "text-white" : "text-black")}>
                        {isMonthly ? monthly[0].storage : yearly[0].storage} Storage
                        <span className={"text-[0.82rem] font-[550] rounded-full px-2 " + (!active ? "bg-[#262626] text-[#939393]" : "bg-[#f7f7f7] text-[#717171]")}>current</span> 
                      </h1>
                      <span className={(!active ? "text-[#939393]" : "text-[#717171]")}>Basic file storage</span>
                    </div>
                  </div>
                  <span className={"text-[0.82rem] font-[550] " + (!active ? "text-[#939393]" : "text-[#717171]")}>${isMonthly ? monthly[0].price + " per month" : yearly[0].price + " per year"}</span>
                </button>
                <button onClick={() => handleSelect(1)} className={"outline-none w-full flex flex-row items-center justify-between rounded-xl p-3 inset-ring-1 " + (!active ? "inset-ring-[#404040]" : " inset-ring-[#ededed]")}>
                  <div className="flex flex-row items-center justify-between gap-x-4">
                    <span className={"rounded-full w-4 h-4 "+ (!active ? (isSelect == 1 ? " border-4 border-[#325cfe]" : "border-2 border-[#404040]") : (isSelect == 1 ? " border-4 border-[#325cfe]" : "border-2 border-[#ededed]"))}></span>
                    <div className="flex flex-col items-start justify-start font-[500] text-[0.82rem]">
                      <h1 className={"flex flex-row items-center gap-x-1 " + (!active ? "text-white" : "text-black")}>
                        {isMonthly ? monthly[1].storage : yearly[1].storage} Storage
                        <span className={"flex flex-row items-center justify-center gap-x-1 text-[0.82rem] font-[550] rounded-full pl-1 pr-2 " + (active ? "bg-[#325bfe16] text-[#335df8]" : "bg-[#526fbe62] text-[#526fbe]")}>
                          <svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#335df8" : "#526fbe"}><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                          Must Popular
                        </span> 
                      </h1>
                      <span className={(!active ? "text-[#939393]" : "text-[#717171]")}>Advanced file storage</span>
                    </div>
                  </div>
                  <span className={"text-[0.82rem] font-[550] " + (!active ? "text-[#939393]" : "text-[#717171]")}>${isMonthly ? monthly[1].price + " per month" : yearly[1].price + " per year"}</span>
                </button>
                <button onClick={() => handleSelect(2)} className={"outline-none w-full flex flex-row items-center justify-between rounded-xl p-3 inset-ring-1 " + (!active ? "bg-[#262626] inset-ring-[#404040]" : "bg-[#f7f7f7] inset-ring-[#ededed]")}>
                  <div className="flex flex-row items-center justify-between gap-x-4">
                    <span className={"rounded-full w-4 h-4 " + (!active ? (isSelect == 2 ? " border-4 border-[#325cfe]" : "border-2 border-[#404040]") : (isSelect == 2 ? " border-4 border-[#325cfe]" : "border-2 border-[#ededed]"))}></span>
                    <div className="flex flex-col items-start justify-start font-[500] text-[0.82rem]">
                      <h1 className={"flex flex-row items-center gap-x-1 " + (!active ? "text-white" : "text-black")}>
                        {isMonthly ? monthly[2].storage : yearly[2].storage} Storage
                        <span className={"text-[0.82rem] font-[550] " + (!active ? "text-[#787878]" : "text-[#bcbcbc]")}>(Business)</span> 
                      </h1>
                      <span className={(!active ? "text-[#939393]" : "text-[#717171]")}>Enterprise-grade storage</span>
                    </div>
                  </div>
                  <span className={"text-[0.82rem] font-[550] " + (!active ? "text-[#939393]" : "text-[#717171]")}>${isMonthly ? monthly[2].price + " per month" : yearly[2].price +  " per year"}</span>
                </button> 
              </div>
              <div
                style={{ top: `${isSelect * 35}%` }}
                className={"transition-pick absolute z-10 left-0 right-0 h-[30%] flex flex-row border-2 rounded-xl " + (!active ? "border-[#335df8]" : "border-[#335df8]")}>

              </div>
            </div>
          </div>
          <div className="max-md:w-full w-2/5 h-full p-4 flex flex-col justify-between space-y-3">
            <div className="w-full flex flex-col items-center justify-center gap-y-4">
              <div className="w-full flex flex-row items-center justify-start">
                <h1 className={"font-[500] text-lg " + (!active ? "text-white" : "text-black")}>Summury</h1>
              </div>
              <div className={"w-full flex flex-col items-center gap-y-3 text-[0.82rem] pb-5 font-[550] border-b-1 " + (!active ? "border-[#404040]" : "border-[#d4d3d3] ")}>
                <div className={"w-full flex flex-row items-center justify-between text-[0.82rem] font-[550] " + (!active ? "text-[#767676]" : "text-[#a9a9a9]")}>
                  <span>Current plan</span>
                  <span>$10 per month</span>
                </div>
                <div className={"w-full flex flex-row items-center justify-between text-[0.82rem] font-[550] " + (!active ? "text-[#939393]" : "text-[#717171]")}>
                  <span>New plan</span>
                  <span>${isMonthly ? monthly[isSelect].price + " per month" : yearly[isSelect].price +  " per year"}</span>
                </div>
              </div>
              <div className={"w-full flex flex-row items-center justify-between text-[0.82rem] font-[550] " + (!active ? "text-[#939393]" : "text-[#717171]")}>
                  <span>Total</span>
                  <span>${isMonthly ? total.current + " per month" : total.current + " per year"}</span>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-end gap-x-2">
              <button className={"font-[500] text-[0.82rem] rounded-xl py-2 px-3 inset-ring-1 " + (!active ? "inset-ring-[#404040] text-[#939393]" : " inset-ring-[#ededed] text-[#717171]")}>
                Cancel
              </button>
              <button className="font-[500] text-[0.82rem] text-white bg-[#325cfe] rounded-xl py-2 px-3 ">
                Change plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
