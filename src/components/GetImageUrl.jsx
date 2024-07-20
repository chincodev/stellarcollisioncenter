import { getClient } from '~/lib/sanity.client'
import imageUrlBuilder from '@sanity/image-url'

const client = getClient(undefined)
const builder = imageUrlBuilder(client);

const getImageUrl = (source) => {
  if (!source || !source.asset || !source.asset._ref) {
    // Handle the case when the image is not available
    return 'path/to/default/image.jpg'; // Replace with your default image path
  }
  return builder.image(source).url()
}

export default getImageUrl