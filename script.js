let state;
let operator1;
let operator2;
let result;
let operation;

let calculator = {
    numeorArray: new Array(),

    inicializacao: function () {
        state = 'inicializacao'
        this.display();
    },

    adicao: function () {
        operation = 'adição'
        state = 'operator2';
        this.numeorArray = [] //Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando
        console.log(this.numeorArray)
    },

    subtracao: function () {
        operation = 'subtracao'
        state = 'operator2';
        this.numeorArray = [] //Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando
    },

    divisao: function () {
        operation = 'divisao'
        state = 'operator2';
        this.numeorArray = []//Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando
    },

    multiplicacao: function () {
        operation = 'multiplicacao'
        state = 'operator2';
        this.numeorArray = []//Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando
    },

    ac : function () {
        this.inicializacao()
        this.numeorArray = [];
    },

    del: function () {
        this.numeorArray.pop();
        this.proximoNumero();
        this.display();
    },

    igual: function () {
        switch (operation) {
            case 'adição':
                result = operator1+operator2;
                state = 'result';
                this.display();
                break;
            case 'subtracao':
                result = operator1-operator2;
                state = 'result'
                this.display();
                break
            case 'multiplicacao':
                result = operator1*operator2;
                state = 'result'
                this.display();
                break
            case 'divisao':
                result = operator1/operator2;
                state = 'result'
                this.display();
                break

        }
    },

    display: function () {
        switch (state) {
            case 'inicializacao':
                document.getElementById('display').innerHTML = 'Display';
                state = 'operator1';
                break;
            case 'operator1':
                document.getElementById('display').innerHTML = operator1;
                break;
            case 'operator2':
                document.getElementById('display').innerHTML = operator2;
                break;
            case 'result':
                document.getElementById('display').innerHTML = result;
                state = 'operator1';
                break;
        }
    },

    proximoNumero: function (digito) {
        switch (state) {
            case 'operator1':
                this.numeorArray.push(digito);
                operator1 = parseFloat(this.numeorArray.join(''));
                this.display()
                break;
            case 'operator2':
                this.numeorArray.push(digito);
                operator2 = parseFloat(this.numeorArray.join(''));
                this.display();
                break
        }
    }
}

calculator.inicializacao()

