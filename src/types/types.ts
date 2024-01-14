import type { Dispatch, SetStateAction } from "react";

export type ModalOnSubmitFunction = () => void;

export interface ModalProviderValue{
	modalState: boolean;
	setModalState: Dispatch<SetStateAction<boolean>>;

	onSubmit: ModalOnSubmitFunction | null;
	setOnSubmit: Dispatch<SetStateAction<ModalOnSubmitFunction | null>>;

	title: string;
	setTitle: Dispatch<SetStateAction<string>>;

	description?: string;
	setDescription: Dispatch<SetStateAction<string | undefined>>;
}