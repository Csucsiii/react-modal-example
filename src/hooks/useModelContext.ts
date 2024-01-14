import { useContext, Context } from "react";
import { ModalCtx } from "../providers/Context/ModelContext";
import type { ModalProviderValue } from "../types/types";


export const useModalContext = () => useContext<ModalProviderValue>(ModalCtx as Context<ModalProviderValue>);