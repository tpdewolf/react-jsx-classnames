import React from "react";

import { transformProps } from "./utils";

export function createElement(type, props) {
  arguments[1] = transformProps(props);
  return React.createElement.apply(this, arguments);
}
