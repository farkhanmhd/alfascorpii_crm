import React from "react";
import Icon from "@/components/ui/Icon";

interface ISwitch {
  prevIcon?: string;
  nextIcon?: string;
  label?: string;
  id?: string;
  disabled?: boolean;
  value?: boolean;
  onChange?: any;
  activeClass?: string;
  wrapperClass?: string;
  labelClass?: string;
  badge?: string;
}

const Swicth = ({
  prevIcon,
  nextIcon,
  label,
  id,
  disabled,
  value,
  onChange,
  activeClass = "bg-slate-900 dark:bg-slate-900",
  wrapperClass = " ",
  labelClass = "text-slate-500 dark:text-slate-400 text-sm leading-6",
  badge,
}: ISwitch) => {
  return (
    <div>
      <label
        className={
          `relative flex items-center ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer "
          }` +
          "" +
          wrapperClass
        }
        id={id}
        htmlFor={id}
        onClick={onChange}
      >
        <input
          type="checkbox"
          className="absolute bottom-0 left-0 right-0 top-0 border opacity-0"
          defaultChecked={value}
          id={id}
          disabled={disabled}
        />
        <div
          className={`relative inline-flex h-6 w-[46px] items-center rounded-full transition-all duration-150 ltr:mr-3 rtl:ml-3 ${value ? activeClass : "bg-secondary-500"} `}
        >
          {badge && value && (
            <span className="absolute left-1 top-1/2 -translate-y-1/2 font-bold capitalize leading-[1px] tracking-[1px] text-white">
              {prevIcon ? <Icon icon={prevIcon} /> : <span className="text-[9px]">on</span>}
            </span>
          )}
          {badge && !value && (
            <span className="absolute right-1 top-1/2 -translate-y-1/2 font-bold capitalize leading-[1px] tracking-[1px] text-slate-900">
              {nextIcon ? <Icon icon={nextIcon} /> : <span className="text-[9px]">Off</span>}
            </span>
          )}

          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-150 ${
              value
                ? "ltr:translate-x-6 rtl:-translate-x-6"
                : "ltr:translate-x-[2px] rtl:-translate-x-[2px]"
            } `}
          />
        </div>
        {label && <span className={labelClass}>{label}</span>}
      </label>
    </div>
  );
};

export default Swicth;
