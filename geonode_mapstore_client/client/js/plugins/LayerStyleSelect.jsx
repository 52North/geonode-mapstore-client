import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createPlugin } from "@mapstore/framework/utils/PluginsUtils";

console.log("hallo maggus");

function LayerStyleSelect(props) {
  console.log("test");
  return <div></div>;
}

export default createPlugin("LayerStyleSelect", {
  component: LayerStyleSelect,
});
