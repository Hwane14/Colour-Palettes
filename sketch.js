/// Generating computational palettes.
/// by Prashanth Thattai 2023 <p.thattairavikumar@gold.ac.uk> 
/// * Adapted from Evan Raskob <e.raskob@gold.ac.uk>
/// * modified by Hamidou Wane <hwane001@campus.goldsmiths.ac.uk>

/// - Demonstrating using knowledge of colors, arrays, functions and loops to create palettes.
/// - Use this as a template for your assignment.


/// _____________ Code guide__________________________: 

/// Different palettes are implemented in separate functions
/// so you can choose which to run in your main draw() loop.
/// Each one takes in a start x and y coordinate and the size
/// of the palette to draw on the screen, so you can draw 
/// multiple palettes at the same time in different areas.

/// Look for lines that start with '// TASK #'. Compare it 
/// the brief to understand instructions for the task.

/// Look for lines that start with '// FINISH THIS' and type code there
/// ________________________________________________________________


/// ________ SPACE FOR DISCRETIONARY WORK ________ ///
/// Please clearly mention which two problems you have solved for discretionary work.

/// 1. Creating differently shaped patterns by copying the drawPaletteRectPattern() function and renaming it drawPaletteShapePattern().

/// 2. Developing more interactivity using sliders (Shape size & saturation)
/// ________________________________________________________________



//--------------------------------------------------------------
//--------------------------------------------------------------
/// Global variables

// Example palette variable
var monochromaticPalette;
  
// My palette variables
var firstPalette;
var secondMonochromaticPalette;
var dimmedColourPalette;
var trianglePalette;

// Slider variables
var spacingSlider;
var hueSlider;
var shapeSizeSlider;
var intervalSlider;
var saturationSlider;



/// _______Functions start ________ ///

// A monochromatic color scheme. That means it is all the same colour (hue),
// with different shades represented by using fixed intervals of brightness.
// Note that the saturation stays the same throughout.

/**
 * @param {Number} hue Hue angle for this color range, from 0-359
 * @param {Number} sat how "colorful" or gray this color is, from 0-100 
 * @param {Number} numberOfColors number of colors in this palette
 * @returns {Array} An array of colour values
 */
function createMonochromaticPalette(hue, sat, numberOfColors)
{
  var palette = []; // empty array to fill with colours and return at end
  var maxBrightness = 100; // max brightness value for a colour

  colorMode(HSB); // correct color mode for color() function

  // for all shades of this colour, calculate colour values and add to array
  for (var colorIndex=0; colorIndex < numberOfColors; colorIndex++)
  {
    var currentBrightness = maxBrightness * colorIndex/numberOfColors;
    var currentColor = color(hue, sat, currentBrightness);
    
    palette.push(currentColor);
  }

  // return array of colours
  return palette;
}


///---------------------------------------------------------
/// TASK 3 : Finish this function! See below:
///---------------------------------------------------------

// Analogous colors: This is a polychromatic color scheme using
// fixed intervals of changing hue angles to generate a palette
// of multiple hues (colors) that are close to one another.
//
// In other words, to create a palette of 6 colours, start with
// a hue angle (say 0) and increase it by a fixed amount (say
// 30 degrees) 6 times to create 6 different color swatches of
// hues 0, 30, 60, 90, 120, 150. Brightness and saturation stay the same.


/**
The createAnalogousPalette() takes following 5 arguments and returns an array of color values.
 * @param {Number} hue. Hue angle for this color range, from 0-359
 * @param {Number} sat. How "colorful" or gray this color is, from 0-100 
 * @param {Number} bright. Brightness of colours, from 0-255
 * @param {Number} hueInterval. Interval between hue values for each colour (hue is 0-360 total) 
 * @param {Number} numberOfColors. Number of colors in this palette
 * @returns {Array} An array of colour values
 */

// FINISH THE FUNCTION DEFINITION: 
function createAnalogousPalette(hue, sat, bright, hueInterval, numberOfColors)
 {
  var palette = []; // empty array to fill with colours and return at end

  colorMode(HSB); // correct color mode for color() function
     

     for (var colorIndex=0; colorIndex < numberOfColors; colorIndex++)
     {

      // 2. FINISH THIS: Calculate the current hue at this point in the loop.
      var currentHue = hue + hueInterval * colorIndex;// Fix this! It's not 0.

      // print(currentHue) Print and check that hue value is as expected
  
      // 3. FINISH THIS: calculate current colour
      var currentColor = color(currentHue % 360, sat, bright); 

      // 4. FINISH THIS: add the colour to the palette array 
      // your code goes here...
      palette.push(currentColor);
     }
  

     // 5. FINISH THIS: return the array with palette colors
     // ...
     return palette;
}

