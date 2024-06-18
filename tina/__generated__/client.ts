import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1a5511ebdc756ff4ba1c73e969a53b135055da48', queries,  });
export default client;
  