

/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler

// step 3 - collect all necessary references
// step 2 - random color generator function

// step 4 - handle the click event

window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click',function() {
        const bgColor = generateRGBcolor();
        root.style.backgroundColor = bgColor;
    });

}
// Step--> 2. Random Color generator function
function generateRGBcolor() {
    //rgb(0,0,0), rgb(256, 256, 256)
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;

}