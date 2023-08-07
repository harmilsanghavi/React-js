// api.js
const fetchData = async () => {
    // Simulating an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Fetch data from the API
    return ['item1', 'item2', 'item3'];
  };
  