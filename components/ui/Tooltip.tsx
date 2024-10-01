import React from "react";
import Tippy from "@tippyjs/react";
import { Placement } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/animations/perspective-extreme.css";
import "tippy.js/animations/perspective-subtle.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale-extreme.css";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/shift-away-extreme.css";
import "tippy.js/animations/shift-away-subtle.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-toward-extreme.css";
import "tippy.js/animations/shift-toward-subtle.css";
import "tippy.js/animations/shift-toward.css";

interface ITooltip {
  children?: any;
  content?: string;
  title?: string;
  className?: string;
  placement?: Placement;
  arrow?: boolean;
  theme?: string;
  animation?: string;
  trigger?: string;
  interactive?: boolean;
  allowHTML?: boolean;
  maxWidth?: number;
  duration?: number;
}

const Tooltip = ({
  children,
  content = "content",
  title,
  className = "btn btn-dark",
  placement = "top",
  arrow = true,
  theme = "dark",
  animation = "shift-away",
  trigger = "mouseenter focus",
  interactive = false,
  allowHTML = false,
  maxWidth = 300,
  duration = 200,
}: ITooltip) => {
  return (
    <div className="custom-tippy">
      <Tippy
        content={content}
        placement={placement as Placement}
        arrow={arrow}
        theme={theme}
        animation={animation}
        trigger={trigger}
        interactive={interactive}
        allowHTML={allowHTML}
        maxWidth={maxWidth}
        duration={duration}
      >
        {children ? children : <button className={className}>{title}</button>}
      </Tippy>
    </div>
  );
};

export default Tooltip;
