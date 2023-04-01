import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import ComputerSingle from "@/components/ComputerSingle";
import MobileSingle from "@/components/MobileSingle";





export default function mobile({mobile}) {
   
  return (
    <div>
      <MobileSingle mobile={mobile} />
    </div>
  )
}

const query = groq`*[_type == "mobile" && slug.current == $slug][0]`;
  

export const getStaticPaths = async () => {
    const paths = await client.fetch(
      groq`*[_type == "mobile" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`
    );
  
    return { paths, fallback: true };
  }


  export const getStaticProps = async ({ params }) => {
    const queryParams = { slug: params?.slug ?? `` };
  
    const mobile = await client.fetch(query, queryParams);
  
    return {
      props: {
        mobile,
      },
    };
  };

