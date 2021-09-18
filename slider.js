var image = ["./assets/images/1.jpg",
                "./assets/images/2.jpg" ,
                "./assets/images/3.jpg"
            ]
var container = document.querySelector('.container');
var index =0

function forward(){
    index++;
    if(index > image.length-1){
        index=0;
    }
    container.style.backgroundImage = `url(${image[index]})`
    

}
function backward(){
    index--;
    if(index < 0){
        index= image.length - 1;
    }
    container.style.backgroundImage = `url(${image[index]})`
      
}
