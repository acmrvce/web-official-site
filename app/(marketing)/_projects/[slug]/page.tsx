import { sanityFetch } from '@/sanity/lib/fetch'
import { projectQuery, projectSlugsQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { PortableTextBlock } from 'next-sanity'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

import Avatar from '@/components/blog/avatar-comp'
import CoverImage from '@/components/blog/cover-image'
import DateComponent from '@/components/blog/date'
import PortableText from '@/components/blog/portable-text'
import MoreProjects from '@/components/projects/more-projects'
import type { Project as SanityProject } from '@/sanity.types'

// Re-define the Project type to correctly type the author field
type Project = Omit<SanityProject, 'author' | 'mainImage' | 'body'> & {
  author?: { name?: string; picture?: string }
  body: PortableTextBlock[]
  coverImage?: string
  date?: string
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const project = (await sanityFetch({ query: projectQuery, params: await params, stega: false })) as Project
  const previousImages = (await parent).openGraph?.images || []

  return {
    authors: project?.author?.name ? [{ name: project?.author?.name }] : [],
    title: project?.title,
    description: project?.description,
  } satisfies Metadata
}

export async function generateStaticParams() {
  return (await sanityFetch({ query: projectSlugsQuery, perspective: 'published', stega: false })) as SanityProject[]
}

export default async function ProjectPage({ params }: Props) {
  const project = (await sanityFetch({ query: projectQuery, params: await params })) as Project

  if (!project?._id) {
    return notFound()
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ">
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-5xl">
          {project.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {project.author?.picture && (
            <Avatar name={project.author.name} src={project.author.picture} />
          )}
        </div>
        <div className="">
          <div className="mb-6 block md:hidden">
            {project.author?.picture && (
              <Avatar name={project.author.name} src={project.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">
              <DateComponent dateString={project.date} />
            </div>
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          {project.coverImage && <CoverImage src={project.coverImage} priority />}
        </div>
        
        {project.body?.length && (
          <PortableText
            className="mx-auto max-w-7xl"
            value={project.body as PortableTextBlock[]}
          />
        )}
      </article>
      <aside>
        <hr className="border-accent-2 mb-24 mt-28" />
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-5xl">
          More Projects
        </h2>
        <Suspense>
          <MoreProjects skip={project._id} limit={2} />
        </Suspense>
      </aside>
    </div>
  )
}
