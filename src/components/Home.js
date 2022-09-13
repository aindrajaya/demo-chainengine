import React, { Fragment } from "react";
import { Heading } from "./Heading";
import { Itemlist } from "./Itemlist";

export const Home = () => {


  return (
    <Fragment>
      <div className="App mx-20">
        <h3 className="text-center text-3xl mt-20 leading-8 text-black font-bold tracking-wide uppercase">
          Try Chainengine Web
        </h3>
        <Heading />
        <Itemlist />
      </div>
    </Fragment>
  );
};
