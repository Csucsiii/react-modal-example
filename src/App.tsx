import { useModalContext } from "./hooks/useModalContext";

const App = () => {
	const { setModalState, setOnSubmit, setTitle, setDescription } = useModalContext();

	const functionReferrenceToBePassedToModal = () => {
		console.log("Ez szöveg a modal submit kattintásakor jelent meg.");
	};

	const onButtonClick = () => {
		setTitle("Figyelmeztetés!");
		setDescription("Ez egy nagyon fontos leírása a figyelmeztetésnek.");
		setOnSubmit(() => functionReferrenceToBePassedToModal);
		setModalState((prev) => !prev);
	};

	return (
		<div className="flex justify-center items-center w-full h-screen">
			<button
				className="bg-fuchsia-600 text-zinc-200 w-[10%] p-2 text-sm xl:text-md 2xl:text-lg font-semibold rounded"
				onClick={() => onButtonClick()}
			>
				Kattints rám!
			</button>
		</div>
	);
};

export default App;
