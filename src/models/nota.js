class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    calcularMediaCA() {
        const media = (parseFloat(this.calcularMediaFinal()));
        if (media >= 9) {
            return "SS";
        } else if (media >= 7.5 && media < 9) {
            return "MS";
        } else if (media >= 6 && media < 7.5) {
            return "MM";
        } else if (media >= 4 && media < 6) {
            return "MI";
        } else {
            return "II"
        }
    }
}

module.exports = Nota;