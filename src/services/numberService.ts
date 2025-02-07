import axios from "axios";
import {digitSum, isArmstrong, isPerfect, isPrime} from "../utils/helpers";

export const classifyNumber = async (num: number) => {
    const funFact = await getFunFact(num);
    const properties = [];

    if (isArmstrong(num)) properties.push("armstrong");
    if (num % 2 === 0) properties.push("even");
    else  properties.push("odd");

    return {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: digitSum(num),
        fun_fact: funFact,
    }
};

const getFunFact = async (num: number): Promise<string> => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math`);
        return response.data;
    } catch (error) {
        return `No fun fact available for ${num}`;
    }
}