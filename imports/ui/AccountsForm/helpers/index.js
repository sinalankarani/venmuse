export default validate = values => {
  console.log(values);
  const errors = {};
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   }
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};
