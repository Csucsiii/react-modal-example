import type { ReactNode } from "react";
import type { ModalOnSubmitFunction } from "../types/types";
import { ModalCtx } from "./Context/ModelContext";
import { useState } from "react";
import Modal from "../Components/Modal";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modalState, setModalState] = useState<boolean>(false);
	const [onSubmitClick, setOnSubmitClick] = useState<ModalOnSubmitFunction | null>(null);
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string | undefined>();

	return (
		<ModalCtx.Provider
			value={{
				modalState,
				setModalState,
				onSubmit: onSubmitClick,
				setOnSubmit: setOnSubmitClick,
				title,
				setTitle,
				description,
				setDescription,
			}}
		>
			<Modal />
			{children}
		</ModalCtx.Provider>
	);
};
