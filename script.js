const container = document.querySelector("#container")
const restart = document.getElementById("restart")
const change_grid = document.getElementById("change-grid")
const menu = document.getElementById("menu")
let eraser = document.getElementById("eraser")
let paint = document.getElementById("paint");
const color = menu.querySelector("input");
let rainbow = document.getElementById("rainbow")


createGrid(16);



function resetGrid(){//establece el tamaño de la cuadrilla
    let box = container.querySelectorAll("div")

    box.forEach(box => box.remove())


}

function setGrid(){
    let grid = prompt("Squares per size") //pregunta un num
    let newGrid = parseInt(grid);
    console.log(typeof newGrid)
    if (newGrid > 64){
        
        alert("The number must be lesser than 100");

    }
    else if(grid != null && grid != ""){
        resetGrid();
        createGrid(newGrid)
    }


}


function createGrid(bpz){

    resetGrid()

    for (let i = 0; i < bpz * bpz; i++) {//spamea los cubos a lo largo de la cuadrilla

        const div = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${bpz}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${bpz}, 1fr)`;
        div.setAttribute("style", "box-sizing: border-box; min-width: 5px; min-height: 5px;");
        container.append(div); 
        
        color.addEventListener("change", () => {
            
            let div = div.classList.add("div");
            div.style.backgroundColor = `${color.value}`

        })


        function paintGrid(){
            div.addEventListener("mouseover" , () => {
                div.style.backgroundColor = `${color.value}`
            })
        }

        function eraseGrid(){
            div.addEventListener("mouseover", ()=>{
                div.style.backgroundColor = `white`;
            })
        }        

        function rainbowGrid(){
            let maxVal = 0xFFFFFF; // 16777215
            let randomNumber = Math.random() * maxVal; 
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);   

        
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = `#${randColor.toUpperCase()}`
            })
        }

        function clearGrid(){
            
            div.style.backgroundColor = `white`
            
        }

        

        paint.addEventListener("click", paintGrid)

        rainbow.addEventListener("click", rainbowGrid)

        eraser.addEventListener("click", eraseGrid)

        restart.addEventListener("click", clearGrid)
    

        }
    
    }
change_grid.addEventListener("click", setGrid) //ejecuta la funcion que hace el tamaño




