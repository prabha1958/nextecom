import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import ComputerSingle from "@/components/ComputerSingle";





export default function computer({computer}) {
   
  return (
    <div>
      <ComputerSingle computer={computer} />
    </div>
  )
}

const query = groq`*[_type == "computer" && slug.current == $slug][0]`;
  

export const getStaticPaths = async () => {
    const paths = await client.fetch(
      groq`*[_type == "computer" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`
    );
  
    return { paths, fallback: true };
  }


  export const getStaticProps = async ({ params }) => {
    const queryParams = { slug: params?.slug ?? `` };
  
    const computer = await client.fetch(query, queryParams);
  
    return {
      props: {
        computer,
      },
    };
  };
