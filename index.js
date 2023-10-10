function findMatching(driverNames, query) {
    return driverNames.filter(driverName =>
      driverName.toLowerCase() === query.toLowerCase()
    );
  }
  

  function fuzzyMatch(driverNames, query) {
    return driverNames.filter(driverName =>
      driverName.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  


  function matchName(driversArray, query) {
    return driversArray.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }
  
  