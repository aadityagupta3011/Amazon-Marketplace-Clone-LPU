const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateRequired = (body, fields) => {
  const missingFields = fields.filter((field) => !body[field]);

  if (missingFields.length > 0) {
    return `${missingFields.join(', ')} required`;
  }

  return null;
};

module.exports = {
  isValidEmail,
  validateRequired,
};
