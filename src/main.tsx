import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalProvider } from "./providers/ModalProvider.tsx";
import Modal from "./Components/Modal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ModalProvider>
			<App />
			<Modal />
		</ModalProvider>
	</React.StrictMode>
);
