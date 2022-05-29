import React, { useEffect, useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const CourseDesc = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let newObject = window.localStorage.getItem("descItem");
    let arr = [];
    arr.push(JSON.parse(newObject));
    setdata(arr);
  }, []);

  return (
    <section className="h-screen">
      {data.length != 0 ? (
        <>
          <div className="bg-black">
            <div className="relative flex justify-between py-12 h-60 px-5 lg:px-28">
              <div className="max-w-[600px] flex-1">
                <p className="text-2xl custom_truncate text-white font-bold m-0 p-0 ">
                  {data[0].name}
                </p>
                <p className="text-xs custom_truncate text-slate-400 font-bold m-0 mt-3 p-0 ">
                  {data[0].name}
                </p>
                <p className="text-xs text-[#ff7738] font-bold m-0 mt-6 p-0 ">
                  {data[0].author}
                </p>
              </div>
              <div>
                <iframe
                  className="drop-shadow-xl border-[1px] border-white hover:drop-shadow-2xl h-[150px] 2xl:h-[250px] w-[300px] 2xl:w-[500px]"
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameBorder="1"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </div>
            </div>
          </div>
          <div className="relative flex justify-between py-3 max-h-[307px] px-10 2xl:px-28">
            <div className="border-[1px] border-slate-300 max-w-[785px] p-3 overflow-y-auto">
              {data[0].desc}
            </div>
            <div className="h-[225px] w-[500px] border-[1px] border-slate-300 mt-16 p-3">
              <p className="text-2xl font-bold">Rs. {data[0].disPrice}/-</p>
              <p className="text-base line-through font-light mt-2">
                Rs. {data[0].orgPrice}/-
              </p>
              <p className="flex items-center text-[#ffa982] mt-2 mr-2">
                <ClockCircleOutlined className="mr-2" />
                <span className="text-[#ff3838] mr-2">8 Hours</span> left for
                this price
              </p>
              <div className="flex items-center justify-between mt-8">
                <Button className="uppercase custom_add_btn custom_add_btn1">
                  Add to Cart
                </Button>
                <Button className="uppercase custom_add_btn1 custom_add_btn12">
                  Add to wishlist
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Data not Found</>
      )}
    </section>
  );
};

export default CourseDesc;
