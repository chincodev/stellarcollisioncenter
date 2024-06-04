import { createClient, type SanityClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '~/lib/sanity.api'
import { getPageBySlugQuery } from './sanity.queries'
import { ImageAsset, Slug } from 'sanity'

export interface Page {
  _type: 'page'
  _id: string
  _createdAt: string
  seo_title: string
  seo_description: string
  seo_keywords: string
  og_card_image: ImageAsset
  title?: string
  slug: Slug,
  pageBuilder: any[],
  _updatedAt: string
}


export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export async function getPageBySlug(
  client: SanityClient,
  slug: string
): Promise<Page> {
  return (await client.fetch(getPageBySlugQuery, { slug })) || ({} as any)
}
