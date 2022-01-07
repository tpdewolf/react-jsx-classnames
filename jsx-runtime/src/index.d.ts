import { Fragment } from "react/jsx-runtime";
import type { ClassValue } from "clsx";
import * as React from "react";
declare function jsx(type: any, props: any, ...args: any[]): any;
declare function jsxs(type: any, props: any, ...args: any[]): any;
declare function jsxDEV(type: any, props: any, ...args: any[]): any;
declare module "react" {
    interface Attributes extends React.Attributes {
        classNames?: ClassValue;
        clsx?: ClassValue;
    }
}
export { Fragment, jsx, jsxs, jsxDEV };
