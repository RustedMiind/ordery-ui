import { useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import InputSection from "./InputSection";

function RigesterForm() {
  const initialState: FormObjectType = {
    fName: "",
    lName: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  };
  const initialErrors: OptionalFormObjectType = {
    fName: true,
    lName: true,
    phone: true,
    password: true,
    passwordConfirm: true,
  };
  const [errors, setErrors] = useState(initialErrors);
  const [errorMessage, setErrorMessage] = useState(false);
  const [form, dispatch] = useReducer(HandleForm, initialState);
  const formHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    action: FormReducerActionTypeType
  ) => {
    dispatch({ type: action, payload: e.target.value });
  };
  const handleErrors = (object: OptionalFormObjectType) => {
    setErrors({ ...errors, ...object });
    // console.log({ ...errors, ...object });
  };
  const checkErrors = () => {
    let thereError = false;
    for (let i in errors) {
      if (errors[i as keyof typeof errors]) thereError = true;
    }
    setErrorMessage(thereError);
    return thereError;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkErrors();
  };
  return (
    <form
      className={`form ${errorMessage ? "error-popup" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="inputs-section name">
        <InputSection
          value={form.fName}
          actionType="FIRST_NAME"
          label="First Name"
          handler={formHandler}
          handleError={handleErrors}
        />
        <InputSection
          value={form.lName}
          actionType="LAST_NAME"
          label="Last Name"
          handler={formHandler}
          handleError={handleErrors}
        />
      </div>
      <div className="inputs-section phone">
        <InputSection
          value={form.phone}
          actionType="PHONE"
          label="Phone"
          handler={formHandler}
          handleError={handleErrors}
        />
      </div>
      <div className="inputs-section password">
        <InputSection
          value={form.password}
          type="password"
          actionType="PASSWORD"
          label="Password"
          handler={formHandler}
          handleError={handleErrors}
        />
      </div>
      <div className="inputs-section password">
        <InputSection
          value={form.passwordConfirm}
          compare={form.password}
          type="password"
          actionType="PASSWORD_CONFIRM"
          label="Confirm Password"
          handler={formHandler}
          handleError={handleErrors}
        />
      </div>
      <div className="inputs-section alert">
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
      <div className="inputs-section submit">
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

function HandleForm(
  state: FormObjectType,
  action: FormActionType
): FormObjectType {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, fName: action.payload };
    case "LAST_NAME":
      return { ...state, lName: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "PASSWORD_CONFIRM":
      return { ...state, passwordConfirm: action.payload };
    case "PHONE":
      if (
        action.payload.length > 12 ||
        action.payload.match(/^[0-9]+$/) !== null ||
        action.payload.length === 0
      ) {
        return { ...state, phone: action.payload };
      }
      return state;
    default:
      return state;
  }
}

type FormObjectType = {
  fName: string;
  lName: string;
  phone: string;
  password: string;
  passwordConfirm: string;
};
export type OptionalFormObjectType = {
  fName?: boolean;
  lName?: boolean;
  phone?: boolean;
  password?: boolean;
  passwordConfirm?: boolean;
};

export type FormReducerActionTypeType =
  | "FIRST_NAME"
  | "LAST_NAME"
  | "PHONE"
  | "PASSWORD"
  | "PASSWORD_CONFIRM";

export interface FormActionType {
  type: FormReducerActionTypeType;
  payload: string;
}

export default RigesterForm;
