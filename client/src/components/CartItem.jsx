import React from "react";

import Img from "./Img";
import Text from "./Text";

const CartItem = (props) => {
  return (
    <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-0 w-full">
      <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full">
        <Img
          src={props?.image}
          className="h-[120px] md:h-auto object-cover w-[120px]"
          alt="rectangle1480"
        />
        <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
          <Text className="font-bold font-raleway leading-[35.00px] max-w-[294px] md:max-w-full text-black_900 text-left text-xl tracking-[-0.50px]">
            {props?.courseName}
          </Text>
          <Img
            src="../../public/anh2.svg"
            className="h-[20px] w-[112px]"
            alt="star"
          />
        </div>
      </div>

      <Text className="font-semibold text-black_900 text-left text-lg tracking-[-0.50px] w-auto">
        {props?.price}
      </Text>
      <div
        className="cursor-pointer"
        onClick={() => props.DeleteCartHandler(props.courseName)}
      >
        <Img src="./img_trash.svg" className="h-[50px] w-[50px]" alt="trash" />
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  image: "/anh5.png",
  courseName: "Ielts 3.0-5.0",
  price: "$40.00",
};

export default CartItem;
