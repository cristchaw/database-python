import LearnClient from "@/components/learn/LearnClient";
import { getChapters } from "@/lib/api";

export default async function LearnPage() {
  const chapters = await getChapters();

  return <LearnClient chapters={chapters} />;
}