import { organizationSchema, websiteSchema } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
export function StructuredData({extra=[]}:{extra?:Record<string,unknown>[]} = {}) {
 const graph={"@context":"https://schema.org","@graph":[organizationSchema({email:site.email}),websiteSchema(),...extra].map(item => Object.fromEntries(Object.entries(item).filter(([key]) => key !== "@context")))};
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,"\\u003c")}} />;
}
