import   { createClient } from "next-sanity";
import { ImageUrlBuilder } from "@sanity/image-url";



export const client = createClient({
     projectId:"bjgv8xeu",
     dataset:"production",
     apiVersion:"v2021-10-21",
     useCdn: true,
   
})

 