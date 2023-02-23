import { createContext } from "react";

interface ColorContextSchema {
  toggleColorMode: () => void;
}

export const ColorContext = createContext<ColorContextSchema>(
  {} as ColorContextSchema,
);
