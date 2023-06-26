function mostPopularCar(cars)
{
  let make = []; 
  let mostPop = 0;
  let mostMake = "";
  
  for(let m of cars)
  {
    make.push(m["make"]);
  }
  
  for(let c of make)
  {
    var makeNo = 0;
    for(let n of cars)
    {
       if(n["make"] == c)
       {
         makeNo++;
       }
    }
    
    if(makeNo > mostPop)
    {
      mostPop = makeNo;
      mostMake = c;
    }
  }
  return mostMake;
}

function nissansFromCK(cars)
{
  let num = 0;
  for(car of cars)
  {
    if(car["make"] == "Nissan" && car["reg_number"].startsWith("CK"))
    {
      num++;
    }
  }
  
  return num;
}

function mostBlueCars(cars)
{
  let carList = [];
  let carReg = [];
  let mostBlue = 0;
  let mostReg = "";
  for(car of cars)
  {
    if(car["color"] == "blue")
    {
      carList.push(car);
    }
  }
  
  for(car of cars)
  {  
     carReg.push(car["reg_number"]);
  }
  
  for(let reg of carReg)
  {
    let num = 0;
    for(let c of carList)
    {
      if(reg == c["reg_number"])
      {
        num++;
      }
    }
    
    if(num > mostBlue)
    {
      mostBlue = num;
      mostReg = reg.split(" ")[0].trim();
    }
  }
  
  return mostReg;
}

function fewestOrangeCars(cars)
{
  let carList = [];
  let carReg = [];
  let mostBlue = cars.length;
  let mostReg = "";
  for(car of cars)
  {
    if(car["color"] == "orange")
    {
      carList.push(car);
    }
  }
  
  for(car of cars)
  {  
     carReg.push(car["reg_number"]);
  }
  
  for(let reg of carReg)
  {
    let num = 0;
    for(let c of carList)
    {
      if(reg == c["reg_number"])
      {
        num++;
      }
    }
    
    if(num <= mostBlue)
    {
      mostBlue = num;
      mostReg = reg.split(" ")[0].trim();
    }
  }
  
  return mostReg;
}

function mostPopularModel(cars)
{
  let make = []; 
  let mostPop = 0;
  let mostMake = "";
  
  for(let m of cars)
  {
    make.push(m["model"]);
  }
  
  for(let c of make)
  {
    var makeNo = 0;
    for(let n of cars)
    {
       if(n["model"] == c)
       {
         makeNo++;
       }
    }
    
    if(makeNo > mostPop)
    {
      mostPop = makeNo;
      mostMake = c;
    }
  }
  return mostMake;
}

function mostPopularCL(cars)
{
  let make = []; 
  let mostPop = 0;
  let mostCL = "";
  
  for(let m of cars)
  {
    if(m["reg_number"].startsWith("CL"))
    {
      make.push(m);
    }
  }
  
  for(let c of make)
  {
    var makeNo = 0;
    for(let n of cars)
    {
       if(n["reg_number"] == c["reg_number"])
       {
         makeNo++;
       }
    }
    
    if(makeNo > mostPop)
    {
      mostPop = makeNo;
      mostCL = c["model"];
    }
  }
  return mostCL;
}

function leastPopularCF(cars)
{
  let make = []; 
  let mostPop = cars.length;
  let mostCL = "";
  
  for(let m of cars)
  {
    if(m["reg_number"].startsWith("CF"))
    {
      make.push(m);
    }
  }
  
  for(let c of make)
  {
    var makeNo = 0;
    for(let n of cars)
    {
       if(n["reg_number"] == c["reg_number"])
       {
         makeNo++;
       }
    }
    
    if(makeNo <= mostPop)
    {
      mostPop = makeNo;
      mostCL = c["model"];
    }
  }
  return mostCL;
}

function carsForTown(town)
{
  var cars = [ {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CL 61045"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 16875"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CK 32655"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "EcoSport",
  "reg_number": "CL 11318"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CJ 16103"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CL 42789"
  },  {
  "color": "blue",
  "make": "Volkswagen",
  "model": "Jetta",
  "reg_number": "CA 46977"
  },  {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CY 25661"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CY 35475"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CY 54886"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CJ 16455"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 57166"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
  },  {
  "color": "blue",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CY 98904"
  },  {
  "color": "white",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CF 75599"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CA 5510"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Focus",
  "reg_number": "CF 75586"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CA 46137"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CK 22692"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CF 33543"
  },  {
  "color": "red",
  "make": "Volkswagen",
  "model": "Touran",
  "reg_number": "CA 94890"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 82252"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Yaris",
  "reg_number": "CL 9538"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CF 62002"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CJ 67577"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CA 77852"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CY 52435"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CL 76173"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CL 38315"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CA 34015"
  }, {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 41166"
}];
  let code = "";
  if(town == "Paarl")
  {
    code = "CJ";    
  }else if(town == "Bellville")
  {
    code = "CY";    
  }else if(town == "Stellenbosch")
  {
    code = "CL";    
  }else if(town == "Malmesbury")
  {
    code = "CK";    
  }else if(town == "Cape Town")
  {
    code = "CA";    
  }else
  {
    code = "CF"; 
  }
  let list = [];
  for(let c of cars)
  {
    if(c["reg_number"].split(" ")[0] == code)
    {
      list.push(c);
    }
  }
  
  return list;
}

