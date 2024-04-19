function nameValidation(name) {
  if (!name) return 'Name is required';
  if (name.length < 2) return 'Name must be at least 2 characters';
}
function valueValidation(value) {
  if (value === "") return 'Value is required';
  if (value <= 0) return 'Value must be positive greater than 0';
}
function stockValidation(stock) {
  if (stock === "") return 'Stock is required';
  if (stock < 0) return 'Stock must be positive';
}
function descriptionValidation(description) {
  if ( description.length > 0 && description.length < 10) return 'Description must be at least 10 characters';
}

function validateAll(name, value, stock, description) {
  const nameError = nameValidation(name);
  const valueError = valueValidation(value);
  const stockError = stockValidation(stock);
  const descriptionError = descriptionValidation(description);

  if (nameError) return nameError;
  if (valueError) return valueError;
  if (stockError) return stockError;
  if (descriptionError) return descriptionError;
}

module.exports = validateAll;