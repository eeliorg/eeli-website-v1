import { type SchemaTypeDefinition } from 'sanity'
import event from './event'
import testimonial from './testimonial'
import post from './post'
import resource from './resource'
import signup from './signup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, testimonial, post, resource, signup],
}
