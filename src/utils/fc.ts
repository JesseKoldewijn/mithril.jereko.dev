export const component = (component: any) => {
	return component as any as () => FC;
};
