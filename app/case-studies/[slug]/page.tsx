import { redirect } from "next/navigation";

export default async function CaseStudyAliasDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/casestudy/${slug}`);
}
