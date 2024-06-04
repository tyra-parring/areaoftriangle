// function triangleArea(base, height) {
//     return 0.5 * base * height;
//   }
  
//   let baseLength = 10;
//   let heightLength = 5;
//   let area = triangleArea(baseLength, heightLength);
//   console.log(`The area of the triangle is: ${area}`);
  
let calculateButton = document.querySelector('button');


document.addEventListener('DOMContentLoaded', function() {
    calculateButton.addEventListener('click', function() {
    calculateArea();
});
});



  function calculateArea() {
    let base = document.getElementById('baseInput').value;
    let height = document.getElementById('heightInput').value;

    let area = 0.5 * base * height;

    document.getElementById('result').value = area;
}
