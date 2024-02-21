function calculateResistances() {
    var vcc = parseFloat(document.getElementById('vcc').value);
    var beta = parseFloat(document.getElementById('beta').value);
    var icq = parseFloat(document.getElementById('icq').value);
    var f0 = parseFloat(document.getElementById('f0').value);

    var vem = 0.1 * vcc;
    var re = vem / icq;
    var rc = 4 * re;
    var vbm = vem + 0.7;
    var vcm = vcc - rc * icq;
    var vceq = vcm - vem;
    var ip = 10 * icq / beta;
    var rb2 = vbm / ip;
    var rb1 = (vcc - vbm) / (11 * icq / beta);
    var c = 1 / (19.86 * rc * f0) * 1e9; // Convertir en nF

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h3>RESULTATS :</h3>" +
                            "<p>Re = " + re.toFixed(2) + " ohms</p>" +
                            "<p>Rc = " + rc.toFixed(2) + " ohms</p>" +
                            "<p>Rb1 = " + rb1.toFixed(2) + " ohms</p>" +
                            "<p>Rb2 = " + rb2.toFixed(2) + " ohms</p>" +
                            "<p>Vem = " + vem.toFixed(2) + " volts</p>" +
                            "<p>Vbm = " + vbm.toFixed(2) + " volts</p>" +
                            "<p>Vcm = " + vcm.toFixed(2) + " volts</p>" +
                            "<p>Vceq = " + vceq.toFixed(2) + " volts</p>" +
                            "<p>C = " + c.toFixed(2) + " nF</p>";
}

function resetFields() {
    document.getElementById('vcc').value = '';
    document.getElementById('beta').value = '';
    document.getElementById('icq').value = '';
    document.getElementById('f0').value = '';
    document.getElementById('results').innerHTML = '';
}
