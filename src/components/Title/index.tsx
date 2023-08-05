import { NextFont } from "next/dist/compiled/@next/font";

type TitleFont = {
    font: NextFont
}
export const Title = ({font}: TitleFont) => {
    return (
        <div className="md:max-w-[360px] max-w-[1280px] mx-auto">
            <h1
                className={`md:max-w-[360px] md:text-[40px] max-w-[670px] absolute border-2 top-[25%] text-7xl mt-16 p-10 uppercase text-[#fff] font-light ${font.className}`}
            >
                Immersive experiences that deliver
            </h1>
        </div>
    );

}