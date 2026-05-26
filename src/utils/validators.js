export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  return /^[\d\s\-+()]{7,20}$/.test(phone);
}

export function validateRequired(value) {
  return value !== '' && value !== null && value !== undefined;
}

export function validateAddressForm(data) {
  const errors = {};
  if (!validateRequired(data.fullName)) errors.fullName = 'Full name is required';
  if (!validateRequired(data.email)) errors.email = 'Email is required';
  else if (!validateEmail(data.email)) errors.email = 'Invalid email format';
  if (!validateRequired(data.phone)) errors.phone = 'Phone number is required';
  else if (!validatePhone(data.phone)) errors.phone = 'Invalid phone format';
  if (!validateRequired(data.address)) errors.address = 'Street address is required';
  if (!validateRequired(data.city)) errors.city = 'City is required';
  if (!validateRequired(data.country)) errors.country = 'Country is required';
  if (!validateRequired(data.zipCode)) errors.zipCode = 'ZIP code is required';
  return errors;
}
