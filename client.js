// Define the URL you want to send the POST request to
const url = "https://example-apify.onrender.com/test";

// Create an object containing the data you want to send
const data = {
  key1: "value1",
  key2: "value2",
};

// Use the Fetch API to make the POST request
fetch(url, {
  method: "POST", // Specify the method you want to use
  headers: {
    "Content-Type": "application/json", // Specify the content type
  },
  body: JSON.stringify(data), // Convert the data object to a JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON in the response
  })
  .then((data) => {
    console.log("Success:", data); // Handle the success case
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors
  });
