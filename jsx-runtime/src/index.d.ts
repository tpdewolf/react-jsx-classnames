import { Fragment } from "react/jsx-runtime";
import { ClassValue } from "clsx";
import * as React from "react";
declare module "react" {
    interface Attributes extends React.Attributes {
        classNames?: ClassValue;
        clsx?: ClassValue;
    }
}
declare function jsx(type: any, props: any, ...args: any[]): any;
declare function jsxs(type: any, props: any, ...args: any[]): any;
declare function jsxDEV(type: any, props: any, ...args: any[]): any;
export { Fragment, jsx, jsxs, jsxDEV };
