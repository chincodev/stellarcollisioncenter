import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}


export const settingsQuery = groq`*[_type == "siteConfig"][0]{
frontpage,
  mainNav,
  _type,
  url,
  _createdAt,
  _rev,
  _id,
  phone,
  email,
  contactsTitle,
  google_maps_url,
  address,
  address_line_2,
  openingHoursTitle,
  opening_hours_mondday_friday,
  opening_hours_saturday,
  opening_hours_sunday,
  copyright,
  footerLeftNavigationTitle,
  footerRightNavigationTitle,
  footerBottomNavigation,
  title,
  _updatedAt,
  site_title,
  "mainNav": mainNav->{
    _id,
    title,
    navId,
    'items': items[]->{
      slug,
      title,
      'items': items[]->{
        slug,
        title,
        short_title
      }
    }
  },
  "footerLeftNavigation": footerLeftNavigation->{
    _id,
    title,
    navId,
    'items': items[]->{
      slug,
      title,
      short_title
    }
  },
  "footerRightNavigation": footerRightNavigation->{
    _id,
    title,
    navId,
    'items': items[]->{
      slug,
      title,
      short_title
    }
  },
  "footerBottomNavigation": footerBottomNavigation->{
    _id,
    title,
    navId,
    'items': items[]->{
      slug,
      title
    }
  }
}`
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export const getPageBySlugQuery =  groq`*[_type == "page" && slug.current == $slug][0]{
  seo_description,
  _updatedAt,
  show_banner,
banner_title,
banner_image,
  seo_title,
  _rev,
  _createdAt,
  _type,
  _id,
  title,
  slug,
  seo_keywords,
  pageBuilder,
}`

export const getServiceBySlugQuery =  groq`*[_type == "service" && slug.current == $slug][0]{
  seo_description,
  _updatedAt,
  seo_title,
  show_banner,
  banner_title,
  banner_image,
  _rev,
  _createdAt,
  _type,
  _id,
  title,
  slug,
  seo_keywords,
  pageBuilder,
}`
// {
//   seo_description,
//   _updatedAt,
//   seo_title,
//   _rev,
//   _createdAt,
//   _type,
//   _id,
//   title,
//   slug,
//   seo_keywords,
//   pageBuilder,
// }

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export async function getSettings(client: SanityClient): Promise<SiteConfig> {
  return await client.fetch(settingsQuery)
}


export const servicesSlugsQuery = groq`
*[_type == "service" && defined(slug.current)][].slug.current
`

export const pagesSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`



export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface SiteConfig {
  _type: 'siteConfig'
  _id: string
  _createdAt: string
  title?: string,
  site_title?: string,
  url?: string,
  frontpage?: string,
  // mainNav?: string,
  // footerLeftNavigation?: string,
  // footerRightNavigation?: string,
}

