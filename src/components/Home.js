import React, { Fragment } from "react";
import { Heading } from "./Heading";
import { Itemlist } from "./Itemlist";

export const Home = () => {


  return (
    <Fragment>
      <div className="App lg:mx-20 md:mx-10 sm:mx-5 mx-5">
        <h3 className="text-center text-3xl mt-20 leading-8 text-black font-bold tracking-wide uppercase">
          Try Chainengine Web
        </h3>
        <Heading />
        <Itemlist />
      </div>
    </Fragment>
  );
};
