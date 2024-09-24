// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/Prices.ts
var prices = {
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
      required: true,
      fields: [
        {
          name: "start",
          type: "datetime",
          required: true
        },
        {
          name: "end",
          type: "datetime",
          required: true
        },
        {
          name: "price",
          type: "number",
          required: true
        },
        {
          name: "available",
          type: "boolean"
        }
      ],
      ui: {
        itemProps: (item) => {
          return {
            label: `${item?.startDate} - ${item?.endDate}`
          };
        }
      }
    }
  ],
  ui: {
    router: () => {
      return "/bookings";
    },
    allowedActions: {
      create: false,
      delete: false
    }
  }
};
var Prices_default = prices;

// tina/collections/Gallery.ts
var gallery = {
  name: "gallery",
  path: "content/images",
  format: "json",
  fields: [{
    name: "image",
    type: "image",
    required: true
  }]
};
var Gallery_default = gallery;

// tina/config.ts
var config = defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch: process.env.TINA_BRANCH ?? process.env.HEAD,
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  schema: {
    collections: [Prices_default, Gallery_default]
  }
});
var config_default = config;
export {
  config,
  config_default as default
};
