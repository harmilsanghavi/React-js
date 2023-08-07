// schemaValidators.js
export const isMessage = (data) => {
    // Define your validation logic here
    return data && typeof data === 'object' && 'id' in data && 'text' in data;
  };
  