"use client";
import { Suspense, useEffect, useState } from "react";
import Arrow from "../../../public/icons/left-arrow-logo.svg";
import Tick from "../../../public/icons/tick.svg";
import "./product.css";

import Image from "next/image";
import FilterDropdown from "./Filter";
import Link from "next/link";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
      let url = 'https://fakestoreapi.com/products'
    try {
      setLoading(true)
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    catch (error) {
      alert("Something went wrong", error)
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  const list = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const filterTitles = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];


  const [showFilter, setShowFilter] = useState(true);

  return (
    <main id="product-main">
      <hr />
      <section className="product-top-section ">
        <div className="product-top-left-section ">
          <p className="total-items mobile-none">3425 ITEMS</p>
          <div
            onClick={() => setShowFilter(!showFilter)}
            role="button"
            className="show-hide-filter-btn"
          >
            <p className="filters-mobile">FILTERS</p>
            <Image
              style={{
                rotate: `${showFilter ? "90deg" : "270deg"}`,
                transition: "rotate 0.15s ease-in-out",
              }}
              src={Arrow}
              className="mobile-none"
              alt="arrow"
              height={16}
              width={16}
            />
            <p
              className="mobile-none"
              style={{ textDecoration: "underline", opacity: "30%" }}
            >
              {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </p>
          </div>
        </div>
        <div className="product-top-right-section">
          <DropDownMenu options={list} defaultOption={list[0]} />
        </div>
      </section>
      <hr />
      <section className="product-main-section">
        {showFilter && (
          <section className="product-filter">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input
                id="customize"
                type="checkbox"
                className="custmoize-input"
              />
              <label
                htmlFor="customize"
                className="customize-label"
              >
                CUSTOMIZE
              </label>
            </div>
            <hr />
            {filterTitles.map((title, index) => {
              return <FilterDropdown key={index} FilterTitle={title} />;
            })}
          </section>
        )}
        <section className="products-list">
          {loading ? (<div className="loading">Loding...</div>) :
            products.map((product, index) => {
              const { title, price, image } = product;
              return (
                <ProductContiner
                  key={index}
                  title={title}
                  price={price}
                  image={image}
                />
              );
            })}
        </section>
      </section>
    </main>
  );
};

const ProductContiner = ({ title, price, image }) => {
  const [like, setLike] = useState(false);
  return (
    <section className="product-container">
      <section className="product-image-container">
        <Image src={image} alt={title} height={399} width={300} />
      </section>
      <section className="product-details-container">
        <div className="product-details">
          <p className="product-title">{title}</p>
          <p>Price : ${price}</p>
          <div className="create-account">
            <Link style={{ textDecoration: "underline" }} href="#">
              Sign up
            </Link>
            {" or "}
            <Link href="#">Create an account to see pricing</Link>
          </div>
        </div>
        <div onClick={() => setLike(!like)} className="heart-logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={like ? "#EB4C6B" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z"
              stroke={like ? "#EB4C6B" : "#292D32"}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
    </section>
  );
};

export const DropDownMenu = ({ options, defaultOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [click, setClick] = useState(false);

  const handleOptionsSelect = (option) => {
    setSelectedOption(option);
    setClick(false);
  };
  return (
    <div className="dropdown">
      <div className="sorting-btn" onClick={() => setClick(!click)}>
        <p>{selectedOption}</p>
        <Image
          style={{
            rotate: `${click ? "180deg" : "0deg"}`,
            transition: "rotate 0.15s ease-in-out",
          }}
          src={Arrow}
          alt="arrow"
          height={16}
          width={16}
        />
      </div>
      {click && (
        <ul className="options">
          {options.map((option, index) => {
            return (
              <li
                onClick={() => handleOptionsSelect(option)}
                className="each-option"
                key={index}
              >
                {option == selectedOption && (
                  <Image src={Tick} height={26} width={26} alt="tick-logo" />
                )}
                <p
                  style={{
                    fontWeight: `${option == selectedOption ? "800" : "normal"
                      }`,
                  }}
                >
                  {option}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Product;