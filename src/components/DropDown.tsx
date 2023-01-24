import React from "react";
import { BsThreeDots } from "react-icons/bs";

export const DropDown = () => {
  return (
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="cursor-pointer">
        <BsThreeDots className="w-7 h-7 shadow-2xl" />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Edit Product</a>
        </li>
        <li>
          <a>Delete Product</a>
        </li>
      </ul>
    </div>
  );
};