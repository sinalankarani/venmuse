export default validate = (values, toggle) => {
  const errors = {};
  if (!toggle) {
    if (!values.email) {
      errors.email = "Required*";
    }
  }
  if (!values.username) {
    errors.username = "Required*";
  }
  if (!values.password) {
    errors.password = "Required*";
  }

  return errors;
};
