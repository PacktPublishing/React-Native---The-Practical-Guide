const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let isValid = true;
if (props.required && text.trim().length === 0) {
  isValid = false;
}
if (props.email && !emailRegex.test(text.toLowerCase())) {
  isValid = false;
}
if (props.min != null && +text < props.min) {
  isValid = false;
}
if (props.max != null && +text > props.max) {
  isValid = false;
}
if (props.minLength != null && text.length < props.minLength) {
  isValid = false;
}
