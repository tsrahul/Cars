import React, { useState, useMemo } from "react";
import Layout from "../Layout";
import { courseData } from "./cartData";
import Pagination from "../Global/Pagination/Pagination";
import { Button, Rate, Select } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Option } = Select;

const cartPage = ({ data = courseData }) => {
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const updatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <Layout>
      <section className="relative py-24 min-h-max px-5 lg:px-28 bg-slate-200">
        <div className="grid grid-cols-4 gap-3 md:gap-4 mt-7">
          <div className="col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold m-0 p-0">All Courses</p>
              <div className="c-select-wrapper" id="searchBrand">
                <Select
                  bordered={false}
                  className={`c-select w-full h-full`}
                  placeholder="Select a Filter"
                  optionFilterProp="children"
                  getPopupContainer={() =>
                    document.getElementById("searchBrand")
                  }
                >
                  <Option value={"discounted"}>Discounted</Option>
                  <Option value={"highPrice"}>High Price</Option>
                  <Option value={"lowPrice"}>Low Price</Option>
                </Select>
              </div>
            </div>
            {updatedData != null ? (
              updatedData.map((item, key) => (
                <div
                  key={key}
                  className="mt-5 bg-white w-full p-3 h-20 drop-shadow-md hover:drop-shadow-xl flex items-center"
                >
                  <img
                    src={item.courseIMG}
                    alt="article"
                    className="h-14 w-14 mr-8"
                  />
                  <p className="custom_truncate text-base flex-1 max-w-[350px] mr-8 mb-0 max-h-12">
                    {item.name}
                  </p>
                  <div className="flex-1 max-w-[150px] mr-8">
                    <div className="flex items-center justify-between">
                      <p className="font-normal text-sm  max-w-[100px] mr-10">
                        {item.author}
                      </p>
                      <Rate count={1} allowClear />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[200px]">
                    <div className="flex">
                      <p className="font-extrabold text-sm mr-8">
                        Rs. {item.disPrice}/-
                      </p>
                      <p className="font-normal line-through text-sm mr-8">
                        {item.orgPrice == null
                          ? `--`
                          : `Rs. ${item.orgPrice}/-`}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 max-w-[150px]">
                    <div className="flex items-center justify-between">
                      <Button className="uppercase custom_add_btn">
                        Add to Cart
                      </Button>
                      <RightOutlined />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl font-bold m-0 p-0">No Courses Found :-(</p>
            )}
          </div>
          <div className="col-span-1">
            <div>Search comp</div>
            <div className="mt-5 bg-white w-full p-3 drop-shadow-md hover:drop-shadow-xl h-[480px]">
              <p className="text-lg font-normal pb-3 border-b-2 p-0 ">
                Your Cart
              </p>
              <div className="h-[350px]">hi</div>
              <p className="text-base font-normal pt-3 border-t-2 p-0 ">
                Total Cart Value
              </p>
              <p className="text-2xl font-bold">Rs. 0/-</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10">
          <div className="col-span-4 justify-center lg:justify-start lg:col-span-3 grid grid-cols-2 md:grid-cols-3 items-center gap-3 md:gap-4">
            <Pagination
              pageKey={`pageKey_${Math.random()}`}
              currentPage={currentPage}
              totalCount={data.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default cartPage;
