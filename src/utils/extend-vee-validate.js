/* eslint-disable no-useless-escape */
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

const REGEX_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

extend("required", {
  ...required,
  message: "{_field_} không được để trống"
});

extend("minLength", {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ["length"],
  message: "{_field_} phải có ít nhất {length} ký tự"
});

extend("maxLength", {
  validate(value, { length }) {
    return value.length <= length;
  },
  params: ["length"],
  message: "{_field_} chứa nhiều nhất {length} ký tự"
});

extend("email", value => {
  if (REGEX_EMAIL.test(value)) {
    return true
  }
  return "Email không hợp lệ";
});

extend("min", {
  validate(value, { length }) {
    return value >= length;
  },
  params: ["length"],
  message: "{_field_} phải lớn hơn hoặc bằng {length}"
});

extend("integer", {
  validate(value) {
    return Number.parseInt(value) === value;
  },
  params: ["length"],
  message: "{_field_} phải là số nguyên"
});

extend("phoneNumber", () => {
  return true;
})

