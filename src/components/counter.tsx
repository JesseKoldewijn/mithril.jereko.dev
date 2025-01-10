type State = {
	count: number;
};

export const Counter = () => {
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
	} as any as FC;
};
