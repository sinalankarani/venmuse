export default function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.date) {
    errors.date = 'Required';
  }
  if (!values.description) {
    errors.description = 'Required';
  }
  if (!values.tags.length) {
    errors.tags = 'At least one tag is required';
  }

  return errors;
}
