let numeroAlunos = 5

let listaAlunos = ["ZERO", "Adriano", "Isa", "Ricardo","Aline"]

for (let contador = 0; contador < numeroAlunos; contador++) {


    if (contador == 0) {
        console.log(contador + ": ZERO: " + listaAlunos [contador]) // Concatenação
    } else if (contador % 2 == 1) {
        console.log(`${contador}: ÍMPAR: ${listaAlunos [contador]}`) // Interpolação - Template Strings
    } else {
        console.log(`${contador}: PAR: ${listaAlunos [contador]}`)
    }
}