//--------------------------------------------------------------
//--------------------------------------------------------------
// TASK 2 : Finish the draw function! See below:
//--------------------------------------------------------------


/**
* Draw any array of colours as rectangles on the screen, i.e. a palette.
*
* @param {Array} palette. Array of colour values to draw
* @param {Number} startX. Start x coordinate for palette
* @param {Number} startY. Start y coordinate for palette
* @param {Number} size. Size of the entire palette to draw on the screen in pixels
* @returns {None} 
*/

// 1. FINISH THE FUNCTION DEFINITION: 
function drawPalette(palette, startX, startY, size)
{
    // 2. FINISH THIS: Find the correct number colors in the palette. 
    var numberOfColors = palette; // Hint: Use array!

    // size of each of the palette's color swatches in pixels
    var swatchSize = size/numberOfColors.length; 

    push(); // save drawing state
    translate(startX,startY); // move to start x,y position

  for (var colorIndex = 0; colorIndex < numberOfColors.length; colorIndex++)
  {
      noStroke();
      rectMode(CORNER);

      // 3. FINISH THIS: Choose the right palette color for the fill function.
      fill(numberOfColors[colorIndex], 100, 100);
      // 4. FINISH THIS: Create the rectangle. 
      // Read code above carefully and choose the right width and breadth variables for the rectangle. 
      // Always create the rectangle at same (x,y) points as the screen will be translated.
      rect(startX, startY, swatchSize);
      
      // move drawing cursor to next position for next loop
      translate(swatchSize,0);
  }
    pop(); // return to original drawing state
}

//----------------------

// TASK 5: FINISH THIS: complete the drawPaletteRectPattern() function below to draw a row of rectangular
//  colour swatches with some space between them:
//--------------------------------------------------------------

/**
* Draw a pattern (row) of colourful boxes, with spacing between them using array of colours, 
*   e.g. a palette.
*
* @param {Array} palette. Array of colour values to draw
* @param {Number} startX. Start x coordinate for palette
* @param {Number} startY. Start y coordinate for palette
* @param {Number} rectSize. Size of each rectangular colour area to draw, in pixels
* @param {Number} rectSpacing. Spacing between rectangular colour areas
*/

// 1. FINISH THE FUNCTION DEFINITION: 
function drawPaletteRectPattern(palette, startX, startY, rectSize, rectSpacing)
{
    // 2. CORRECT THIS: Find the correct total number colors in the palette. 
    var numberOfColors = palette; // Hint: Use array!

    // size of each of the palette's color swatches in pixels
    var swatchSize = rectSize; 

    push(); // save drawing state
    translate(startX,startY); // move to start x,y position

  for (var colorIndex=0; colorIndex < numberOfColors.length; colorIndex++)
  {
      noStroke();
      rectMode(CORNER); // draw based on top corner

      // 3. FINISH THIS: Choose the right palette color for the fill function.
      fill(numberOfColors[colorIndex], 100, 100, 0.2);
      // 4. FINISH THIS: Create the rectangle. 
      // Read code above carefully and choose the right width and breadth variables for the rectangle. 
      // Always create the rectangle at same (x,y) points as the screen will be translated.
      rect(startX, startY, rectSize);
      

      // 5. FINISH THIS: move drawing cursor to next swatch's position for next loop.
      // Take into account the size of this swatch and spacing between.
      // (see function above)
      translate(swatchSize + rectSpacing, 0); 
  }
    pop(); // return to original drawing state
}

function drawPaletteShapePattern(palette, startX, startY, triangleSize, triangleSpacing)
{
    
    // 2. CORRECT THIS: Find the correct total number colors in the palette. 
    var numberOfColors = palette; // Hint: Use array!

    // size of each of the palette's color swatches in pixels
    var swatchSize = triangleSize; 

    push(); // save drawing state
    translate(startX,startY); // move to start x,y position

    for (var colorIndex=0; colorIndex < numberOfColors.length; colorIndex++)
  {

      // 3. FINISH THIS: Choose the right palette color for the fill function.
      fill(numberOfColors[colorIndex], 100, 100);
      // 4. FINISH THIS: Create the rectangle. 
      // Read code above carefully and choose the right width and breadth variables for the rectangle. 
      // Always create the rectangle at same (x,y) points as the screen will be translated.
      triangle(startX + swatchSize/2, startY, startX, startY + swatchSize, startX + swatchSize, startY + swatchSize);
      

      // 5. FINISH THIS: move drawing cursor to next swatch's position for next loop.
      // Take into account the size of this swatch and spacing between.
      // (see function above)
      translate(swatchSize + triangleSpacing, 0); 
  }
    pop(); // return to original drawing state
}




