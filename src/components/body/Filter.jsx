"use client";
import Arrow from "../../../public/icons/left-arrow-logo.svg";
import Image from "next/image";
import { useState } from "react";
import "./filter.css";

const FilterDropdown = ({ FilterTitle }) => {
  const options = ["Unselect All", "Men", "Woman", "Baby & Kids"];
  const [click, setClick] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOptions = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item != option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const resetSelectedOptions = () => {
    setSelectedOptions([]);
  };
  return (
    <>
      <div className="dropdown">
        <div className="label">
          <div
            onClick={() => setClick(!click)}
            className="label-title-dropdown"
          >
            <p>{FilterTitle}</p>
            <Image
              style={{
                rotate: `${click ? "180deg" : "0deg"}`,
                transition: "rotate 0.15s ease-in-out",
              }}
              src={Arrow}
              alt="Arrow"
              height={16}
              width={16}
            />
          </div>
          <p>All</p>
        </div>
        {click && (
          <ul className="filter-options">
            {options.map((option, index) => {
              return (
                <li key={index}>
                  {index == 0 ? (
                    <p
                      onClick={resetSelectedOptions}
                      style={{
                        textDecoration: "underline",
                        opacity: "30%",
                        cursor: "pointer",
                      }}
                      role="button"
                    >
                      {option}
                    </p>
                  ) : (
                    <div className="filter-items">
                      <input
                        id={option}
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleSelectedOptions(option)}
                        value={option}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <hr />
    </>
  );
};

export default FilterDropdown;