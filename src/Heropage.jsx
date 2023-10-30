import Navbar from "./navbar";

const Heropage = () => {
    return (
        <div>
            <div className="absolute w-screen top-4 left-0 opacity-100">
                <Navbar />
            </div>
            <div className="w-2/5 h-3/5 roudedborder backdrop-blur-3xl bg-green-400 absolute opacity-80 top-0 left-0 ">
            </div>
            <div className="h-screen w-full flex">
                <div className="h-full w-full"></div>
                <div className="h-full w-full iimageurl bg-[url(./assets/hero3.jpg)] bg-cover bg-center bg-no-repeat"></div>
            </div>
            <div className="h-screen w-full flex">
                <div className="h-full w-full">heki</div>
                <div className="h-full w-full bg-green-300"></div>
            </div>
        </div>
    )
}

export default Heropage;