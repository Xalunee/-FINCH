import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CellsContext } from "../context/CellsContext";

const Button = styled.button<{ isChecked?: boolean }>`
  width: ${({ isChecked }) => (isChecked ? "34px" : "40px")};
  height: ${({ isChecked }) => (isChecked ? "34px" : "40px")};
  margin: ${({ isChecked }) => (isChecked ? "3px" : "0")};

  cursor: pointer;
  background-color: ${({ isChecked }) => (isChecked ? "#ffd205" : "#ffffff")};
  border: ${({ isChecked }) => (isChecked ? "none" : "1px solid #dddddd")};
  border-radius: 5px;
`;

interface IProps {
  num: number;
  maxMarkCount: number;
  markedCounter: number;
  setMarkedCounter: React.Dispatch<React.SetStateAction<number>>;
  nameCell: string;
}

// Ячейка поля
function FieldCell({
  num,
  maxMarkCount,
  markedCounter,
  setMarkedCounter,
  nameCell,
}: IProps) {
  const { cells, setCells }: any = useContext(CellsContext); // Выбранные поля, установка этих полей
  const selectedCells = cells[nameCell];
  const [isChecked, setIsChecked] = useState(() => selectedCells.includes(num));

  // Обновление isChecked
  useEffect(() => {
    const isIncludes = selectedCells.includes(num);
    if (isChecked !== isIncludes) {
      setIsChecked(() => isIncludes);
    }
  }, [selectedCells, isChecked, num]);

  // Функция, обрабатывающая клик по кнопке
  const changeButton = () => {
    // Если ячейка уже выбрана, то удаляем ее из выбранных ячеек и уменьшаем счетчик
    if (isChecked) {
      const filteredCells = selectedCells.filter((cellNum: number) => cellNum !== num);
      const newCells = {
        ...cells,
        [nameCell]: filteredCells,
      };
      setCells(newCells);
      setMarkedCounter((prev) => prev - 1);
      setIsChecked(!isChecked);
    } else if (!isChecked && markedCounter !== maxMarkCount) {
      // Если ячейка не выбрана и счетчик меньше максимального значения, добавляем ее в выбранные ячейки и увеличиваем счетчик
      const newCells = {
        ...cells,
        [nameCell]: [...selectedCells, num],
      };
      setCells(newCells);
      setMarkedCounter((prev) => prev + 1);
      setIsChecked(!isChecked);
    }
  };

  return (
    <Button isChecked={isChecked} onClick={changeButton}>
      <span>{num}</span>
    </Button>
  );
}

export default FieldCell;
