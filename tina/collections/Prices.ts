import { Collection } from "tinacms";

const prices: Collection = {
	name: "prices",
	path: "content",
	match: {
		include: "prices"
	},
	format: "json",
	fields: [
		{
			name: "price",
			type: "object",
			list: true,
			fields: [
				{
					name: "startDate",
					type: "datetime",
					required: true
				},
				{
					name: "endDate",
					type: "datetime",
					required: true
				},
				{
					name: "price",
					type: "number",
					required: true
				}
			],
			ui: {
				itemProps: (item) => {
					return {
						label: `${item?.startDate} - ${item?.endDate}`,
					}
				},

			}
		},
	],
	ui: {
		router: () => {
			return "/bookings"
		},
		allowedActions: {
			create: false,
			delete: false,
		},
	},
};
export default prices;
