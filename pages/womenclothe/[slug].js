import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import WomenclotheSingle from "@/components/WomenclotheSingle";






export default function womenclothe({womenclothe}) {
  
   
  return (
    <div>
      <WomenclotheSingle womenclothe={womenclothe} />
    </div>
  )
}

const query = groq`*[_type == "womensclothe" && slug.current == $slug][0]`;
  

export const getStaticPaths = async () => {
    const paths = await client.fetch(
      groq`*[_type == "womensclothe" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`
    );
  
    return { paths, fallback: true };
  }


  export const getStaticProps = async ({ params }) => {
    const queryParams = { slug: params?.slug ?? `` };
  
    const womenclothe = await client.fetch(query, queryParams);
    
  
    return {
      props: {
        womenclothe,
      
      },
    };
  };

