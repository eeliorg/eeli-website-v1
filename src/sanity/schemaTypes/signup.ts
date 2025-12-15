import { defineType } from 'sanity'

export default defineType({
  name: 'signup',
  title: 'Signup',
  type: 'document',
  fields: [
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'firstName', title: 'First Name', type: 'string' },
    { name: 'lastName', title: 'Last Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string' },

    { name: 'maleChildren', title: 'Male Children', type: 'number' },
    { name: 'femaleChildren', title: 'Female Children', type: 'number' },
    { name: 'otherChildren', title: 'Other Children', type: 'number' },
    { name: 'totalChildren', title: 'Total Children', type: 'number' },
    { name: 'maleChildrenAges', title: 'Male Children Ages', type: 'array', of: [{ type: 'number' }] },
    { name: 'femaleChildrenAges', title: 'Female Children Ages', type: 'array', of: [{ type: 'number' }] },
    { name: 'otherChildrenAges', title: 'Other Children Ages', type: 'array', of: [{ type: 'number' }] },

    { name: 'availability', title: 'Availability', type: 'string' },
    { name: 'experience', title: 'Experience Level', type: 'string' },

    { 
      name: 'createdAt', 
      title: 'Created At', 
      type: 'datetime', 
      options: { readOnly: true } 
    },
  ],
})
