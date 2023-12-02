let height = prompt('Metres');
let weight = prompt('kg');
let BMI = weight / (height * height)
let netice;


if (BMI < 18) { 
    netice = 'Sizin BMI = ' + BMI + ' Siz ceki azligindan';
} else if (BMI < 20) {
    netice = 'Sizin BMI = ' + BMI + 'Sizin cekiniz azdir.';
} else if (BMI < 26) {
    netice = 'Sizin BMI = ' + BMI + 'Sizin cekiniz normaldir. Tebrikler!!!';
} else if (BMI < 28) {
    netice = 'Sizin BMI = ' + BMI + 'Sizin artiq cekiniz var.';
} else if (BMI < 31) {
    netice = 'Sizin BMI = ' + BMI + 'Sizin pis cekiniz var ';
} else if (BMI < 36) {
      netice = 'Sizin BMI = ' + BMI + 'Siz lap pis cekinis var ';
} else if (BMI > 41) {
   netice = 'Sizin BMI = ' + BMI + 'Siz tecili hekime gedin';
} else {
   netice = 'siz Melumat yoxdu'
}




document.getElementById('color').innerHTML = netice;