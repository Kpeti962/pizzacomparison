
const price1 = document.getElementById("firstPrice");
const price2 = document.getElementById("secondPrice");

const size1 = document.getElementById("firstSize");
const size2 = document.getElementById("secondSize");

const result1 = document.getElementById("outputCompare1");
const result2 = document.getElementById("outputCompare2");

const btn = document.querySelector(".btnInput");

const winner = document.getElementById("outputWinner")





btn.addEventListener("click", function(){
   const size1Area = (((size1.value/2)**2)*Math.PI).toFixed()
   const size2Area = (((size2.value/2)**2)*Math.PI).toFixed()

   const price1forOne = (price1.value / size1Area).toFixed(2)
   const price2forOne = (price2.value / size2Area).toFixed(2)

   console.log(size1Area);
   console.log(size2Area);

   console.log(price1forOne);
   console.log(price2forOne);

    result1.innerText = `${price1forOne} Ft/cm²`
    result2.innerText = `${price2forOne} Ft/cm²`

if(price1forOne > price2forOne){
    winner.innerText = `Az első pizza jobban megéri te sóher geci`
} else{
    winner.innerText = `A második pizza éri meg jobban, de ha a drágábbat választod most az egyszer, attól még sóher maradsz`
}
})


