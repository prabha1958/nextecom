import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import SareeSingle from "@/components/SareeSingle";







export default function sarees({saree}) {
   
  return (
    <div>
      <SareeSingle saree={saree} />
    </div>
  )
}

const query = groq`*[_type == "saree" && slug.current == $slug][0]`;
  

export const getStaticPaths = async () => {
    const paths = await client.fetch(
      groq`*[_type == "saree" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`
    );
  
    return { paths, fallback: true };
  }


  export const getStaticProps = async ({ params }) => {
    const queryParams = { slug: params?.slug ?? `` };
  
    const saree = await client.fetch(query, queryParams);
  
    return {
      props: {
        saree,
      },
    };
  };

