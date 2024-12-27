import Image from "next/image";
import React from "react";
import AiImage1 from "@/app/assets/ai1.jpg";
import AiImage2 from "@/app/assets/ai2.jpg";
import {
  Baby,
  ChartColumnBig,
  MapPin,
  SquareArrowOutUpRight,
  TriangleAlert,
  UserRound,
  Video,
} from "lucide-react";
const Workers = () => {
  return (
    <div className="w-full p-10 justify-center items-center flex relative text-black">
      <div className="w-full flex justify-between items-center relative h-[80vh] overflow-hidden gap-10">
        <Image
          src={AiImage1}
          alt="ai"
          className=" w-1/2 flex-[.5] max-h-full object-cover rounded-lg shadow-lg h-[90%]"
        />
        <Image
          src={AiImage2}
          alt="ai-2"
          className="w-1/2 flex-[.5] max-h-full rounded-lg object-cover shadow-lg h-[90%]"
        />
      </div>
      <div className="hidden xl:block absolute bottom-5 left-[40%] bg-white opacity-95 shadow-lg space-y-8 p-5 rounded-md w-1/2">
        <h1 className="flex items-center font-semibold gap-2  ">
          <Video /> Recent Alerts
        </h1>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Alert Time</th>
              <th>Alert Type</th>
              <th>Camera</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Today,4:12 pm</td>
              <td>
                {/* <span className="bg-red-200 text-red-500 p-1 w-20 rounded text-sm">
                  Ongoing!
                </span> */}
                <td>Missing Helmet</td>
              </td>
              <td>
                <span className="flex items-center gap-1">
                  <MapPin size={15} />
                  Site PPe1
                </span>
              </td>
              <td>
                <span className="flex items-center gap-1 text-red-600 cursor-pointer">
                  <SquareArrowOutUpRight />
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td>Yesterday,5:20 pm</td>
              <td>Missing Jacket</td>
              <td>
                <span className="flex items-center gap-1">
                  <MapPin size={15} />
                  Site PPE 7
                </span>
              </td>
              <td>
                <span className="flex items-center gap-1 cursor-pointer">
                  <SquareArrowOutUpRight />
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td>July 24,2:05 pm</td>
              <td>Missing Gloves</td>
              <td>
                <span className="flex items-center gap-1">
                  <MapPin size={15} />
                  Site PPE 2
                </span>
              </td>
              <td>
                <span className="flex items-center gap-1 cursor-pointer">
                  <SquareArrowOutUpRight />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="hidden xl:block absolute bottom-3 left-[1rem]  space-y-2 ">
        <div className="bg-white opacity-95 flex items-center gap-2 font-semibold p-2 rounded-sm shadow-lg text-sm">
          <TriangleAlert size={12}/>
          Alert Configuration
        </div>
        <div className="bg-white opacity-95 flex items-center gap-2 font-semibold p-2 rounded-sm shadow-sm text-sm">
          <ChartColumnBig size={12} />
          Analytics
        </div>
      </div>
      <div className="bg-white p-3  xl:block rounded-lg w-64 absolute shadow-lg opacity-95 top-4 left-20 border-sm border-gray-50 flex justify-start flex-col">
        <h1 className="font-semibold text-left text-xs ">Camera</h1>
        <div className="flex flex-row gap-1 text-lg  items-center font-semibold">
          <MapPin size={18} />
          Site PPE 1
        </div>
        <div className="h-[1px] bg-gray-400 w-full my-2"></div>
        <div className="flex w-full flex-row gap-5 text-sm font-bold">
          <div>
            <span className="text-left">Teachers</span>
            <div className="flex flex-row text-lg items-center text-gray-500">
              <UserRound size={18} />
              <span className="text-red-500 ms-1">0</span>/2
            </div>
          </div>
          <div>
            <span className="text-left">Teachers</span>
            <div className="flex flex-row text-lg items-center text-gray-500">
              <Baby size={18} />
              <span className="text-black ms-1">24</span>/24
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-400 w-full my-2"></div>
        <h1 className="font-semibold text-left">Active alerts</h1>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="bg-yellow-400 font-semibold text-xs p-1">
              Missing Gloves
            </div>
            <div className="text-red-600 text-xs font-semibold">01:25</div>
          </div>
          <div className="text-green-500 text-xs font-semibold">Resolve</div>
        </div>
      </div>
    </div>
  );
};

export default Workers;
