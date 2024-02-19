interface maskInterface {
	start: string;
	end: string;
}

export const navBullets: Array<maskInterface> = [
	{
		start: "polygon(0% 100%, 0% 0%, 0% 0%, 0% 8.42%, 0% 0%, 0% 0%, 0% 18.5%, 0% 82%, 0% 100%)",
		end: "polygon(100% 100%, 100% 0%, 62% 0%, 54.5% 8.42%, 47% 0%, 18% 0%, 0% 18.5%, 0% 82%, 18% 100%)"
	},
	{
		start: "polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%, 0% 20%, 0% 80%, 0% 100%, 0% 100%, 0% 75.73%)",
		end: "polygon(76.68% 100%, 100% 100%, 100% 0%, 5% 0%, 0% 20%, 0% 80%, 5% 100%, 67.93% 100%, 72.31% 75.73%)"
	},
	{
		start: "polygon(0% 100%, 0% 0%, 0% 0%, 0% 20%, 0% 80%, 0% 100%, 0% 100%, 0% 85%, 0% 85%, 0% 100%)",
		end: "polygon(100% 100%, 100% 0%, 2% 0%, 0% 20%, 0% 80%, 2% 100%, 50% 100%, 52% 85%, 73% 85%, 75% 100%)"
	},
	{
		start: "polygon(0% 100%, 0% 0%, 0% 0%, 0% 22%, 0% 22%, 0% 0%, 0% 0%, 0% 18%, 0% 82%, 0% 100%)",
		end: "polygon(100% 100%, 100% 0%, 45% 0%, 43% 22%, 22% 22%, 20% 0%, 2% 0%, 0% 18%, 0% 82%, 2% 100%)"
	}
];

export const bioNavTab: maskInterface = {
	start: "polygon(0% 0%, 0% 0%, 0% 25%, 0% 75%, 0% 100%, 0% 100%)",
	end: "polygon(0% 0%, 97% 0%, 100% 25%, 100% 75%, 97% 100%, 0% 100%)"
};

export const rectBar: maskInterface = {
	start: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
	end: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
};

export const nameCard: maskInterface = {
	start: "polygon(95% 0%, 95% 0%, 100% 0%, 100% 0%, 0% 0%, 0% 0%, 88% 0%)",
	end: "polygon(95% 93%, 95% 40%, 100% 35%, 100% 0%, 0% 0%, 0% 100%, 88% 100%)"
};

export const footingCard: maskInterface = {
	start: "polygon(100% 74%, 100% 100%, 100% 100%, 100% 15%, 100% 0%, 100% 0%, 100% 29.21%, 100% 34.65%, 100% 67.31%)",
	end: "polygon(0% 74%, 0% 100%, 100% 100%, 100% 8%, 92% 0%, 0% 0%, 0% 29.21%, 7.69% 34.65%, 7.69% 67.31%)"
};

export const bioCard: maskInterface = {
	start: "polygon(100% 0%, 100% 0%, 100% 10%, 100% 90%, 100% 100%, 100% 100%)",
	end: "polygon(100% 0%, 2% 0%, 0% 10%, 0% 90%, 2% 100%, 100% 100%)"
};

export const imageCard: maskInterface = {
	start: "",
	end: ""
};

export const circle: maskInterface = {
	start: "circle(100% at 50% 50%)",
	end: "circle(0% at 50% 50%)"
};

export const corner1: maskInterface = {
	start: "polygon(0% 100%, 0% 92.14%, 0% 92.14%, 0% 74.27%, 0% 0%, 0% 13.67%, 0% 79.27%, 0% 100%)",
	end: "polygon(100% 100%, 93.12% 92.14%, 24.16% 92.14%, 12.54% 74.27%, 12.54% 0%, 0% 13.67%, 0% 79.27%, 12.54% 100%)"
};
