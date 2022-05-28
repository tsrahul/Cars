import classnames from "classnames";
import React from "react";
import { usePagination, DOTS } from "./usePagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    pageKey,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      key={pageKey}
      className={classnames("flex list-none", { [className]: className })}
    >
      <li
        className={classnames(
          "py-0 px-1.5 lg:px-3.5 text-center my-auto mx-1 flex box-border items-center rounded-full w-6 lg:w-10 h-6 lg:h-10 font-titi text-xs lg:text-sm cursor-pointer border border-neutral-400",
          {
            // disabled state
            "pointer-events-none text-neutral-500": currentPage === 1,
          }
        )}
        onClick={onPrevious}
        key={`previousCustomPagination${Math.random()}`}
      >
        <LeftOutlined />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={`dotsPagination${Math.random()}`}
              className="py-0 px-1.5 lg:px-3.5 text-center my-auto mx-1 flex box-border items-center rounded-full w-6 lg:w-10 h-6 lg:h-10 font-titi text-xs lg:text-sm cursor-pointer border border-neutral-400 dots"
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames(
              "py-0 px-1.5 lg:px-3.5 text-center my-auto mx-1 flex box-border items-center rounded-full w-6 lg:w-10 h-6 lg:h-10 font-titi text-xs lg:text-sm cursor-pointer border border-neutral-400",
              {
                // current state
                "bg-[#FF7738] border-[#FF7738] font-bold text-white":
                  pageNumber === currentPage,
              }
            )}
            onClick={() => onPageChange(pageNumber)}
            key={`currentCustomPagination${Math.random()}`}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(
          "py-0 px-1.5 lg:px-3.5 text-center my-auto mx-1 flex box-border items-center rounded-full w-6 lg:w-10 h-6 lg:h-10 font-titi text-xs lg:text-sm cursor-pointer border border-neutral-400",
          {
            // disabled state
            "pointer-events-none text-neutral-500": currentPage === lastPage,
          }
        )}
        onClick={onNext}
        key={`nextCustomPagination${Math.random()}`}
      >
        <RightOutlined />
      </li>
    </ul>
  );
};

export default Pagination;
