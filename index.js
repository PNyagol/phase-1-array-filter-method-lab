// Sample array of driver objects with Kenyan towns
const drivers = [
    { name: 'John', hometown: 'Nairobi' },
    { name: 'Jane', hometown: 'Mombasa' },
    { name: 'Bob', hometown: 'Kisumu' },
    { name: 'Alice', hometown: 'Eldoret' },
    { name: 'David', hometown: 'Nakuru' },
    { name: 'Grace', hometown: 'Kisii' },
    { name: 'Kevin', hometown: 'Nairobi' },
  ];
  
  // Function to find matching drivers by name
  function findMatching(driverNames, query) {
    return driverNames.filter(driverName =>
      driverName.toLowerCase() === query.toLowerCase()
    );
  }

  let match = findMatching('james', ['james', 'Peter','James'])

  console.log(match)
  
  // Function to find drivers whose names begin with provided letters
  function fuzzyMatch(driverNames, query) {
    return driverNames.filter(driverName =>
      driverName.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  // Function to find drivers whose name matches the provided string
  function matchName(driversArray, query) {
    return driversArray.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }
  
  // Testing the functions
  
  // Example usage of findMatching
  const matchingDrivers = findMatching(drivers.map(driver => driver.name), 'Jane');
  console.log(matchingDrivers); // Should return ['Jane']
  
  // Example usage of fuzzyMatch
  const fuzzyMatchingDrivers = fuzzyMatch(drivers.map(driver => driver.name), 'K');
  console.log(fuzzyMatchingDrivers); // Should return ['Kisumu', 'Kisii']
  
  // Example usage of matchName
  const matchingNameDrivers = matchName(drivers, 'Nairobi');
  console.log(matchingNameDrivers);
  /* 
  Should return:
  [
    { name: 'John', hometown: 'Nairobi' },
    { name: 'Kevin', hometown: 'Nairobi' }
  ]
  */
  