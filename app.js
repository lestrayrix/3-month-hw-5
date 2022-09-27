const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const won = document.querySelector("#won");
console.log(som,usd,won)

const convert  =(elem , target ,target2) =>{
    const req =new XMLHttpRequest()
    elem.addEventListener("input" , () =>{
            req.open("GET", "data.json");
            req.setRequestHeader("Content-type" , "application/json")
            req.send()
            req.addEventListener("load" , () =>{
                const response  =JSON.parse(req.response)
                if(elem === som){
                    target.value = (elem.value / response.usd).toFixed(2)
                    target2.value = (elem.value / response.won).toFixed(2)
                }
                else if(elem === usd){
                    target.value = (elem.value * response.usd).toFixed(2)
                    target2.value = (elem.value * response.usd / response.won).toFixed(2)
                }
                else if(elem === won){
                    target.value = (elem.value * response.won / response.usd).toFixed(2)
                    target2.value = (elem.value * response.won).toFixed(2)
                }

                elem.value === ""  && (target.value = "")
                elem.value === ""  && (target2.value = "")

            })
        }
    )}
convert(som, usd, won)
convert(usd, som,won)
convert(won,usd, som)

