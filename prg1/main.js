function volume()
{
    var vol;
    var radius = document.getElementById('radius').value;
    // radius = Math.abs(radius);
    vol = (4/3) * 3.14 * Math.pow(radius,3);
    vol = vol.toFixed(4);
    document.getElementById('volume').value=vol;
    return false;
}
window.onload = document.getElementById('Myform').onsubmit = volume;