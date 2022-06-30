const price1 = document.getElementById("firstPrice");
const price2 = document.getElementById("secondPrice");

const size1 = document.getElementById("firstSize");
const size2 = document.getElementById("secondSize");


const result1 = document.getElementById("outputCompare1");
const result2 = document.getElementById("outputCompare2");

const btn = document.querySelector(".btnInput");
const btn2 = document.querySelector(".btnInput2");
const winner = document.getElementById("outputWinner");



 const start = function () {
  const size1Area = ((size1.value / 2) ** 2 * Math.PI).toFixed();
  const size2Area = ((size2.value / 2) ** 2 * Math.PI).toFixed();

  const price1forOne = (price1.value / size1Area).toFixed(2);
  const price2forOne = (price2.value / size2Area).toFixed(2);
  result1.classList.remove("hidden") && result2.classList.remove("hidden")
      result1.innerText = `${price1forOne} Ft/cm²`;
      result2.innerText = `${price2forOne} Ft/cm²`;

  if (price1forOne < price2forOne) {
    winner.innerText = `Az első pizza éri meg jobban`;
  } else if (price1forOne > price2forOne) {
    winner.innerText = `A második pizza éri meg jobban`;
  }

  if (
    price1.value <= 0 ||
    price2.value <= 0 ||
    size1.value <= 0 ||
    size2.value <= 0
  ) {
    alert(
      "Írj be mindenhova pozitív számokat az eredményhez"
    ) 
  }else {
      btn2.classList.remove("hidden");
  
  }
} 



btn.addEventListener("click", start);

btn2.addEventListener("click", function () {
    document.getElementById("firstPrice").value = ""
    document.getElementById("secondPrice").value = ""
    document.getElementById("firstSize").value = ""
    document.getElementById("secondSize").value = ""


  result1.innerText = "";
  result2.innerText = "";
  winner.innerText = ""
  btn2.classList.add("hidden")
});
