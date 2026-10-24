let input_result = document.getElementById("result")
let numbers = ""
let result = 0
let operation = ""

const handleNumber = (number) => {
    if(number == 0 && numbers.length == 0){
        return 0
    }
    if(number == "." && numbers.includes(".")){
        return 0
    }
    if(numbers.length == 15) {
        return 0
    }
    numbers += number
    input_result.value = numbers
}

const clearAll = () => {
    numbers = ""
    result = 0
    operation = ""
    input_result.value = "0"
}

const operations = (op) => {
    
    if(numbers.length == 0 && op != '-') {
        return 0
    }
    if(numbers.length == 0 && op == '-') {
        numbers += "-"
        input_result.value = numbers
        return 0
    }

    if(result == 0) {
        result = Number.parseFloat(numbers)
        operation = op 
        numbers = ""
        input_result.value = numbers
    }
    else {
        switch (operation) {
            case "+": 
                result += Number.parseFloat(numbers)
                input_result.value = result
                break;
            case "-":
                result -= Number.parseFloat(numbers)
                input_result.value = result
                break;
            case "x":
                result *= Number.parseFloat(numbers)
                input_result.value = result
                break;
            case "÷":
                if(numbers == "0") {
                    input_result.value = "Can't divide by 0"
                    break;
                }
                result /= Number.parseFloat(numbers)
                input_result.value = result
                break;
        }
        if(op != "=") {
            operation = op
            numbers = ""
            return 0
        }
        numbers = ""
        result = 0
        op = ""
    }
}