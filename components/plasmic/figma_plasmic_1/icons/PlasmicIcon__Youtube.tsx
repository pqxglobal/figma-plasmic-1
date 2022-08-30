// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YoutubeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YoutubeIcon(props: YoutubeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.5 6.507a2.786 2.786 0 00-.766-1.27 3.05 3.05 0 00-1.338-.742C19.518 4 11.994 4 11.994 4a76.627 76.627 0 00-9.39.47c-.502.14-.962.4-1.338.76-.37.356-.638.795-.778 1.276A29.09 29.09 0 000 12c-.012 1.841.15 3.68.488 5.494.137.479.404.916.775 1.269.37.353.833.608 1.34.743 1.904.494 9.39.494 9.39.494a76.721 76.721 0 009.403-.47 3.05 3.05 0 001.338-.742 2.78 2.78 0 00.765-1.27c.345-1.811.513-3.652.5-5.495.027-1.851-.14-3.7-.5-5.517zM9.602 15.424V8.577L15.862 12l-6.26 3.423z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default YoutubeIcon;
/* prettier-ignore-end */
