// @ts-ignore
import { Fragment, jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
// @ts-ignore
import { jsxDEV as jsxDEV_ } from "react/jsx-dev-runtime";
import { transformProps } from "./utils";
import { ClassValue } from "clsx";
import * as React from "react";

declare module "react" {
  interface Attributes extends React.Attributes {
    classNames?: ClassValue;
    clsx?: ClassValue;
  }
}

function jsx(type, props, ...args) {
  return jsx_(type, transformProps(props), ...args);
}

function jsxs(type, props, ...args) {
  return jsxs_(type, transformProps(props), ...args);
}

function jsxDEV(type, props, ...args) {
  return jsxDEV_(type, transformProps(props), ...args);
}

export { Fragment, jsx, jsxs, jsxDEV };
