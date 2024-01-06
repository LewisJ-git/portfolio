import { createContext } from "react";
import { loadContextInterface } from "./interfaces";

export const LoadContext = createContext<loadContextInterface | undefined>(undefined);
