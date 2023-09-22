"use client";
import { elementalCombinationRows } from "@/data/elemental-combinations";
import { useMediaQuery } from "@/hooks";
import { useState } from "react";
import { Button } from "../atoms";
import { CombinationTableHeader, CombinationTableRow } from "../molecules";
import { ElementalCombinationMobileList } from "./ElementalCombinationMobileList";
const twTheme = require("tailwindcss/defaultTheme");

export const ElementalCombinationTable = () => {
  return (
    <>
      <CombinationTableHeader />
      {elementalCombinationRows.map((row, key) => (
        <CombinationTableRow key={key} {...row} />
      ))}
    </>
  );
};

export const ElementalCombinationChart = ({}) => {
  const isMobile = useMediaQuery(`(max-width: ${twTheme.screens.md})`);
  const [isListMode, setListMode] = useState(false);
  const renderAsList = isListMode || isMobile;

  return (
    <>
      <div className="text-center max-w-5xl mx-auto mb-4">
        {isMobile ? null : (
          <Button
            className="mx-auto font-semibold"
            onClick={() => setListMode((state) => !state)}
          >
            Alterar visualização
          </Button>
        )}
        {renderAsList ? (
          <ElementalCombinationMobileList />
        ) : (
          <ElementalCombinationTable />
        )}
      </div>
      <small>
        Os efeitos são os mesmos para todos os feitiços que fazem com que os
        alvos recebam um combo de estado elementar, e não importa a ordem em que
        os estados são aplicados.
      </small>
    </>
  );
};
