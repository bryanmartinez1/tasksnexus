import React from "react";

type FormInputProps = {
  label: string;
};

function FormInput({ label }: FormInputProps) {
  return (
    <>
      <label>{label}</label>
      <input />
    </>
  );
}

export default FormInput;
