import { getUniqueRandomNumbers, intersectionCount } from "./arrayUtils";
import sendRequest from "./apiUtils";

type cellsType = {
  cells1: number[];
  cells2: number[];
};

type setIsTicketWonType = (value: boolean) => void;

type calculateResultType = (
  cells: cellsType,
  setIsTicketWon: setIsTicketWonType
) => () => void;

// Вычисление результата
export const calculateResult: calculateResultType =
  (cells, setIsTicketWon) => () => {
    const { cells1, cells2 } = cells;
    const arr1 = getUniqueRandomNumbers(8, 1, 19);
    const arr2 = getUniqueRandomNumbers(1, 1, 2);

    const matchesFirstField = intersectionCount(cells1, arr1);
    const matchesSecondField = intersectionCount(cells2, arr2);

    const isTicketWon =
      matchesFirstField >= 4 ||
      (matchesFirstField >= 3 && matchesSecondField === 1);

    // Логи для теста корректности работы
    console.log(
      `Количество совпавших чисел в первом поле - ${matchesFirstField}`
    );
    console.log(
      `Количество совпавших чисел во втором поле - ${matchesSecondField}`
    );
    console.log(`Статус выигрыша - ${isTicketWon}`);

    // Отправка данных на апи
    sendRequest("https://cors-anywhere.herokuapp.com", {
      firstField: cells1,
      secondField: cells2,
      isTicketWon,
    });

    if (isTicketWon) {
      setIsTicketWon(true);
    } else {
      setIsTicketWon(false);
    }
  };
