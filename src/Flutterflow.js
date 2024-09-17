import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { FlutterView } from "./FlutterView/FlutterView";

const FlutterAppWrapper = styled("div")(({ theme }) => ({
  border: "1px solid #eee",
  borderRadius: "5px",
  height: "480px",
  width: "320px",
  transition: theme.transitions.create("all", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: "hidden",
}));

const Flutterflow = () => {
  const [classNames, setClassNames] = React.useState("");
  const [color, setColor] = React.useState("blue");
  const [clicks, setClicks] = React.useState(0);
  const [text, setText] = React.useState("");

  return (
    <div style={{ height: "1000px", width: "1000px" }} className={classNames}>
      <FlutterView
        assetBase={process.env.PUBLIC_URL + "/flutter/"}
        src={process.env.PUBLIC_URL + "/flutter/main.dart.js"}
        onClicksChange={setClicks}
        onColorChange={setColor}
        onTextChange={setText}
        text={text}
        clicks={clicks}
        color={color}
      />
    </div>
  );
};

export default Flutterflow;
