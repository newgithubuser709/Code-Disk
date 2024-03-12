var random = document.getElementById("random"),
    min = 10,
    max = 15;

let sum = (max - min + 1);
// 30 - 10 + 1 + 21

let randomNum = Math.random() * (sum) + min; 
// 0.0 * sum = 0 + min = 10  
// 0.9 * sum = 20 + min = 30  

random.innerHTML = Math.floor(randomNum);

// The random() function generates a random value between 0 and 1. To obtain a random value within a specific range, you can use the following mathematical function: multiply the random lowest value (0) by the difference between the maximum (30) and minimum (10) values, then add the minimum value (10). The equation is as follows: Math.random() * (max(30) - min(10) + 1) + min(10). This formula yields a result of 10 when the random value is at its lowest (0). Similarly, when the random value is at its highest (0.999...), the result will be 30. This is because 0.999... multiplied by the difference between the maximum (30) and minimum (10), plus the minimum value (10), equals 30.