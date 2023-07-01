import Image from "next/image";
import Link from "next/link";

function HomePage() {
    return (
        <div className="w-full min-h-screen h-fit  flex items-center justify-center py-4 relative  ">
            <Image src="/photos/mainbg.jpg" alt="bg" fill priority={true} className="absolute top-0 left-0 -z-10" />
            <div className="max-w-7xl w-full h-fit bg-[#ffffff] rounded-lg px-5 py-3">
                <div className="h-16 w-full flex flex-row items-center justify-between">
                    <Link href="/" className="h-full flex items-center w-fit">
                        <Image src="/icon.png" width={64} height={64} alt="logo" priority={true} />
                        <h3 className="text-black font-semibold text-3xl">Weather</h3>
                    </Link>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <a href="https://www.facebook.com/profile.php?id=100030906050783">Contact me</a>
                    </button>
                </div>
                <div className="p-5 flex items-center">
                    <div className="w-1/2">
                        <div className=" text-[#583116] text-6xl font-semibold">
                            <span className="w-full block text-[#2e8b25]">Convenient</span> Weather Assistant In Your Device
                        </div>
                        <p className="text-[#686868] my-5">
                            Find out what can be waiting for you <br /> on the street with a few taps
                        </p>
                        <Link href="/search">
                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-48 text-center">Search now</div>
                        </Link>
                    </div>
                    <div className="w-1/2 flex justify-center relative">
                        <Image src="/photos/Weather.gif" className="w-auto h-auto" width={450} height={200} alt="banner" priority={true} />
                        <Image src="/photos/rain.gif" className="w-auto h-auto absolute z-10 top-5" width={450} height={200} alt="banner" priority={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
