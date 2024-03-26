// Создание массива необходимой длинны, с цифрами по возрастанию
export const generateCells = (length: number): number[] => {
  return Array.from({ length }, (_, index) => index + 1);
};

// Создание массива с уникальными числами
export const getUniqueRandomNumbers = (
  length: number,
  min: number,
  max: number
) => {
  const numbers = new Set<number>();
  while (numbers.size < length) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return Array.from(numbers);
};

// Функция, считающая совпадения в массивах
export const intersectionCount = (arr1: number[], arr2: number[]): number =>
  arr1.reduce((acc, item) => (arr2.includes(item) ? acc + 1 : acc), 0);
