import { memo } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput");

  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;
};

export default memo(DemoOutput);
