import React, { useState } from "react";
import Image from "../Image";
import usflag from "../../assets/usflag.png";
import arbi from "../../assets/arbi.png";
import frace from "../../assets/frace.png";
import itali from "../../assets/itali.png";
import jarman from "../../assets/jarman.png";
import logo from "../../assets/logopng.png";
import meye from "../../assets/meye.webp";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { TbMichelinStarFilled } from "react-icons/tb";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);
  const [home, setHome] = useState(false);
  const [shope, setShope] = useState(false);
  const [product, setProduct] = useState(false);
  const [pages, setPages] = useState(false);
  const [blog, setBlog] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const dropDown = [
    { id: 1, name: "HOME", icon: <IoIosArrowDown /> },
    { id: 2, name: "SHOPE", icon: <IoIosArrowDown /> },
    { id: 3, name: "PRODUCT", icon: <IoIosArrowDown /> },
    { id: 4, name: "PAGES", icon: <IoIosArrowDown /> },
    { id: 5, name: "BLOG", icon: <IoIosArrowDown /> },
    // {id: 6, name: "CONTACT US"}
  ];
  return (
    <header className="p-6 bg-[#263c97] text-center">
      <div className="flex justify-between pb-2 border-b">
        <div className="">
          <div className="flex relative items-center ">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1"
            >
              <Image className={"h-[15px]"} imgSrc={usflag} />
              <p className="font-regula text-[15px] text-white">English</p>
              <IoIosArrowDown className=" text-white" />
            </div>
            {open && (
              <div className="w-[250px] absolute top-[30px] left-[0] bg-yellow-300 p-5 ">
                <div className="flex items-center gap-2">
                  <Image className={"h-[15px]"} imgSrc={usflag} />
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                    English
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image className={"h-[15px]"} imgSrc={arbi} />
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3">
                    العربية
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image className={"h-[15px]"} imgSrc={itali} />
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3">
                    Italiano
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image className={"h-[15px]"} imgSrc={jarman} />
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3">
                    Ελληνικά
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image className={"h-[15px]"} imgSrc={jarman} />
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3">
                    Deutsch
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image className={"h-[15px]"} imgSrc={frace} />
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                    Francias
                  </p>
                </div>
              </div>
            )}
            <div
              onClick={() => setDrop(!drop)}
              className="flex items-center gap-1"
            >
              <p className="pl-9 font-regular text-[15px] text-white">
                United States(USD$)
              </p>
              <IoIosArrowDown className=" text-white" />
            </div>
            {drop && (
              <div className=" absolute top-[30px] left-[127px] w-[195px] h-[180px] bg-amber-300">
                <div className="">
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3 flex justify-start pl-4">
                    Canada (CAD$)
                  </p>
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3 flex justify-start pl-4">
                    Japan (JPY¥)
                  </p>
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3 flex justify-start pl-4">
                    United Kingdom (GBP£)
                  </p>
                  <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-3 flex justify-start pl-4">
                    United States (USD$)
                  </p>
                </div>
              </div>
            )}

            <p className="pl-9 font-regular text-[15px] text-white">
              Need Help? +0191237942
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex gap-[40px]">
            <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">
              About Us
            </p>
            <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">
              Order Tracking
            </p>
            <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">
              Contact Us
            </p>
            <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">
              FAQ Us
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center pb-5 pt-7 border-b">
        <div className="p-5 pr-[90px]">
          <Image imgSrc={logo} />
        </div>
        <div className="pt-2">
          <div className="flex items-center">
            <div className=" px-3 py-2 bg-white rounded-[10px]">
              <div className="flex items-center">
                <p className="font-regular text-[14px] pr-[40px] text-black">
                  All Categories
                </p>
                <IoIosArrowDown className=" text-[#777777]" />
                <input
                  className="font-regular text-[13px] pl-[40px] pr-[300px] outline-none text-[#777777]"
                  type="text"
                  placeholder="Search for product ..."
                />
                <div className="bg-blue-400 p-4  rounded-[10px]">
                  <CiSearch className="text-[20px] text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-[40px]">
          <div className="flex items-center">
            <div className="">
              <CiUser className="text-[45px] text-white" />
            </div>
            <div className="pr-[50px]">
              <p className="font-regular text-[13px] text-[#777777]">Login</p>
              <p className="font-bold text-[14px] text-white">Account</p>
            </div>
            <div className="">
              <CiHeart className="text-[45px] text-white" />
            </div>
            <div className="pr-[50px]">
              <p className="font-regular text-[13px] text-[#777777]">
                Favorite
              </p>
              <p className="font-bold text-[14px] text-white">My Wishlist</p>
            </div>
            <div className="">
              <IoCartOutline className="text-[45px] text-white" />
            </div>
            <div className="">
              <p className="font-regular text-[13px] text-[#777777]">
                Your cart
              </p>
              <p className="font-bold text-[14px] text-white">$00.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-[15px]">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <FaBars className="text-[20px] text-white" />
            <p className="font-bold text-[18px] pr-[60px] border-r text-white">
              SHOPE BY DEPARTMENT
            </p>
          </div>
          <div className="flex">
            <div
              onClick={() => setHome(!home)}
              className="flex items-center gap-1"
            >
              <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">
                HOME
              </p>
              <IoIosArrowDown className=" text-white" />
            </div>
            {home && (
              <div className=" absolute top-[246px] left-[335px] w-[500px] bg-green-400 text-white p-5">
                <div className="flex gap-[200px]">
                  <div className="pl-5 text-[#777777]">
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 1
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 2
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 3
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 4
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 5
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 6
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 7
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 8
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 9
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 10
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 11
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 12
                    </p>
                  </div>
                  <div className="text-[#777777]">
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 13
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 14
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 15
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 16
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 17
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 18
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 19
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 20
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 21
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 22
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 23
                    </p>
                    <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                      Home 24
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div
              onClick={() => setShope(!shope)}
              className="flex relative items-center gap-1"
            >
              <p className="font-bold text-[16px] pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">
                SHOPE
              </p>
              <IoIosArrowDown className=" text-white" />

              {shope && (
                <div className=" absolute top-0 left-0 w-full bg-orange-400 h-auto text-white p-5">
                  <div className="flex gap-[100px]">
                    <div className="pl-5 text-[#777777]">
                      <p className="font-bold text-[16px] text-black hover:text-[#16bcdc] duration-300">
                        Shope Layout
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 pt-4">
                        Shope Default
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Filter On The Left
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Filter On The Right
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Filter On Top
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Popup Filter
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Tob Banner
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Load More Button
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Infinite Scrolling
                      </p>
                    </div>
                    <div className="text-[#777777]">
                      <p className="font-bold text-[16px] text-black hover:text-[#16bcdc] duration-300 ">
                        Product Type
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 pt-4">
                        Product Default
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Product Variable
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Product Grouped
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Product External
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Product Downloadable
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Product Swatch Images
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Product 3D
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Product With Video
                      </p>
                    </div>
                    <div className="text-[#777777]">
                      <p className="font-bold text-[16px] text-black hover:text-[#16bcdc] duration-300">
                        Collection Layout
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 pt-4">
                        Product 3 Coloumn
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Product 4 Coloumn
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Product 5 Coloumn
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Product List
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">
                        Thumbnail On The Left
                      </p>
                      <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300 py-2">
                        Thumbnail On The Right
                      </p>
                    </div>
                    <div className="relative">
                      <Image
                        className={"w-[50%]"}
                        imgSrc={meye}
                        imgAlt={meye}
                      />
                      <p className="font-bold text-[16px] text-black absolute top-[250px] left-7.5 bg-white py-3 px-[80px] rounded-[5px]">
                        Laptop & Ipad
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* {dropDown.map((item) =>(
            <div key={item.id} className="relative">
              <div onClick={() => handleDropdown(item.id)} className="flex items-center">
 <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">{item.name}</p>
 <div className="text-white hover:text-[#16bcdc] duration-300">{item.icon}</div>
</div>
{openDropdown === item.id && 
    <div className=" absolute top-[50px] left-[10px] w-[500px] bg-green-400 text-white p-5">
      <div className="flex gap-[200px]">
        <div className="pl-5 text-[#777777]">
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 1</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 2</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 3</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 4</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 5</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 6</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 7</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 8</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 9</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 10</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 11</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 12</p>
        </div>
        <div className="text-[#777777]">
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 1</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 2</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 3</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 4</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 5</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 6</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 7</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 8</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 9</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 10</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 11</p>
          <p className="font-regula text-[14px] hover:text-[#16bcdc] duration-300">Home 12</p>
        </div>
      </div>
    </div>
    }
            </div>  
            ))} */}
            <p className="font-bold text-[16px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">
              CONTACT US
            </p>
          </div>

          <div className="flex gap-[10px] items-center pl-[276px]">
            <TbMichelinStarFilled className="text-blue-400" />
            <p className="font-bold text-[13px] text-white">
              Sale $20 Off Your First Order
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// // SkillBar Component
// const SkillBar = ({ skill, level }) => {
//   return (
//     <div className="mb-4">
//       <p className="text-lg font-semibold">{skill}</p>
//       <div className="w-full bg-gray-200 rounded-full h-4">
//         <div
//           className="bg-blue-500 h-4 rounded-full"
//           style={{ width: `${level}%` }}
//         ></div>
//       </div>
//       <p className="text-sm text-gray-700 mt-1">{level}%</p>
//     </div>
//   );
// };

// // SkillRange Component
// const SkillRange = () => {
//   const skills = [
//     { skill: "React", level: 80 },
//     { skill: "JavaScript", level: 70 },
//     { skill: "Tailwind CSS", level: 90 },
//   ];

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       {skills.map((item, index) => (
//         <SkillBar key={index} skill={item.skill} level={item.level} />
//       ))}
//     </div>
//   );
// };
// import { useState } from "react";

// const SkillSlider = ({ skill }) => {
//   const [level, setLevel] = useState(50);

//   return (
//     <div className="mb-6">
//       <p className="text-lg font-semibold">{skill}</p>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={level}
//         onChange={(e) => setLevel(e.target.value)}
//         className="w-full"
//       />
//       <p className="text-sm text-gray-700 mt-1">Skill Level: {level}%</p>
//     </div>
//   );
// };

// const SkillRange = () => {
//   const skills = ["React", "JavaScript", "Tailwind CSS"];

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       {skills.map((skill, index) => (
//         <SkillSlider key={index} skill={skill} />
//       ))}
//     </div>
//   );
// };

// Header Component

// <div className="flex items-center relative">
// <div onClick={() => setDrop(!drop)} className="flex items-center">
//  <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">HOME</p>
//  <IoIosArrowDown className="text-white"/>
// </div>
// {drop &&
//     <div className=" absolute top-[140px] left-[100px] bg-black text-white p-5">
//         <ul>
//         <li>Accesories</li>
//         <hr />
//             <li>Furniture</li>
//             <hr />
//             <li>Electronics</li>
//             <hr />
//             <li>Clothes</li>
//             <hr />
//             <li>Bags</li>
//             <hr />
//             <li>Home appliances</li>
//             <hr />
//         </ul>

//     </div>
//     }

//   <div onClick={() => setDrop(!drop)} className="flex items-center">
//    <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">SHOPE</p>
//    <IoIosArrowDown className="text-white"/>
//   </div>
//   {drop &&
//     <div className=" absolute top-[140px] left-[100px] bg-black text-white p-5">
//         <ul>
//         <li>Accesories</li>
//         <hr />
//             <li>Furniture</li>
//             <hr />
//             <li>Electronics</li>
//             <hr />
//             <li>Clothes</li>
//             <hr />
//             <li>Bags</li>
//             <hr />
//             <li>Home appliances</li>
//             <hr />
//         </ul>

//     </div>
//     }
// <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">PRODUCT</p>
// <IoIosArrowDown className="text-white"/>
// <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">PAGES</p>
// <IoIosArrowDown className="text-white"/>
// <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">BLOG</p>
// <IoIosArrowDown className="text-white"/>
// <p className="font-bold text-[16px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">CONTACT US</p>
// </div>
