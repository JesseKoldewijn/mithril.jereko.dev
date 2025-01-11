import { component } from "../utils/fc";

type State = {
	count: number;
};

const _Counter = () => {
	let initialData: State = {
		count: 0,
	};

	const increment = () => {
		initialData.count++;
	};

	return {
		view: () => {
			return (
				<button
					class="rounded-md border px-2 py-1 bg-neutral-800 text-neutral-100"
					onclick={increment}
				>
					Count init: {initialData.count}
				</button>
			);
		},
	};
};

export const Counter = component(_Counter);
