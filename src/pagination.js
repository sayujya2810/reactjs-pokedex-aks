import React, { useState, useEffect } from "react";

const Pagination = ({ updateGen, range }) => {
  const [firstIndex, setFirstIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState(range);
  const [isActive, setIsActive] = useState(false);
  const [currentBtn, setCurrentBtn] = useState(1);
  useEffect(() => {
    setCurrentBtn(1);
    setFirstIndex(1);
    setLastIndex(range);
  }, [range]);
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(100 / range); i++) {
    pageNumbers.push(i);
  }

  const updateData = (type, number) => {
    if (type === "prev") {
      const first = firstIndex - range;
      const last = lastIndex - range;
      setFirstIndex(first);
      setLastIndex(last);
      updateGen(first, last);
      setCurrentBtn(currentBtn - 1);
    }
    if (type === "number") {
      setIsActive(!isActive);
      const first = (number - 1) * range + 1;
      const last = number * range;
      if (last >= 100) {
        updateGen(first, 100);
      } else updateGen(first, last);
      setFirstIndex((number - 1) * range + 1);
      setLastIndex(number * range);
      setCurrentBtn(number);
    }
    if (type === "next") {
      setIsActive(!isActive);
      const first = firstIndex + range;
      const last = lastIndex + range;
      setFirstIndex(first);
      setLastIndex(last);
      if (last >= 100) {
        updateGen(first, 100);
      } else updateGen(first, last);
      setCurrentBtn(currentBtn + 1);
    }
  };
  const findPageNo = () => {
    if (currentBtn > 2 && currentBtn < pageNumbers[pageNumbers.length - 2]) {
      return currentBtn;
    } else return pageNumbers[Math.round((pageNumbers.length - 1) / 2)];
  };
  if (pageNumbers.length > 7) {
    return (
      <div className="btn-container">
        <button
          disabled={firstIndex === 1}
          className="filter-btn"
          onClick={() => {
            if (firstIndex > range) {
              updateData("prev");
            }
          }}
        >
          Prev
        </button>
        <button
          disabled={pageNumbers[0] === currentBtn}
          key={pageNumbers[0]}
          className={
            currentBtn === pageNumbers[0] ? "active filter-btn" : "filter-btn"
          }
          onClick={() => {
            updateData("number", pageNumbers[0]);
          }}
        >
          {pageNumbers[0]}
        </button>
        <button
          disabled={pageNumbers[1] === currentBtn}
          key={pageNumbers[1]}
          className={
            currentBtn === pageNumbers[1] ? "active filter-btn" : "filter-btn"
          }
          onClick={() => {
            updateData("number", pageNumbers[1]);
          }}
        >
          {pageNumbers[1]}
        </button>
        <p>...</p>
        <button
          disabled={findPageNo() === currentBtn}
          key={findPageNo()}
          className={
            currentBtn === findPageNo() ? "active filter-btn" : "filter-btn"
          }
          onClick={() => {
            updateData("number", findPageNo());
          }}
        >
          {findPageNo()}
        </button>
        <p>...</p>
        <button
          disabled={pageNumbers[pageNumbers.length - 2] === currentBtn}
          key={pageNumbers[pageNumbers.length - 2]}
          className={
            currentBtn === pageNumbers[pageNumbers.length - 2]
              ? "active filter-btn"
              : "filter-btn"
          }
          onClick={() => {
            updateData("number", pageNumbers[pageNumbers.length - 2]);
          }}
        >
          {pageNumbers[pageNumbers.length - 2]}
        </button>
        <button
          disabled={pageNumbers[pageNumbers.length - 1] === currentBtn}
          key={pageNumbers[pageNumbers.length - 1]}
          className={
            currentBtn === pageNumbers[pageNumbers.length - 1]
              ? "active filter-btn"
              : "filter-btn"
          }
          onClick={() => {
            updateData("number", pageNumbers[pageNumbers.length - 1]);
          }}
        >
          {pageNumbers[pageNumbers.length - 1]}
        </button>
        <button
          disabled={lastIndex >= 100}
          className="filter-btn"
          onClick={() => {
            updateData("next");
          }}
        >
          Next
        </button>
      </div>
    );
  } else {
    return (
      <div className="btn-container">
        <button
          disabled={firstIndex === 1}
          className="filter-btn"
          onClick={() => {
            if (firstIndex > range) {
              updateData("prev");
            }
          }}
        >
          Prev
        </button>
        {pageNumbers.map((number) => {
          return (
            <button
              disabled={number === currentBtn}
              key={number}
              className={
                currentBtn === number ? "active filter-btn" : "filter-btn"
              }
              onClick={() => {
                updateData("number", number);
              }}
            >
              {number}
            </button>
          );
        })}
        <button
          disabled={lastIndex >= 100}
          className="filter-btn"
          onClick={() => {
            updateData("next");
          }}
        >
          Next
        </button>
      </div>
    );
  }
};
export default Pagination;
