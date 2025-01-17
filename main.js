

// function circleArea(radius) {
    
//     let pole = 2 * Math.PI * radius;
//     document.write("Pole koła o promieniu ", radius , " wynosi: ");
//     document.write(pole);
// }

// circleArea(prompt("Podaj wartość: "));

// function rectangleArea(a=1,b=1) {
//     document.write("Pole prostokąta o bokach: ",a, " oraz ", b, " wynosi:", a*b)

    
// }

// a=prompt("Podaj bok a:");
// b=prompt("Podaj bok b:");

// rectangleArea(a,b)



// min=1;
// max=20;

// function generateRandom(min , max) {
//     let ile = (max-min+1)/2
//     let liczy = 0 
//     for (let i = 0; i <10; i++) {
//         let liczba= Math.floor(Math.random()*(max-min+1)+min);
//         document.write(liczba, " ");
//         if (liczba>10) {
//             liczy++
//         }
         
//     }
//     if (liczy>=5) {
//         document.write(" Komunikat: Udało się")
//     }
//     else{
//         console.log("Niestety nie")
//     }
    
    
// }

// generateRandom(min, max)

function rentCost(days) {
    let koszt =0;
    if (days==1) {
        document.write("koszt pokoju 200zł/dzień. ")
        koszt = days*200
    }
    else{
        if (days>=2 && days<=3) {
            document.write("koszt pokoju 180zł/dzień. ")
            koszt = days*180
        }
        else{
            if (days>=4 && days<=7) {
                document.write("koszt pokoju 160zł/dzień. ")
                koszt = days*160
            }
            else{
                if (days>=8) {
                    document.write("koszt pokoju 150zł/dzień. ")
                    koszt = days*150
                }
            }
        }
    }
    let liczbatyg=Math.floor(days/7)
    for (let index = 0; index < liczbatyg; index++) {
        koszt= koszt -50;
        
    }
        

    return koszt;
    
}

days=prompt("Podaj liczbe dni: ")
document.write("Na ", days, " dni", " koszt wynosi: ", rentCost(days))

