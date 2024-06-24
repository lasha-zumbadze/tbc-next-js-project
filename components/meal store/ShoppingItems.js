"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "@/utilities/formatCurrency";
import HoverButton from "../HoverButton";
import { useState } from "react";
import { MdCalendarToday } from "react-icons/md";

function ShoppingItems({ storeItems }) {
  const [proceed, setProceed] = useState(false);
  const { cartItems } = useShoppingCart();
  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((item) => item.id === cartItem.id);

    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  if (cartItems.length) {
    return (
      <div className={`grid grid-cols-8 mt-16`} id="billing">
        <div
          className={`flex flex-col gap-8 w-5/7 m-auto my-20 min-h-screen ${
            proceed ? "col-span-6" : "col-span-8"
          }`}
        >
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} storeItems={storeItems} />
          ))}
          {cartItems.length > 0 && (
            <div className="flex justify-end mt-16">
              <div className="text-5xl text-gray-300 flex flex-col justify-end font-medium gap-6">
                <p className="text-textGolden">CART TOTAL</p>
                <p className="self-end">{formatCurrency(total)}</p>
              </div>
            </div>
          )}
          <button
            className="self-end text-textGolden text-3xl w-1/2 hover:text-white transition-all mt-20"
            onClick={() => setProceed((ex) => !ex)}
          >
            <HoverButton width="full">
              {proceed ? "Cancel" : "Proceed to checkout"}
            </HoverButton>
          </button>
        </div>
        {proceed && (
          <div className="col-span-2 w-4/5">
            <form className="flex flex-col  text-gray-200 py-8 gap-16">
              <div className="flex flex-col gap-8">
                <h3 className="text-textGolden text-[2.8rem] font-semibold">
                  Billing details
                </h3>
                <div className="flex flex-col gap-12">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-3xl mb-2">
                      First name <span className="text-textGolden">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastname" className="text-3xl mb-2">
                      Last name <span className="text-textGolden">*</span>
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      required
                      className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="company" className="text-3xl mb-2">
                    Company name (optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-3xl mb-2">
                    City <span className="text-textGolden">*</span>
                  </label>
                  <select
                    id="city"
                    required
                    className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 text-2xl pl-4"
                  >
                    <option className="bg-backgroundDarkblue">Tbilisi</option>
                    <option className="bg-backgroundDarkblue">Batumi</option>
                    <option className="bg-backgroundDarkblue">Qutaisi</option>
                    <option className="bg-backgroundDarkblue">Telavi</option>
                    <option className="bg-backgroundDarkblue">Gori</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address" className="text-3xl mb-2">
                    Address <span className="text-textGolden">*</span>
                  </label>
                  <div className="flex flex-col gap-6">
                    <input
                      id="address"
                      type="text"
                      placeholder="Street name and house number"
                      required
                      className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl placeholder:text-textGolden"
                    />
                    <input
                      type="text"
                      placeholder="Apartment (optional)"
                      required
                      className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl placeholder:text-textGolden"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-3xl mb-2">
                    Phone <span className="text-textGolden">*</span>
                  </label>
                  <input
                    id="phone"
                    type="phone"
                    required
                    className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-3xl mb-2">
                    Email address <span className="text-textGolden">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="text-textGolden text-[2.8rem] font-semibold">
                  Additional information
                </h3>
                <div className="flex flex-col">
                  <label htmlFor="additional" className="text-3xl mb-2">
                    Order notes (optional)
                  </label>
                  <textarea
                    id="additional"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className="bg-[#0000] outline-[1px] outline-textGolden outline border-none py-4 pl-4 text-2xl placeholder:text-textGolden h-52"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
        {proceed && (
          <div className="col-span-8 bg-[#293441] mx-40 p-12 m-12">
            <div className="text-textGolden grid grid-cols-12 justify-items-center items-center gap-12 text-4xl   border-[1px] border-textGolden py-16">
              <div className="self-start justify-self-end">
                <MdCalendarToday />
              </div>
              <p className="col-span-11 text-gray-200 pr-20">
                Sorry, it seems that there are no available payment methods.
                Please contact us if you require assistance or wish to make
                alternate arrangements.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <h1 className="text-8xl text-center italic min-h-screen pt-28 text-gray-200">
        No selected menu
      </h1>
    );
  }
}

export default ShoppingItems;
