// Создание массива необходимой длинны, с цифрами по возрастанию
export const generateCells = (length: number): number[] => {
  return Array.from({ length }, (_, index) => index + 1);
};

// Создание массива с уникальными числами
export const getUniqueRandomNumbers = (length: number, min: number, max: number) => {
  const numbers = new Set<number>();
  while (numbers.size < length) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return Array.from(numbers);
};

// Функция, считающая совпадения в массивах
export const intersectionCount = (arr1: number[], arr2: number[]): number => {
  let count = 0;
  for (const item of arr1) {
    if (arr2.includes(item)) count += 1;
  }

  return count;
};