///-------------------------------------------
///----------SETUP----------------------------
///-------------------------------------------

function setup() {

    /// You can change the size of your drawing canvas if needed!
    createCanvas(800, 500);
  
    // We can use HSB mode as follows 
    // from (https://p5js.org/reference/#/p5/colorMode):
    // Setting colorMode(HSB) lets you use the HSB system instead.
    // By default, this is colorMode(HSB, 360, 100, 100, 1). 
    // You can also use HSL instead of HSB.

    colorMode(HSB);

    var hue = 60;
    var sat = 100;
    var bright = 50;
    var hueInterval = 15;
    var numberOfColors = 12;
    var sliderSize = 100;
    
    // Hue slider creation
    hueSlider = createSlider(0, 360 , 90);
    hueSlider.position(685, 330);
    hueSlider.size(sliderSize);
    
    // Interval slider creation
    intervalSlider = createSlider(5, 100, 50);
    intervalSlider.position(810, 330);
    intervalSlider.size(sliderSize);

    // Spacing Slider creation
    spacingSlider = createSlider(0, 40, 15);
    spacingSlider.position(245, 620);
    spacingSlider.size(sliderSize);
    
    // Saturation slider
    saturationSlider = createSlider(20, 100, 100);
    saturationSlider.position(735, 400);
    saturationSlider.size(sliderSize);
    
    // Shape size slider creation
    shapeSizeSlider = createSlider(10, 40, 25);
    shapeSizeSlider.position(380, 620);
    shapeSizeSlider.size(sliderSize);
    
    // Example palette
    monochromaticPalette = createMonochromaticPalette(hue, sat,numberOfColors);
    
    
}

/// draw the palettes.

function draw() {

    background(0);
    noStroke();
    
    // Palette colour variables
    firstPalette = createAnalogousPalette(hueSlider.value(), saturationSlider.value(), 100, intervalSlider.value(), 10);
    secondMonochromaticPalette = createMonochromaticPalette(hueSlider.value(), saturationSlider.value(), 10);
    dimmedColourPalette = createAnalogousPalette(0, 90, 60, 36, 10);
    trianglePalette = createAnalogousPalette(320, 100, 100, 135, 4);

    // Example palette
    fill(180); // gray
    textSize(16);
    text("Monochromatic", 5, 48-12); // an explanation, with a name for it
    drawPalette(monochromaticPalette, 10, 30, 200);
    
    // First analogous palette
    text("Analogous with hue = " + hueSlider.value() + ", interval = " + intervalSlider.value(), 5, 125);
    drawPalette(firstPalette, 5, 68, 200);
    
    // Monochromatic palette (3rd down)
    text("Adjustable Monochromatic", 5, 200);
    drawPalette(secondMonochromaticPalette, 5, 105, 200);
    
    // Adjustable squares palette
    text("Analogous with hue = 0, interval = 36", 5, 270);
    drawPaletteRectPattern(dimmedColourPalette, 5, 140, shapeSizeSlider.value(), spacingSlider.value()); 
    
    // Triangle palette
    text("Analogous with hue = 320, interval = 135, 4 colours", 5, 350);
    drawPaletteShapePattern(trianglePalette, 5, 180, shapeSizeSlider.value(), spacingSlider.value());
    
    // Slider titles
    text("Spacing slider", 5, 440);
    text("Hue slider", 446, 150);
    text("Shape size slider", 150, 440);
    text("Hue interval slider", 580, 150);
    text("Saturation slider", 490, 225);
 
   
    ///---------------------------------------------------------
    /// TASK 7 : Choose any two of the following control features 
    /// (e.g., hue, number of colors, intervals, spacing of rectangles) 
    /// and use slider values to change parameters in Palette creation 
    /// functions or palette drawing function. 
    /// Make appropriate changes to the variables above.
    /// NOTE: RECOMMEND TO TRY THIS AT THE END AFTER ALL THE CODE 
    /// IS COMPLETE AND WORKING. 
    ///---------------------------------------------------------
 
    
  
}
