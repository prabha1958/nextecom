import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import MenclotheSingle from "@/components/MenclotheSingle";





export default function mobile({menclothe}) {
   
  return (
    <div>
      <MenclotheSingle menclothe={menclothe} />
    </div>
  )
}

const query = groq`*[_type == "mensclothe" && slug.current == $slug][0]`;
  

export const getStaticPaths = async () => {
    const paths = await client.fetch(
      groq`*[_type == "mensclothe" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`
    );
  
    return { paths, fallback: true };
  }


  export const getStaticProps = async ({ params }) => {
    const queryParams = { slug: params?.slug ?? `` };
  
    const menclothe = await client.fetch(query, queryParams);
  
    return {
      props: {
        menclothe,
      },
    };
  };

