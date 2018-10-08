import Inquirer from 'inquirer';

let numberOneQuestion = [{
    type: 'number',
    name: 'numberOne',
    message: 'Enter the first number: ',
    default: 17
}]

let numberTwoQuestion = [{
        type: 'number',
        name: 'numberTwo',
        message: 'Enter the second number: ',
        default: 53
}]

export async function requestNumberOne(): Promise<number> {
    return (await <Promise<any>>Inquirer.prompt(numberOneQuestion)).numberOne;
}

export async function requestNumberTwo(): Promise<number> {
    return (await <Promise<any>>Inquirer.prompt(numberTwoQuestion)).numberTwo;
}