function adjustLine(x, y, length, angle, color, id) {
  var delta = 90 - angle;
  var line = document.getElementById(id);
  var styles = 'border: 1px solid ' + color + ";"
             + 'width: ' + length + 'px; '
             + 'height: 0px; '
             + 'transform: rotate(' + angle + 'deg); '  
             + 'position: absolute; '
             + 'top: ' + y + 'px; '
             + 'left: ' + x + 'px; ';
  line.setAttribute('style', styles);  
}

function adjustGradient(angle, id) {
  var gradient_box = document.getElementById(id);
  gradient_box.style.background = 'linear-gradient('
                                + angle + 'deg,'
                                + 'red 0%,'
                                + '#ff9a9e 50%,'
                                + '#ff9a9e 50%,'
                                + 'orange 100%)';
}

adjustLine(-150, 100, 600, 45, "black", "gradient-line");
adjustGradient(45, "js-gradient");

var angle_form = document.getElementById("angle");
var ang = document.getElementById("ang");
angle_form.oninput = function() {
  var angle = angle_form.value ? parseInt(angle_form.value) : 45;
  adjustLine(-150, 100, 600, angle, "black", "gradient-line");
  adjustGradient(angle, "js-gradient");
  ang.textContent = angle;
}

function adjustGradientPercentages(angle, id) {
  var gradient_box = document.getElementById(id);
  gradient_box.style.background = 'linear-gradient('
                                + angle + 'deg,'
                                + 'white 0%,' + 'white 40%,'
                                + 'orange 40%,' + 'orange 60%,'
                                + 'white 60%,' + 'white 100%)';
}

function adjustGradientPixels(angle, id) {
  var gradient_box = document.getElementById(id);
  gradient_box.style.background = 'linear-gradient('
                                + angle + 'deg,'
                                + 'white 0%,' + 'white 80px,'
                                + 'orange 80px,' + 'orange 120px,'
                                + 'white 120px,' + 'white 100%)';
}

adjustGradientPercentages(0, "percentage-gradient");
adjustGradientPixels(0, "pixel-gradient");

var angle_form2 = document.getElementById("angle2");
var ang2 = document.getElementById("ang2");
angle_form2.oninput = function() {
  angle2 = angle_form2.value ? parseInt(angle_form2.value) : 45;
  adjustGradientPercentages(angle2, "percentage-gradient");
  adjustGradientPixels(angle2, "pixel-gradient");
  ang2.textContent = angle2;
}