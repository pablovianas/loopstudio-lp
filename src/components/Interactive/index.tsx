import Image from "next/image"
import guyWearingVr from '@/images/guy-using-vr.png'
import { alata, josefin } from "@/utils/fonts";

export const Interactive = () => {
    return (
        <section className="sm:mt-24 sm:justify-start 2xl:p-8 md:mt-8 md:mb-12 xl:min-h-[80vh] xl:items-center justify-center   flex-col max-w-[1280px] mx-auto flex  mt-40 mb-48 relative">
            <Image src={guyWearingVr} alt="guy wearing vr" />
            <div className="2xl:bottom-[5.7%] xl:relative xl:left-0 xl:flex flex-col items-center justify-center xl:max-w-[100%] max-w-[560px] absolute right-0 bottom-0 left-[45%] bg-[#fff] ">
                <h3
                    className={`sm:text-[32px] sm:w-[300px] sm:p-4 sm:mt-12 md:mb-0 md:text-center xl:p-8 text-5xl font-light mb-6 uppercase pt-24 pl-24 ${josefin.className}`}
                >
                    The leader in interactive VR
                </h3>
                <p
                    className={`sm:w-[300px] sm:p-2 md:text-center xl:p-8 text-[15px] opacity-[0.4994] pl-24 ${alata.className}`}
                >
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </section>
    );
}