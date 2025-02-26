import React, { useState } from "react";
import Image from "../Image";
import usflag from '../../assets/usflag.png'
import logo from '../../assets/logopng.png'
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiUser , CiHeart , } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { TbMichelinStarFilled } from "react-icons/tb";



const Header = () => {
  const [drop , setDrop] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  
  const dropDown = [
    {id: 1, name: "HOME" , icon: <IoIosArrowDown/>},
    {id: 2, name: "SHOPE" , icon: <IoIosArrowDown/>},
    {id: 3, name: "PRODUCT" , icon: <IoIosArrowDown/>},
    {id: 4, name: "PAGES" , icon: <IoIosArrowDown/>},
    {id: 5, name: "BLOG" , icon: <IoIosArrowDown/>},
    // {id: 6, name: "CONTACT US"}
  ]
    return (
      <header className="p-6 bg-[#263c97] text-center">
          <div className="flex justify-between pb-2 border-b">
            <div className="">
              <div className="flex relative items-center ">
                <div onClick={() => setDrop(!drop)} className="flex items-center gap-1">
                 <Image className={'h-[15px]'} imgSrc={usflag}/>
                 <p className="font-regula text-[15px] text-white">English</p>
                 <IoIosArrowDown className=" text-white"/>
                </div>
                {drop && 
                    <div className=" absolute top-[140px] left-[100px] bg-black text-white p-5">
                        <ul>
                        <li>Accesories</li>
                        <hr />
                            <li>Furniture</li>
                            <hr />
                            <li>Electronics</li>
                            <hr />
                            <li>Clothes</li>
                            <hr />
                            <li>Bags</li>
                            <hr />
                            <li>Home appliances</li>
                            <hr />
                        </ul>


                    </div>
                    }
                    <div onClick={() => setDrop(!drop)} className="flex items-center gap-1">
                    <p className="pl-9 font-regular text-[15px] text-white">United States(USD$)</p>
                    <IoIosArrowDown className=" text-white"/>
                    </div>
                    {drop && 
                    <div className=" absolute top-[140px] left-[100px] bg-black text-white p-5">
                        <ul>
                        <li>Accesories</li>
                        <hr />
                            <li>Furniture</li>
                            <hr />
                            <li>Electronics</li>
                            <hr />
                            <li>Clothes</li>
                            <hr />
                            <li>Bags</li>
                            <hr />
                            <li>Home appliances</li>
                            <hr />
                        </ul>


                    </div>
                    }

                <p className="pl-9 font-regular text-[15px] text-white">Need Help? +0191237942</p>
              </div>
            </div>
            <div className="">
                <div className="flex gap-[40px]">
                 <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">About Us</p>
                 <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">Order Tracking</p>
                 <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">Contact Us</p>
                 <p className="font-regular text-[15px] text-white hover:text-[#fcbe00] duration-300">FAQ Us</p>
                </div>
            </div>
          </div>
          <div className="flex items-center pb-5 pt-7 border-b">
            <div className="p-5 pr-[90px]">
              <Image imgSrc={logo}/>
            </div>
            <div className="pt-2">
              <div className="flex items-center">
                <div className=" px-3 py-2 bg-white rounded-[10px]">
                  <div className="flex items-center">
                    <p className="font-regular text-[14px] pr-[40px] text-black">All Categories</p>
                    <IoIosArrowDown className=" text-[#777777]"/>
                    <input className="font-regular text-[13px] pl-[40px] pr-[300px] outline-none text-[#777777]" type="text" placeholder="Search for product ..." />
                    <div className="bg-blue-400 p-4  rounded-[10px]">
                      <CiSearch className="text-[20px] text-white"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[40px]">
                <div className="flex items-center">
                  <div className="">
                    <CiUser className="text-[45px] text-white"/>
                  </div>
                  <div className="pr-[50px]">
                    <p className="font-regular text-[13px] text-[#777777]">Login</p>
                    <p className="font-bold text-[14px] text-white">Account</p>
                  </div>
                  <div className="">
                    <CiHeart className="text-[45px] text-white"/>
                  </div>
                  <div className="pr-[50px]">
                    <p className="font-regular text-[13px] text-[#777777]">Favorite</p>
                    <p className="font-bold text-[14px] text-white">My Wishlist</p>
                  </div>
                  <div className="">
                    <IoCartOutline className="text-[45px] text-white"/>
                  </div>
                  <div className="">
                    <p className="font-regular text-[13px] text-[#777777]">Your cart</p>
                    <p className="font-bold text-[14px] text-white">$00.00</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="pt-[15px]">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <FaBars className="text-[20px] text-white"/>
                <p className="font-bold text-[18px] pr-[60px] border-r text-white">SHOPE BY DEPARTMENT</p>
              </div>
              <div className="flex">
            {dropDown.map((item) =>(
            <div key={item.id} className="relative">
              <div onClick={() => handleDropdown(item.id)} className="flex items-center">
 <p className="font-bold text-[16px pr-[8px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">{item.name}</p>
 <div className="text-white hover:text-[#16bcdc] duration-300">{item.icon}</div>
</div>
{openDropdown === item.id && 
    <div className=" absolute top-[140px] left-[100px] bg-black text-white p-5">
        <ul>
        <li>Accesories</li>
        <hr />
            <li>Furniture</li>
            <hr />
            <li>Electronics</li>
            <hr />
            <li>Clothes</li>
            <hr />
            <li>Bags</li>
            <hr />
            <li>Home appliances</li>
            <hr />
        </ul>


    </div>
    }
            </div>  
            ))}
            <p className="font-bold text-[16px] pl-[30px] text-white hover:text-[#16bcdc] duration-300">CONTACT US</p>
          </div>
 
              <div className="flex gap-[10px] items-center pl-[276px]">
                <TbMichelinStarFilled className="text-blue-400"/>
                <p className="font-bold text-[13px] text-white">Sale $20 Off Your First Order</p>
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