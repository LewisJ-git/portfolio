import { Dispatch, ReactNode, SetStateAction } from "react";
export interface loadContextInterface {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface containerInterface {
	children?: ReactNode;
	classname?: string;
}
