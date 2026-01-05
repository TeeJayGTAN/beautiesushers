import WorkTemplate from "@/app/components/WorkTemplate";

//seo
import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  
 const work = slugEventWorks.find((w) => w.slug === params.slug);

  if (!work) return {};

  return {
    title: `${work.eventName} | Professional Ushering Services`,
    description:
      work.seoDescription ??
      `Professional ushering services delivered by Beauties Ushers for ${work.eventName}.`,
    openGraph: {
      title: work.eventName,
      description: work.seoDescription,
      images: [
        {
          url: work.eventImage,
          width: 1200,
          height: 630,
          alt: work.eventName,
        },
      ],
    },
  };
}


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
    return notFound();
  }

  return <WorkTemplate {...work} />;
}