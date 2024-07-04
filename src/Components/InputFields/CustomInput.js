import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";

const CustomInput = ({
  type = "text",
  label,
  id,
  placeholder,
  validate,
  disabled,
  showHelperText,
  icon,
  iconPosition = "left",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const inputContainerStyle = {
    marginBottom: "20px",
    position: "relative",
  };

  const labelStyle = {
    position: "absolute",
    top: "10px",
    left: icon && iconPosition === "left" ? "40px" : "10px",
    right: icon && iconPosition === "right" ? "40px" : "auto",
    pointerEvents: "none",
    color: "#666",
    transition: "transform 0.3s, top 0.3s, font-size 0.3s",
    zIndex: 1,
    fontSize: "16px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: icon
      ? iconPosition === "left"
        ? "30px 10px 10px 40px"
        : "30px 40px 10px 10px"
      : "25px 10px 10px 10px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "5px",
    outline: "none",
    border: disabled
      ? "none"
      : isValid && value
      ? "0.5px solid green"
      : !isValid
      ? "0.5px solid red"
      : isFocused
      ? "0.5px solid #6495ED"
      : value.length > 0
      ? "0.5px solid black"
      : "0.5px solid #ccc",
    backgroundColor: disabled ? "#B2BEB5" : "white",
    marginTop: "10px",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "100px",
    resize: "vertical",
  };

  const iconStyle = {
    position: "absolute",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    zIndex: 1,
    color: "#666",
    left: iconPosition === "left" ? "10px" : "auto",
    right: iconPosition === "right" ? "10px" : "auto",
    top: type === "password" ? "40%" : "50%",
  };

  const helperTextStyle = {
    color: id === "password" && isValid ? "green" : isValid ? "green" : "red",
    fontSize: "12px",
    marginTop: "5px",
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (validate) {
      setIsValid(validate(value));
    }
  };

  const handleDateInput = (e) => {
    let input = e.target.value.replace(/\D/g, ""); 
    let formattedInput = "";

    if (input.length > 4) {
      formattedInput += input.substring(0, 4) + "/";
    }
    if (input.length > 6) {
      formattedInput += input.substring(4, 6) + "/";
    }
    if (input.length > 8) {
      formattedInput += input.substring(6, 8);
    }

    setValue(formattedInput);
  };

  const handleChange = (e) => {
    if (type === "date") {
      handleDateInput(e);
    } else {
      setValue(e.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={inputContainerStyle}>
      {icon && <div style={iconStyle}>{icon}</div>}
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          style={textareaStyle}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          disabled={disabled}
        />
      ) : (
        <input
          type={showPassword ? "text" : type}
          id={id}
          placeholder={placeholder}
          style={inputStyle}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          disabled={disabled}
        />
      )}
      {type === "password" && (
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={togglePasswordVisibility}
        >
          <IoEyeOffOutline />
        </div>
      )}
      {showHelperText && id === "email" && !disabled && (
        <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
          Enter your email to validate
        </div>
      )}
      {showHelperText && !isValid && (
        <div style={helperTextStyle}>Something Went Wrong</div>
      )}
      {showHelperText && isValid && value && id === "email" && disabled && (
        <div style={helperTextStyle}>Verified</div>
      )}
      {showHelperText && id === "password" && (
        <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
        Password must be at least 8 characters and must contain at least one
        uppercase letter, one number, and one special character.
        </div>
      )}
      {showHelperText && isValid && value && id === "password" && (
        <div style={helperTextStyle}>
          Password must be at least 8 characters and must contain at least one
          uppercase letter, one number, and one special character.
        </div>
      )}
      {showHelperText && id === "numberrighticonhelper" && (
        <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
          Enter number here
        </div>
      )}
      {showHelperText && id === "date" && (
        <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
          Format: YYYY/MM/DD
        </div>
      )}
      {showHelperText && id === "textareahelper" && (
        <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
          Helper text here
        </div>
      )}
      
    </div>
  );
};
export default CustomInput;