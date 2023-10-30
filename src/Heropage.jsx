import Navbar from "./navbar";
import logoimage from './assets/logo3.jpg'
import image1 from './assets/traveloka_logo2.png'
import image2 from './assets/traveloka_logo3.png'
import image3 from './assets/traveloka_logo4.png'
import image4 from './assets/traveloka_logo5.png'

const Heropage = () => {
    return (
        <div>
            <div className="absolute w-screen top-4 left-0 opacity-100">
                <Navbar />
            </div>
            <div className="w-2/5 h-3/5 roudedborder backdrop-blur-3xl bg-green-400 absolute opacity-80 top-0 left-0 ">
            </div>
            <div className="h-screen w-full  flex">
                <div className="h-full w-full flex justify-center items-center">
                    <div className=" ml-20 w-[480px] h-[400px] mt-20">
                        <div className="h-1/3 ">
                           <h1 className=" overflow-y-hidden text-3xl w-5/6 leading-16 text-[#1B1C57] font-bold uppercase" style={{fontFamily:"Lexend"}}>
                              find the place to
                              live <span className="stroke-black text-[38px] font-sans" style={{"-webkit-text-stroke":" 1px black","-webkit-text-fill-color": "transparent"}}>your dreams</span> easily here   
                           </h1>
                        </div>
                        <div className="h-1/3 py-2 overflow-y-hidden">
                           <p className="text-base opacity-75 text-[#626687]" style={{fontFamily:"Lexend"}}>Everything you need about finding your place to live will be here, where it will be easier for you</p>
                           <div className="border my-4 rounded-[14px]">
                             <div className="flex justify-between items-center">
                                <div className="align-center  ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576Z" fill="#F59E0B"/>
                                    </svg>
                                </div>
                                <input type="text"  className="border w-[300px] py-2 outline-none border-none bg-transparent" placeholder="Search for the location you want!"/>
                                <button className=" px-5 bg-green-600 text-white m-[2px] py-2 rounded-[14px]">Search</button>
                             </div>
                           </div>
                        </div>
                        <div className="h-1/3 ">
                           <p className="text-base my-3 opacity-75 text-[#626687]">Our Partnership </p>
                           <div className="my-3 flex justify-between items-center w-5/6">
                              <div>
                                <img src={image1} />
                              </div>
                              <div>
                                <img src={image2} />
                              </div>
                              <div>
                                <img src={image3} />
                              </div>
                              <div>
                                <img src={image4} />
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full iimageurl bg-[url(./assets/image6.png)] bg-cover bg-center bg-no-repeat"></div>
            </div>
        </div>
    )
}

export default Heropage;