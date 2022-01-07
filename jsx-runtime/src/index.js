import {
  Fragment,
  jsx as jsx_,
  jsxs as jsxs_,
  jsxDEV as jsxDEV_,
} from "react/jsx-runtime";
import { transformProps } from "./utils";

function jsx(type, props) {
  arguments[1] = transformProps(props);
  return jsx_.apply(this, arguments);
}

function jsxs(type, props) {
  arguments[1] = transformProps(props);
  return jsxs_.apply(this, arguments);
}

function jsxDEV(type, props) {
  arguments[1] = transformProps(props);
  return jsxDEV_.apply(this, arguments);
}

export { Fragment, jsx, jsxs, jsxDEV };
