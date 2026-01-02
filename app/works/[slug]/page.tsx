import WorkTemplate from "@/app/components/WorkTemplate";

import { slugEventWorks } from "../../data/works"

export default async function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug }:any = await params;
 const work = slugEventWorks.find(
  (eventWork) => eventWork.slug === slug
);

console.log(work)

  if (!work) {
    return <h1>Work not found</h1>;
  }

  return <WorkTemplate {...work} />;
}