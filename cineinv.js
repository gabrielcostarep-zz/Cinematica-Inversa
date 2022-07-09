function calcular () {
    let l1 = document.getElementById("elo1").value;
    let l2 = document.getElementById("elo2").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    if (l1 == "" || l2 == "" || x == "" || y == "") {
        document.getElementById("resultado").innerText = "Erro: Preencha todos os campos.";
    } else {
        let a1 = Math.acos(x/Math.sqrt(Math.pow(x,2)+Math.pow(y,2)))-Math.acos((Math.pow(x,2)+Math.pow(y,2)+Math.pow(l1,2)-Math.pow(l2,2))/(2*l1*Math.sqrt(Math.pow(x,2)+Math.pow(y,2))));
        a1 = a1*(180/Math.PI);
        a1 = a1.toFixed(2);

        let a2 = Math.acos((Math.pow(l1,2)+Math.pow(l2,2)-(Math.pow(x,2)+Math.pow(y,2)))/(2*l1*l2));
        a2 = 180-(a2*(180/Math.PI));
        a2 = a2.toFixed(2);
        
        if (isNaN(a1) || isNaN(a2) ) {
            document.getElementById("resultado").innerText = `Erro: coordenada inválida.`;
        } else {
            document.getElementById("resultado").innerText = `Resultado: Theta 1 = ${a1} graus e Theta 2 = ${a2} graus.`;
        }
    }
}