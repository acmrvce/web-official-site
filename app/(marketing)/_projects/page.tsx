import ProjectPageClient from "@/components/projects/project-page-client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";

// Revalidate all projects every 10 minutes
export const revalidate = 600

export default async function ProjectsPage() {
  const projects = await sanityFetch({
    query: projectsQuery,
    stega: false,
  });

  return <ProjectPageClient projects={projects} />;
}
