// ini js
function hitungBmi() {
    var angka1 = parseFloat(document.getElementById("berat-badan").value);
    var angka2 = parseFloat(document.getElementById("tinggi-badan").value);
    var konversiKeMeter = angka2 / 100;
    var hasil = angka1 / (konversiKeMeter ** 2);

    var printOutput = document.getElementById("hasil-output");
    printOutput.innerHTML = hasil.toFixed(2);

    if (hasil <= 18.5) {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Kekurangan Berat badan";
    }
    else if (hasil <= 24.9 ) {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Normal (ideal)";
    }
    else if (hasil <= 29.9) {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Kelebihan berat badan";
    }
    else  {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Kegemukan (obesitas)"
    }

    return false;
}

function reset() {
    var reset = document.getElementsByTagNameNS("input");
    reset.innerHTML

}