import { useContext, Context } from "react";
import { ModalCtx } from "../providers/Context/ModalContext";
import type { ModalProviderValue } from "../types/types";


export const useModalContext = () => {
	const context = useContext<ModalProviderValue>(ModalCtx as Context<ModalProviderValue>);
	if (!context){
		throw new Error("useModalContext must used within a ModalProvider!");
	}

	return context;
}