import { Counter } from "./components/counter";

export const App = () => {
	return {
		view: () => {
			return (
				<div class="flex flex-col w-full items-center justify-center min-h-svh">
					<Counter />
					Hello!
				</div>
			);
		},
	};
};
