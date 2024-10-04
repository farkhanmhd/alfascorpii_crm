import React, { Fragment } from "react";
import Icon from "@/components/ui/Icon";

interface ISelect {
  label?: string;
  placeholder?: string;
  classLabel?: string;
  className?: string;
  classGroup?: string;
  register?: any;
  name?: string;
  readonly?: boolean;
  value?: any;
  error?: any;
  icon?: any;
  disabled?: boolean;
  id?: string;
  horizontal?: boolean;
  validate?: boolean;
  msgTooltip?: string;
  description?: string;
  onChange?: any;
  options?: any;
  defaultValue?: any;
  size?: any;
}

const Select = ({
  label,
  placeholder = "Select Option",
  classLabel = "form-label",
  className = "",
  classGroup = "",
  register,
  name,
  readonly,
  value,
  error,
  icon,
  disabled,
  id,
  horizontal,
  validate,
  msgTooltip,
  description,
  onChange,
  options,
  defaultValue,
  size,
  ...rest
}: any) => {
  options = options || Array(3).fill("option");
  return (
    <div
      className={`fromGroup ${error ? "has-error" : ""} ${
        horizontal ? "flex" : ""
      } ${validate ? "is-valid" : ""} `}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel} ${
            horizontal ? "flex-0 mr-6 w-[60px] break-words md:w-[100px]" : ""
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? "flex-1" : ""}`}>
        {name && (
          <select
            onChange={onChange}
            {...register(name)}
            {...rest}
            className={`${
              error ? "has-error" : " "
            } form-control appearance-none py-2 ${className} `}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {option.value && option.label ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}
        {!name && (
          <select
            onChange={onChange}
            className={`${
              error ? "has-error" : " "
            } form-control appearance-none py-2 ${className} `}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {option.value && option.label ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}

        {/* icon */}
        <div className="absolute top-1/2 flex -translate-y-1/2 space-x-1 text-xl ltr:right-[14px] rtl:left-[14px] rtl:space-x-reverse">
          <span className="pointer-events-none relative -right-2 inline-block text-slate-900 dark:text-slate-300">
            <Icon icon="heroicons:chevron-down" />
          </span>
          {error && (
            <span className="text-danger-500">
              <Icon icon="heroicons-outline:information-circle" />
            </span>
          )}
          {validate && (
            <span className="text-success-500">
              <Icon icon="bi:check-lg" />
            </span>
          )}
        </div>
      </div>
      {/* error and success message*/}
      {error && (
        <div
          className={`mt-2 ${
            msgTooltip
              ? "inline-block rounded bg-danger-500 px-2 py-1 text-[10px] text-white"
              : "block text-sm text-danger-500"
          }`}
        >
          {error.message}
        </div>
      )}
      {/* validated and success message*/}
      {validate && (
        <div
          className={`mt-2 ${
            msgTooltip
              ? "inline-block rounded bg-success-500 px-2 py-1 text-[10px] text-white"
              : "block text-sm text-success-500"
          }`}
        >
          {validate}
        </div>
      )}
      {/* only description */}
      {description && <span className="input-description">{description}</span>}
    </div>
  );
};

export default Select;
