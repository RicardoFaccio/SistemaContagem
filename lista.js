let numeroAlunos = 5

for (let contador = 0; contador < numeroAlunos; contador++) {


    if (contador == 0) {
        console.log(contador + ": ZERO") // Concatenação
    } else if (contador % 2 == 1) {
        console.log(`${contador}: ÍMPAR`) // Interpolação - Template Strings
    } else {
        console.log(`${contador}: PAR`)
    }
}