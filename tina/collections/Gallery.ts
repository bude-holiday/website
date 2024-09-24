import { Collection } from "tinacms";

const gallery: Collection = {
	name: "gallery",
	path: "content/images",
	format: "json",
	fields: [{
		name: "image",
		type: "image",
		required: true,
	}]
};

export default gallery;
