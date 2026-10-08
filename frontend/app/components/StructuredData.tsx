import { organizationSchema, websiteSchema } from "@/app/lib/seo";
export function StructuredData({extra=[]}:{extra?:Record<string,unknown>[]} = {}) {
 const graph={"@context":"https://schema.org","@graph":[organizationSchema({email:"kontakt@nasahunch.no"}),websiteSchema(),...extra]};
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,"\\u003c")}} />;
}
