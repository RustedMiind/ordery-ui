import { useEffect, useState } from "react";
import {
  FormReducerActionTypeType,
  OptionalFormObjectType,
} from "./RigesterForm";

function InputSection(props: PropsType) {
  const [error, setError] = useState("");
  useEffect(() => {
    handleErrors(props.actionType);
    console.log("<== Operation ==>");
  }, [props.value]);
  function handleErrors(type: FormReducerActionTypeType) {
    switch (type) {
      case "FIRST_NAME":
        if (props.value && props.value.length < 3) {
          setError("Enter A valid name");
          props.handleError({ fName: true });
        } else {
          setError("");
          props.handleError({ fName: false });
        }
        break;
      case "LAST_NAME":
        if (props.value && props.value.length < 3) {
          setError("Enter A valid name");
          props.handleError({ lName: true });
        } else {
          setError("");
          props.handleError({ lName: false });
        }
        break;
      case "PASSWORD":
        if (props.value && props.value.length < 6) {
          setError("Password must be 6 characters or more");
          props.handleError({ password: true });
        } else {
          setError("");
          props.handleError({ password: false });
        }
        break;
      case "PASSWORD_CONFIRM":
        if (props.value && props.value !== props.compare) {
          setError("Passwords must be matched");
          props.handleError({ passwordConfirm: true });
        } else {
          setError("");
          props.handleError({ passwordConfirm: false });
        }
        break;
      case "PHONE":
        console.log(
          !!props.value.length,
          !props.value.startsWith("01"),
          props.value.length < 11,
          props.value.length > 12,
          "final :",
          !!props.value.length &&
            !props.value.startsWith("01") &&
            (props.value.length < 11 || props.value.length > 12)
        );
        if (
          props.value &&
          (!props.value.startsWith("01") ||
            props.value.length < 11 ||
            props.value.length > 12)
        ) {
          setError("Enter a valid phone number");
          props.handleError({ phone: true });
        } else {
          setError("");
          props.handleError({ phone: false });
        }
        break;
      default:
        break;
    }
  }
  return (
    <div className="">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type || "text"}
        placeholder={props.label}
        value={props.value}
        onChange={(e) => {
          props.handler(e, props.actionType);
        }}
        className={error && "error"}
      />
      <p>{error}</p>
    </div>
  );
}
export default InputSection;

type PropsType = {
  value: string;
  actionType: FormReducerActionTypeType;
  label: string;
  type?: string;
  handleError: (object: OptionalFormObjectType) => void;
  compare?: string;
  handler: (
    e: React.ChangeEvent<HTMLInputElement>,
    action: FormReducerActionTypeType
  ) => void;
};
