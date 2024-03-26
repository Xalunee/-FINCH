import { useContext, useEffect, useState } from "react";
import FieldCell from "./FieldCell";
import styled from "styled-components";
import { CellsContext } from "../context/CellsContext";
import { generateCells } from "../utils/arrayUtils";

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

interface IProps {
  maxMarkCount: number;
  cellsCount: number;
  nameCell: string;
}

function TicketField({ maxMarkCount, cellsCount, nameCell }: IProps) {
  const { cells } = useContext(CellsContext);
  // Состоянние количества выбранных ячеек
  const [markedCounter, setMarkedCounter] = useState(cells[nameCell].length);

  useEffect(() => {
    setMarkedCounter(cells[nameCell].length);
  }, [cells, nameCell]);

  const arrCells = generateCells(cellsCount);

  return (
    <Field>
      {arrCells.map((num) => (
        <FieldCell
          num={num}
          key={num}
          maxMarkCount={maxMarkCount}
          markedCounter={markedCounter}
          setMarkedCounter={setMarkedCounter}
          nameCell={nameCell}
        />
      ))}
    </Field>
  );
}

export default TicketField;
