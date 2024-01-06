import React from "react";
import { translateThis } from "../utils/TranslateServices";

function Test() {
  console.log(translateThis("Hello, world!").String);
  return (
    <>
      <p>"Hello, world!"</p>
    </>
  );
}

export default Test;
