const zadanie1 = () => { 
    //funkcje wywołuje się tak samo jak normalną: zadanie1();
    //w tej funkcji napisz rozwiązanie do zadania1
    //przydatne: value, innerText
    let input = document.getElementById('zadanie1_input');
    let output = document.getElementById('zadanie1_output');
    output.innerText = input.value;
}

const zadanie2 = (() => {
    //jest to funkcja samowywołująca się
    //w tej funkcji napisz rozwiązanie do zadania2
    //przydatne: appendChild, createElement, foreach
    const tablica = ["AAAAA", "BBBB", "CCC", "DD", "E"];
    let output = document.getElementById('zadanie2_output');
    tablica.forEach(element => {
        let p = document.createElement('p');
        p.innerText = element;
        output.appendChild(p);
    })
})();

const zadanie3 = () => {
    //funkcje wywołuje się tak samo jak normalną: zadanie3();
    //w tej funkcji napisz rozwiązanie do zadania3
    //przydatne: value, switch
    let val1 = document.getElementById('zadanie3_fn').value;
    let val2 = document.getElementById('zadanie3_sn').value;
    let op = document.getElementById('zadanie3_select').value;
    let output_area = document.getElementById('zadanie3_output');
    let output = 0;

    switch(op){
        case "+":
            output = +val1 + +val2;
            break;
        case "-":
            output = val1 - val2;
            break;
        case "*":
            output = val1 * val2;
            break;
        case "/":
            output = val1 / val2;
            break;
        default:
            break;
    }
    output_area.innerText = output;
}

const zadanie4 = () => {
    //funkcje wywołuje się tak samo jak normalną: zadanie4();
    //w tej funkcji napisz rozwiązanie do zadania4
    //przydatne: appendChild, createElement, foreach, ++
    const tablica = [
        {imie: "Jan", nazwisko: "Kowalski", miasto: "Szczecin"},
        {imie: "Rafał", nazwisko: "Borek", miasto: "Warszawa"},
        {imie: "Karolina", nazwisko: "Possumowska", miasto: "Szczecin"},
        {imie: "Adam", nazwisko: "Biały", miasto: "Koszalin"},
        {imie: "Karol", nazwisko: "Bułeczka", miasto: "Gdańsk"},
        {imie: "Filip", nazwisko: "Pasut", miasto: "Gdynia"},
        {imie: "Zbigniew", nazwisko: "Bonson", miasto: "Szczecin"},
        {imie: "Krystian", nazwisko: "Krajewski", miasto: "Warszawa"},
        {imie: "Bartek", nazwisko: "Czuchacz", miasto: "Gdańsk"},
        {imie: "Mikołaj", nazwisko: "Kant", miasto: "Wrocław"}
    ];

    let input = document.getElementById('zadanie4_input').value;
    let output_area = document.getElementById('zadanie4_output');
    output_area.innerHTML = "";
    let index = 1;
    tablica.forEach(element => {
        if(element.miasto === input){
            let p = document.createElement('p');
            p.innerText = `${index}. ${element.imie} ${element.nazwisko}`;
            output_area.appendChild(p);
            index++;
        }
    })
}
