import { redirect } from "next/navigation";

export default async function IndustryAliasDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/industry/${slug}`);
}
