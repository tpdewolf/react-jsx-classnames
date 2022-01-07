import clsx from "clsx";

var hasOwnProperty = Object.prototype.hasOwnProperty;

export function transformProps(props) {
  if (
    props &&
    (hasOwnProperty.call(props, "classNames") ||
      hasOwnProperty.call(props, "clsx"))
  ) {
    var newProps = Object.assign({}, props);

    delete newProps.className;
    delete newProps.classNames;
    delete newProps.clsx;

    newProps.className = clsx(props.className, props.classNames, props.clsx);

    return newProps;
  }

  return props;
}
