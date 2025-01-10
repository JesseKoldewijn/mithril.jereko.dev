/// <reference types="vite/client" />

import Mithril from "mithril";

declare global {
	// mithril
	type m = typeof Mithril;
	const m: Mithril.Static;
	type Mithril = typeof m;
	type Vnode = Mithril.Vnode;
	type VnodeDOM = Mithril.VnodeDOM;
	type Attributes = Mithril.Attributes;
	type ChildArray = Mithril.ChildArray;

	type FC<Attrs = {}, State = {}> = Mithril.Vnode<Attrs, State>;
}
