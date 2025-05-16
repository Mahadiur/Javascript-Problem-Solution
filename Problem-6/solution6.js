// width
let widthInput=Number(prompt('Enter Width:'));
//  height
let heightInput=Number(prompt('Enter Height:'));

// Define Function
function isLandscape(width,height){
    if(width > height){
        console.log('Landscape');
    }else{
        console.log('Portrait');
    }
}

// Function Call
isLandscape(widthInput,heightInput);