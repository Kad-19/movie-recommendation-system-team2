import React from "react";

const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="flex justify-between mt-4">
      <p className="px-4 py-2 text-gray-950 dark:text-white ">Pages</p>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
      >
        Previous
      </button>
      <button className="px-4 py-2 mx-4  text-gray-950 dark:text-white">{currentPage}</button>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-50 dark:text-gray-600cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
