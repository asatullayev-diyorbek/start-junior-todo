//1
let input = document.querySelector("input");
let button = document.querySelector("button");
let toldiruvchi = document.querySelector(".toldiruvchi");

//2
button.addEventListener("click", function bosish(){
    //3
    if(input.value == ""){
        alert("Bo'sh bo'lihi mumkun emas!");
    } 
    // 4
    else {
        let vazifa = {
            nomi: input.value,
            holat: false
        }
        console.log(vazifa)

        // 5
        let vazifalar = window.localStorage.getItem("vazifalar");

        // 6
        if (vazifalar == undefined){
            vazifalar = new Array();
        }
        else{
            vazifalar = JSON.parse(vazifalar);
        }

        // 7
        vazifalar.push(vazifa);
        console.log(vazifalar)

        // 8
        window.localStorage.setItem("vazifalar", JSON.stringify(vazifalar));
    } 
    input.value = "";
    window.location.reload();
})

function chiqarish(){
    let vazifalar = window.localStorage.getItem("vazifalar");
    if (vazifalar == undefined){
        vazifalar = new Array();
    }
    else{
        vazifalar = JSON.parse(vazifalar);
    }

    console.log(vazifalar)
    let bajarilgan = 0;

    vazifalar.forEach(vazifa => {
        console.log(vazifa)
        bajarilgan += vazifa.holat;
    })

    console.log(bajarilgan)

    toldiruvchi.style.width = 100 / vazifalar.length * bajarilgan + "%";
}
chiqarish()
