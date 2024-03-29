import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    classNames(
      "flex item-center items-center space-between p-3 border m-3 ",
      {
        "border-blue-500 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-500 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-500 bg-yellow-500 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
      },
      rest.className
    )
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
