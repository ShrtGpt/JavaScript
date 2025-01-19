function calculateBMI(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height = height * 12 * 0.025 //height in meter
    var bmi = (weight/Math.pow(height, 2));
    document.getElementById('bmi').value = Math.round(bmi);

}

function resetForm(){
    document.getElementById('bmi').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}