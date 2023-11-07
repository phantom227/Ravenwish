let r, size, p, multiplier;
var pattern = 1;

setup = () => {
    var canvas = createCanvas(windowWidth, windowHeight);
    //start of code from https://github.com/processing/p5.js/wiki/Positioning-your-canvas#making-the-canvas-fill-the-window
    canvas.style('display', 'block');
    //end of code from https://github.com/processing/p5.js/wiki/Positioning-your-canvas#making-the-canvas-fill-the-window
    pixelDensity(1);
    
}

draw = () => {
    fill(255);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
    multiplier = 10;
    
    //change the size of the dots
    size = map(mouseY, 0, height, 2.5, 1);
    
    //change the pattern
    pattern = map(mouseX, 0, width, 1, 10);
    //remove multiplier for first pattern
    if (round(pattern) == 1) {
        multiplier = 1;
    }
    
    //center the image
    var s = 0.55;
    var h = 1.9;
    var w = 3;
    
    if (width < 480) {
        s = 0.3;
        h = 3;
        w = 2;
    }
    
    translate(width/w, height/h);
    scale(s);
    
    //create the patterns
    for(var j = 1; j < 5; j++) {
        for(var i = 0; i < 90; i++) {
            push();
            rotate(radians(i * 4 * j));
            translate(0, 75 * j);
            rotate(radians(i * (round(pattern) * multiplier)));
            scale(j / 3);
            //start of code from https://p5js.org/reference/#/p5/translate
            translate(p5.Vector.fromAngle(millis() / 1000, 200));
            //end of code from https://p5js.org/reference/#/p5/translate
            scale(size);
            r = map(i, 0, 90, 50, 255);
            fill(0, r, 200);
            noStroke();
            ellipse(0, 0, 20);
            pop();
        }
    }
}

windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
}