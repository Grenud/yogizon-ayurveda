import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Routers/Router";
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<>
			<Toaster
  position="bottom-right"
  reverseOrder={false}
/>
			<Router />
		</>
	);
}

export default App;
