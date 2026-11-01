/*
Problem 1: Staircase
*/
let staircase = function (n: number): string {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 0; j < n - i; j++) {
            spaces += " ";
        }
        let hashes = "";
        for (let k = 0; k < i; k++) {
            hashes += "#";
        }
        result += spaces + hashes;
        if (i < n) {
            result += "\n";
        }
    }
    return result;
};

/*
Problem 2: Grading Students
*/
let gradingStudents = function (grades: number[]): number[] {
    let finalGrades = [];
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade < 38) {
            finalGrades.push(grade);
        } else {
            let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
            if (nextMultipleOf5 - grade < 3) {
                finalGrades.push(nextMultipleOf5);
            } else {
                finalGrades.push(grade);
            }
        }
    }
    return finalGrades;
};

/*
Problem 3: Time Conversion
*/
let timeConversion = function (s: string): string {
    let ampm = s.substring(s.length - 2);
    let timePart = s.substring(0, s.length - 2);
    let timeArray = timePart.split(":");
    let hours = parseInt(timeArray[0]);

    if (ampm === "AM") {
        if (hours === 12) {
            timeArray[0] = "00";
        }
    } else {
        if (hours !== 12) {
            let newHours = hours + 12;
            timeArray[0] = newHours.toString();
        }
    }

    return timeArray.join(":");
};

/*
Problem 4: String Repeat
*/
let repeatStr = function (n: number, s: string): string {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
};

/*
Problem 5: Reversed Strings
*/
let solution = function (str: string): string {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

/*
Problem 6: Sum of Positive
*/
let positiveSum = function (arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
};

/*
Problem 7: Grasshopper — Summation
*/
let summation = function (num: number): number {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};

/*
Problem 8: Convert a Boolean to a String
*/
let booleanToString = function (b: boolean): string {
    if (b === true) {
        return "true";
    } else {
        return "false";
    }
};

/*
Problem 9: Fizz Buzz
*/
let fizzBuzz = function (n: number): string[] {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

/*
Problem 10: Running Sum of 1D Array
*/
let runningSum = function (nums: number[]): number[] {
    let result = [];
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        result.push(currentSum);
    }
    return result;
};

/*
Problem 11: Richest Customer Wealth
*/
let maximumWealth = function (accounts: number[][]): number {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
};

/*
Problem 12: Remove Duplicates from Sorted Array
*/
let removeDuplicates = function (nums: number[]): number {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

/*
Problem 13: Contains Duplicate
*/
let containsDuplicate = function (nums: number[]): boolean {
    let sortedNums = nums.slice().sort();
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            return true;
        }
    }
    return false;
};

/*
Problem 14: Move Zeroes
*/
let moveZeroes = function (nums: number[]): void {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/*
Problem 15: Merge Sorted Array
*/
let merge = function (
    nums1: number[],
    m: number,
    nums2: number[],
    n: number,
): void {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
};

/*
Problem 16: 3Sum
*/
let threeSum = function (nums: number[]): number[][] {
    let result: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};

/*
Problem 17: Plus One
*/
let plusOne = function (digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    let newDigits = new Array(digits.length + 1).fill(0);
    newDigits[0] = 1;
    return newDigits;
};

/*
Problem 18: Reverse String
*/
let reverseString = function (s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};

/*
Problem 19: Length of Last Word
*/
let lengthOfLastWord = function (s: string): number {
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
};

/*
Problem 20: Longest Common Prefix
*/
let longestCommonPrefix = function (strs: string[]): string {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};
