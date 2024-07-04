import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { FaRegHeart } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import TextEditor from "./TextEditor";
import CurrencyInput from "./CurrencyInput";
import PhoneNumberInput from "./PhoneNumberInput";
import SearchComponent from "./SearchComponent";
import CustomSelect from "./Select";
import DropdownInput from "./DropdownInput/DropdownInput";

const InputFields = () => {
  const [isEmailDisabled, setIsEmailDisabled] = useState(false);

  const InputFieldsStyles = {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (isValid) {
      setIsEmailDisabled(true);
    }
    return isValid;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const validateDate = (date) => {
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    return dateRegex.test(date);
  };

  const validateTime = (time) => {
    const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
    return timeRegex.test(time);
  };

  return (
    <div style={InputFieldsStyles}>
      <CustomInput
        type="text"
        label="Name"
        id="name"
        placeholder="Enter your name"
      />
      <CustomInput
        type="text"
        label="Email"
        id="email"
        placeholder="Enter your email"
        validate={(email) => {
          const isValid = validateEmail(email);
          return isValid && email !== "";
        }}
        disabled={isEmailDisabled}
        showHelperText={true}
      />
      <CustomInput
        type="number"
        label="Number"
        id="numberrighticon"
        placeholder="Number + right icon"
        icon={<FaRegHeart />}
        iconPosition="right"
      />
      <CustomInput
        type="number"
        label="Number"
        id="numberrighticonhelper"
        placeholder="Number + right icon + Helper"
        icon={<FaRegHeart />}
        iconPosition="right"
        showHelperText={true}
      />
      <CustomInput
        type="password"
        label="Password"
        id="password"
        placeholder="Enter your password"
        validate={(password) => {
          const isValid = validatePassword(password);
          return isValid && password !== "";
        }}
        icon={<MdLockOutline />}
        showHelperText={true}
      />
      <CustomInput
        type="text"
        label="Favorite"
        id="favorite"
        placeholder="Enter your favorite thing"
        icon={<FaRegHeart />}
      />
      <CustomInput
        type="text"
        label="Star"
        id="star"
        placeholder="Enter your star thing"
        icon={<FaRegHeart />}
        iconPosition="right"
      />
      <CustomInput
        type="text"
        label="Date"
        id="date"
        placeholder="YYYY/MM/DD"
        validate={(date) => {
          const isValid = validateDate(date);
          return isValid && date !== "";
        }}
        icon={<MdOutlineDateRange />}
        showHelperText={true}
      />
      <CustomInput
        type="text"
        label="Time"
        id="time"
        placeholder="00:00 AM/PM"
        validate={(time) => {
          const isValid = validateTime(time);
          return isValid && time !== "";
        }}
        icon={<IoMdTime />}
        showHelperText={true}
      />
      <CustomInput
        type="text"
        label="Time"
        id="time"
        placeholder="00:00 AM/PM"
        validate={(time) => {
          const isValid = validateTime(time);
          return isValid && time !== "";
        }}
        icon={<IoMdTime />}
        iconPosition="right"
      />
      <CustomInput
        type="textarea"
        label="TextArea"
        id="textarea"
        placeholder="Enter your text here"
      />
      <CustomInput
        type="textarea"
        label="TextArea"
        id="textarea"
        placeholder="Enter your description"
        icon={<FaRegHeart />}
        showHelperText={true}
      />
      <CustomInput
        type="textarea"
        label="TextArea"
        id="textarea"
        placeholder="Enter your description"
        icon={<FaRegHeart />}
        iconPosition="right"
      />
      <CustomInput
        type="textarea"
        label="TextArea"
        id="textareahelper"
        placeholder="Enter your description"
        icon={<FaRegHeart />}
        iconPosition="right"
        showHelperText={true}
      />

      <TextEditor />

      <CurrencyInput />

      <PhoneNumberInput />

      <SearchComponent />

      <CustomSelect />

      <DropdownInput />
    </div>
  );
};

export default InputFields;
