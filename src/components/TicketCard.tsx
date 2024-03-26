import styled from "styled-components";
import TicketField from "./TickedField";
import ButtonRandomize from "./ButtonRandomize";
import { useContext, useState } from "react";
import { CellsContext } from "../context/CellsContext";
import { getUniqueRandomNumbers } from "../utils/arrayUtils";
import { calculateResult } from "../utils/lottery";

// Стили для компонентов
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 11px 24px;
  width: 274px;
  min-height: 330px;

  background-color: #ffffff;
  border-radius: 5px;

  @media only screen and (min-width: 768px) {
    width: 445px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  margin-left: 5px;
  font-size: 22px;
`;

const NameField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 5px 8px;
`;

const ButtonResult = styled.button`
  align-self: center;
  margin-top: 23px;
  width: 178px;
  height: 43px;

  cursor: pointer;
  border: 1px solid #dddddd;
  border-radius: 40px;
  background-color: #ffffff;
`;

const TextResult = styled.p`
  margin: 8px 5px;
`;

function TicketCard() {
  const [isTicketWon, setIsTicketWon] = useState<boolean | null>(null); // Состояние выигрыша билета
  const { cells, setCells } = useContext(CellsContext);

  // Функция для генерации и становки рандомных чисел при нажатии на кнопку
  const randomizeNumbers = () => {
    const cells1 = getUniqueRandomNumbers(8, 1, 19);
    const cells2 = getUniqueRandomNumbers(1, 1, 2);
    setCells({ cells1, cells2 });
  };

  // Если состояние выигрыша обновилось, то выводим дынный элемент
  if (isTicketWon !== null) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Билет 1</CardTitle>
        </CardHeader>
        {isTicketWon ? (
          <TextResult>Ого, вы выиграли! Поздравляем!</TextResult>
        ) : (
          <TextResult>К сожалению, вы проиграли :(</TextResult>
        )}
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Билет 1</CardTitle>
        <ButtonRandomize onClick={randomizeNumbers} />
      </CardHeader>
      <NameField>
        <h3>Поле 1</h3>
        <p>Отметьте 8 чисел.</p>
      </NameField>
      <TicketField maxMarkCount={8} cellsCount={19} nameCell="cells1" />
      <NameField>
        <h3>Поле 2</h3>
        <p>Отметьте 1 число.</p>
      </NameField>
      <TicketField maxMarkCount={1} cellsCount={2} nameCell="cells2" />
      <ButtonResult onClick={calculateResult(cells, setIsTicketWon)}>
        Показать результат
      </ButtonResult>
    </Card>
  );
}

export default TicketCard;
