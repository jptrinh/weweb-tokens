const fs = require('fs');

const inputFilePath = process.env.INPUT_JSON_FILE;
const outputFilePath = process.env.OUTPUT_JSON_FILE;

try {
  const inputData = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));
  
  // Your transformation logic here
  console.log(inputData);
  
  const transformedData = inputData; // Replace with your transformation logic

  fs.writeFileSync(outputFilePath, JSON.stringify(transformedData, null, 2));

  console.log(`JSON transformation complete. Output saved to ${outputFilePath}`);
} catch (error) {
  console.error('Error transforming JSON:', error);
  process.exit(1);
}