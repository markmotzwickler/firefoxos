window.onloan = function() {
    window.addEventListener("deviceorientation", handleOrientation, true);
};

var alpha_old = 0;
var beta_old = 0;
var gamma_old = 0;
var battery = navigator.battery || navigator.mozBattery;

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    
    if ( (alpha_old + 50 < alpha) || (beta_old + 50 < beta) || (gamma_old + 50 < gamma) ||
         (alpha_old - 50 > alpha) || (beta_old - 50 > beta) || (gamma_old - 50 > gamma) )
          navigator.vibrate(100);

    alpha_old = alpha;
    beta_old = beta;
    gamma_old = gamma;
    
    document.getElementById("alpha").innerHTML = alpha;
    document.getElementById("beta").innerHTML = beta;
    document.getElementById("gamma").innerHTML = gamma;
}