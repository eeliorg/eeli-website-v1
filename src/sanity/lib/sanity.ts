// lib/sanity.ts

// --- CHANGE 1: Import the modern named export 'createClient' ---
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
};

// --- CHANGE 2: Call the createClient function ---
export const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: config.useCdn,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);