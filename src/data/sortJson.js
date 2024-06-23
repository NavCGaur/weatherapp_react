const fs = require('fs');

// Function to remove macrons and other diacritics from a string
const removeDiacritics = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

// Read the JSON file
const inputFilePath = './in.json';
const outputFilePath = './output.json';

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    //  Parse the JSON content into a JavaScript array
    const cities = JSON.parse(data);

    //  Remove diacritics from city names and sort the array by city name
    cities.forEach(city => {
      city.city = removeDiacritics(city.city);
      city.admin_name= removeDiacritics(city.admin_name);
    });

    //  Sort the array (by age, then by name)
    cities.sort((a, b) => a["city"].localeCompare(b["city"]));

    //  Convert the sorted array back to JSON
    const sortedJsonString = JSON.stringify(cities, null, 2);

    // Write the sorted JSON back to the file
    fs.writeFile(outputFilePath, sortedJsonString, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log('File has been sorted and written to', outputFilePath);
    });
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});