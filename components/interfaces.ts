import { Dispatch, ReactNode, SetStateAction } from "react";

export interface layoutProps {
	children: ReactNode;
	pageLoad: boolean;
}

export interface loadContextInterface {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}
