import BioNavItem from "./BioNavItem";
import BioNavigations from "../../pages/api/bio_navigations.json";
import { Dispatch, SetStateAction } from "react";

interface parentState {
	contentIndex: number;
	setContentIndex: Dispatch<SetStateAction<number>>;
}

const BioNav = (props: parentState) => {
	return (
		<div className="flex flex-row relative z-[10] text-2xl ml-[50px] xs:text-lg xs:ml-[40px] text-midground">
			{BioNavigations.map((item, index) => (
				<BioNavItem selectedIndex={props.contentIndex} index={index} key={index}>
					<button
						onClick={() => {
							props.setContentIndex(index);
						}}>
						{item.name}
					</button>
				</BioNavItem>
			))}
		</div>
	);
};

export default BioNav;
