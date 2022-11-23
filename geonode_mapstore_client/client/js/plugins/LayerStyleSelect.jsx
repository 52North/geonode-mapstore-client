import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createPlugin } from "@mapstore/framework/utils/PluginsUtils";

function LayerStyleSelect(props) {
  console.log("test");
}

export default createPlugin("LayerStyleSelect", {
  component: LayerStyleSelectPlugin,
});
