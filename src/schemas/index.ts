import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import service from './service'
import page from './page'
import testimonial from './testimonial'
import faq from './faq'
import why_choose from './why_choose'
import hero from './hero'
import defaultContentSection from './defaultContentSection'
import navigation from './navigation'
import navigationItem from './navigationItem'
import link from './link'
import siteConfig from './settings'
import questionItem from './questionItem'
import reviews from './reviews'
import servicesSlider from './servicesSlider'
import contact from './contact'
import map from './map'
import post from './post'
import author from './author'
import tag from './tag'

export const schemaTypes = [blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent, 
    service, 
    page, 
    testimonial, 
    faq, 
    why_choose, 
    hero, 
    defaultContentSection, 
    navigation, 
    navigationItem, 
    link, 
    siteConfig, 
    questionItem, 
    reviews,
    servicesSlider,
    contact,
    map,
    post,
    author,
    tag
  ]
}
