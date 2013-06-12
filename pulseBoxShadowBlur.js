var pulseBoxShadowBlurCounter = 0;
var pulseBoxShadowBlurDirection;

function pulseBoxShadowBlur(pulseElement,max,color,delayTime){
var cssInput = '0px 0px '+pulseBoxShadowBlurCounter+'px '+color;
$(pulseElement).css('box-shadow', cssInput);

    if(pulseBoxShadowBlurCounter == max){
        pulseBoxShadowBlurDirection = 1; // backwards
    }

    if(pulseBoxShadowBlurCounter == -5){ // negative num for pause at 0 time
        pulseBoxShadowBlurDirection = 0; // forward
    }

    if(pulseBoxShadowBlurDirection == 0){ 
        pulseBoxShadowBlurCounter++;
    }else{
        pulseBoxShadowBlurCounter--;
    }

	setTimeout(function() { pulseBoxShadowBlur(pulseElement, max, color, delayTime); }, delayTime); // loop
}
