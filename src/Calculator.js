import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState('');

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) {
            setResult('Некоректний текст');
            return;
        }
        let res;
        switch (operation) {
            case '+':
                res = n1 + n2;
                break;
            case '-':
                res = n1 - n2;
                break;
            case '*':
                res = n1 * n2;
                break;
            case '/':
                res = n2 !== 0 ? n1 / n2 : 'Не можна ділити на 0';
                break;
            default:
                res = 'Неіснуючий оператор';
        }
        setResult(res);
    };

    return (
        <div>
            <h1 className='title'>Простий калькулятор</h1>
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Перше число"
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Друге число"
            />
            <button className='calc_btn' onClick={calculate}>Порахувати</button>
            <input
                type="text"
                value={result}
                readOnly
                placeholder="Результат = "
            />
        </div>
    );
};

export default Calculator;