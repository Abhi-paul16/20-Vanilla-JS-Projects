//getting all elements
let Currency_One_EL = document.getElementById('Currency-one');
let Currency_Two_EL = document.getElementById('Currency-two');
let Amount_One = document.getElementById('amount-one');
let Amount_Two = document.getElementById('amount-two'); 
let Swap = document.getElementById('swap-btn');
let rate_display = document.getElementById('rate-display');


const Calculator = ()=>{

    let Currency_One = Currency_One_EL.value;
  let Currency_Two = Currency_Two_EL.value

let api_key  = "a115f2fb7ada46131062f7dd";

let url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${Currency_One}`;

fetch(url).then((response=>{
    return response.json()
})).then((data)=>{
    console.log(data)
    const rate = data.conversion_rates[Currency_Two];
    rate_display.innerHTML = `1 ${Currency_One} = ${rate} ${Currency_Two} `
    Amount_Two.innerHTML = (parseInt( Amount_One.value) * rate).toFixed(2);

})

}


//swap btn 

const SwapCurrency = ()=>{
    const temp = Currency_One_EL.value;
    Currency_One_EL.value = Currency_Two_EL.value;
    Currency_Two_EL.value = temp;
    Calculator()

}

Swap.addEventListener('click' , SwapCurrency)

//event listners

Currency_One_EL.addEventListener('change' , Calculator)
Currency_Two_EL.addEventListener('change', Calculator)
Amount_One.addEventListener('input' , Calculator)


Calculator();