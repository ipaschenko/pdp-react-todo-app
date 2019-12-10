function formValidator(values) {
  return values.title.length && values.text.length;
}

export default formValidator;
