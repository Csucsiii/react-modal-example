import { createContext } from "react";
import type { ModalProviderValue } from "../../types/types";

export const ModalCtx = createContext<ModalProviderValue | null>(null);