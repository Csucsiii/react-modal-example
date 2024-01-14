import { useModalContext } from "../hooks/useModalContext";
import { createPortal } from "react-dom";

const Modal = () => {
	const { modalState, setModalState, onSubmit, title, description, setOnSubmit, setTitle, setDescription } =
		useModalContext();

	const onModalSubmitClick = () => {
		if (onSubmit && typeof onSubmit === "function") {
			onSubmit();
			setOnSubmit(null);
			setTitle("");
			setDescription(undefined);
		}
		setModalState(false);
	};

	return createPortal(
		<div
			className={`flex flex-col justify-start items-center absolute ${
				modalState ? "top-[5%]" : "-top-full"
			} left-0 right-0 m-auto w-[400px] h-[170px] bg-white/90 rounded-xl text-left duration-[350ms] z-50`}
		>
			<h1 className="text-lg text-center font-semibold m-2 mt-5">{title}</h1>
			{description ? <h2 className="text-md text-center m-2 mt-5">{description}</h2> : null}
			<div className="absolute bottom-5 flex justify-evenly items-center w-full">
				<button
					className="flex justify-center items-center w-[40%] font-semibold p-2 rounded text-zinc-200 bg-rose-600 hover:bg-rose-500"
					onClick={() => setModalState(false)}
				>
					Nem
				</button>
				<button
					className="flex justify-center items-center w-[40%] font-semibold p-2 rounded text-zinc-200 bg-green-600 hover:bg-green-500"
					onClick={() => onModalSubmitClick()}
				>
					Igen
				</button>
			</div>
		</div>,
		document.getElementById("modal")!
	);
};

export default Modal;
