import { alata, josefin } from "@/utils/fonts";
import { creations } from "@/utils";
export const Creations = () => {
    
    
    return (
        <section className="max-w-[1280px] mx-auto flex flex-col 2xl:p-8 mb-20">
            <div className="md:justify-center flex justify-between w-full mb-20">
                <h4
                    className={`sm:text-3xl md:justify-center md:text-4xl text-5xl uppercase ${josefin.className} font-light`}
                >
                    Our creations
                </h4>
                <button
                    className={` md:hidden rounded-lg uppercase bg-[#fff] text-[#000] border-2 border-black cursor-pointer pt-3 pl-10 pr-10 pb-3 hover:bg-[#000] hover:text-[#fff] ${alata.className}`}
                >
                    See all
                </button>
            </div>
            <ul className="sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid grid-cols-4 gap-8">
                {creations.map((creation, index) => {
                    const splitTitle = creation.title.split(" ");
                    const formattedTitle = splitTitle.join("\n");
                    return (
                        <li
                            className={`relative bg-images`}
                            key={creation.title}
                        >
                            <div className="cursor-pointer absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                            <div className="bg-images bg-cover relative">
                                <picture>
                                    <source
                                        media="(max-width: 420px)"
                                        srcSet={creation.imageMobile.src}
                                    />
                                    <img
                                        className="w-full hover:opacity-[0.4]"
                                        src={creation.imageDesktop.src}
                                        alt={creation.title}
                                    />
                                </picture>
                            </div>
                            {index === 0 || index === 3 ? (
                                <span
                                    className={`sm:top-[22%] sm:p-4 sm:text-2xl sm:w-[30%] absolute p-10 top-[69%] text-3xl uppercase w-[65%] ${josefin.className} text-[#fff] font-light`}
                                >
                                    {" "}
                                    {formattedTitle}
                                </span>
                            ) : (
                                <span
                                    className={`sm:top-[22%] sm:p-4 sm:text-2xl sm:w-[50%] absolute p-10 top-[69%] text-3xl uppercase ${josefin.className} text-[#fff] font-light`}
                                >
                                    {formattedTitle}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
