
const randomColor = function(){

    const hex = "123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
    
        color += hex[Math.floor(Math.random() * 16)];
    }
        return color;
};

    let Interval;

    const changeColor = function(){

        Interval = setInterval(changeTheColor, 1000)

        function changeTheColor(){

            document.body.style.backgroundColor = randomColor();
        }
    }

    const stopChangeColor = function(){
        if (!Interval) {} // if it is not defined it will start a new function....
        clearInterval(Interval)
        Interval = null; // cleaning the code is very important
    }
    

    document.querySelector("#start").addEventListener("click", changeColor)

    
    document.querySelector("#stop").addEventListener("click", stopChangeColor)