function numberOfCars(colour, town)
{
  var cars = [ {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CL 61045"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 16875"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CK 32655"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "EcoSport",
  "reg_number": "CL 11318"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CJ 16103"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CL 42789"
  },  {
  "color": "blue",
  "make": "Volkswagen",
  "model": "Jetta",
  "reg_number": "CA 46977"
  },  {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CY 25661"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CY 35475"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CY 54886"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CJ 16455"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 57166"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
  },  {
  "color": "blue",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CY 98904"
  },  {
  "color": "white",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CF 75599"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CA 5510"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Focus",
  "reg_number": "CF 75586"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CA 46137"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CK 22692"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CF 33543"
  },  {
  "color": "red",
  "make": "Volkswagen",
  "model": "Touran",
  "reg_number": "CA 94890"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 82252"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Yaris",
  "reg_number": "CL 9538"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CF 62002"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CJ 67577"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CA 77852"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CY 52435"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CL 76173"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CL 38315"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CA 34015"
  }, {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 41166"
}];
  
  let code = "";
  if(town == "Paarl")
  {
    code = "CJ";    
  }else if(town == "Bellville")
  {
    code = "CY";    
  }else if(town == "Stellenbosch")
  {
    code = "CL";    
  }else if(town == "Malmesbury")
  {
    code = "CK";    
  }else if(town == "Cape Town")
  {
    code = "CA";    
  }else
  {
    code = "CF"; 
  }
  
  let list = [];
  for(let c of cars)
  {
    if(c["color"] == colour && c["reg_number"].split(" ")[0] == code)
    {
      list.push(c);
    }
  }
    
 return list;
}

function numberOfCarsPerModel(colour,model,town)
{
  var cars = [ {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CL 61045"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 16875"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CK 32655"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "EcoSport",
  "reg_number": "CL 11318"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CJ 16103"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CL 42789"
  },  {
  "color": "blue",
  "make": "Volkswagen",
  "model": "Jetta",
  "reg_number": "CA 46977"
  },  {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CY 25661"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CY 35475"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CY 54886"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CJ 16455"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 57166"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
  },  {
  "color": "blue",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CY 98904"
  },  {
  "color": "white",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CF 75599"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CA 5510"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Focus",
  "reg_number": "CF 75586"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CA 46137"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CK 22692"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CF 33543"
  },  {
  "color": "red",
  "make": "Volkswagen",
  "model": "Touran",
  "reg_number": "CA 94890"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 82252"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Yaris",
  "reg_number": "CL 9538"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CF 62002"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CJ 67577"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CA 77852"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CY 52435"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CL 76173"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CL 38315"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CA 34015"
  }, {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 41166"
}];
  
  let code = "";
  if(town == "Paarl")
  {
    code = "CJ";    
  }else if(town == "Bellville")
  {
    code = "CY";    
  }else if(town == "Stellenbosch")
  {
    code = "CL";    
  }else if(town == "Malmesbury")
  {
    code = "CK";    
  }else if(town == "Cape Town")
  {
    code = "CA";    
  }else
  {
    code = "CF"; 
  }
  
  let list = [];
  for(let c of cars)
  {
    if(c["color"] == colour && c["reg_number"].split(" ")[0] == code && c["model"] == model)
    {
      list.push(c);
    }
  }
    
 return list;
}

function mostPopularColor(town)
{
    var cars = [ {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CL 61045"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 16875"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CK 32655"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "EcoSport",
  "reg_number": "CL 11318"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CJ 16103"
  },  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CL 42789"
  },  {
  "color": "blue",
  "make": "Volkswagen",
  "model": "Jetta",
  "reg_number": "CA 46977"
  },  {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CY 25661"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CY 35475"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CY 54886"
  },  {
  "color": "white",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CJ 16455"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 57166"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
  },  {
  "color": "blue",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CY 98904"
  },  {
  "color": "white",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CF 75599"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CA 5510"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Focus",
  "reg_number": "CF 75586"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CA 46137"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CK 22692"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CF 33543"
  },  {
  "color": "red",
  "make": "Volkswagen",
  "model": "Touran",
  "reg_number": "CA 94890"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 82252"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Yaris",
  "reg_number": "CL 9538"
  },  {
  "color": "white",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CF 62002"
  },  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CJ 67577"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CA 77852"
  },  {
  "color": "orange",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CY 52435"
  },  {
  "color": "blue",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CL 76173"
  },  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CL 38315"
  },  {
  "color": "blue",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CA 34015"
  }, {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 41166"
 }];
  
  let num = 0;
  let col = "";
  for(let c of cars)
  {
    let l = numberOfCars(c["color"], town)
    if(l.length > num)
    {
      num = l.length;
      col = c["color"];
    }
  }
  
  return col;
}