import { NextFont } from "next/dist/compiled/@next/font";

type TitleFont = {
    font: NextFont
}
export const Title = ({font}: TitleFont) => {
    return (
        <div className="sm:max-w-[370px] sm:p-6 md:max-w-[650px] 2xl:p-8 max-w-[1280px] mx-auto">
            <h1
                className={`sm:max-w-[320px] sm:p-6 md:max-w-[550px] md:text-[40px] max-w-[670px] absolute border-2 top-[25%] text-7xl mt-16 p-10 uppercase text-[#fff] font-light ${font.className}`}
            >
                Immersive experiences that deliver
            </h1>
        </div>
    );

}