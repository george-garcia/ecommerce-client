import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  return (
    <div className={" w-3/4 my-40 mx-auto text-center"}>
      <h3 className={"text-3xl"}>Subscribe To Our Newsletter</h3>
      <p className={"text-lg"}>
        and receive $20 coupon for your first order when you checkout
      </p>
      <div
        className={
          "py-1 px-1 my-3 mx-auto flex items-center w-3/4 bg-zinc-300 text-sm"
        }
      >
        <input
          type="text"
          placeholder={"Enter Email"}
          className={"pl-1 flex-grow bg-zinc-300 focus:outline-none"}
        />
        <div className={"text-zinc-400 text-2xl"}>|</div>
        <div className={"text-lg px-2 cursor-pointer"}>
          <h6>Subscribe</h6>
        </div>
      </div>
    </div>
  );
}
