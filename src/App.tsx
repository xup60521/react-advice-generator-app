import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "./utils";
import DesktopDivider from "@/assets/images/pattern-divider-desktop.svg";
import MobileDivider from "@/assets/images/pattern-divider-mobile.svg";
import DiceIcon from "@/assets/images/icon-dice.svg";
import "./App.css"

export default function App() {
    const { data, refetch } = useQuery({
        queryKey: ["get_advice"],
        queryFn: getAdvice,
    });
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-c_Dark_Blue p-4">
            <div className="rounded-2xl bg-c_Dark_Grayish_Blue text-white flex flex-col items-center lg:p-12 py-10 px-4 lg:w-[30rem]">
                <p className="font-manrope text-xs text-c_Neon_Green font-bold tracking-[0.25rem] text-center w-full">
                    ADVICE <span>#</span>
                    {data?.slip.id}
                </p>
                <h3 className="lg:text-2xl text-xl font-black text-white font-manrope text-center py-5">
                    {`"`}
                    {data?.slip.advice}
                    {`"`}
                </h3>
                <img
                    src={DesktopDivider}
                    alt="desktop divider"
                    className="lg:block hidden pt-2"
                />
                <img
                    src={MobileDivider}
                    alt="mobile divier"
                    className="lg:hidden pt-2 pb-2"
                />
            </div>
            <button onMouseDown={()=>refetch()} id="refetch_advice" className="size-12 bg-c_Neon_Green rounded-full flex items-center justify-center transition -translate-y-[50%]">
                <span className="sr-only">new advide</span>
                <img src={DiceIcon} alt="dice icon" className="size-5" />
            </button>
        </main>
    );
}
