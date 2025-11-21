import { BlogPost, ResourceItem } from "@/types/content";

export const samplePosts: BlogPost[] = [
  {
    slug: "leading-with-faith-and-purpose",
    title: "Leading with Faith and Purpose",
    summary: "Practical ways to cultivate Christ-centered leadership in everyday life.",
    content:
      "Leadership begins in the heart. In this article, we explore servant leadership, integrity, and dependence on God as the foundation for influence...",
    date: "2025-06-01T00:00:00.000Z",
    author: "EELI Team",
    tags: ["leadership", "faith", "purpose"],
  },
  {
    slug: "healing-journey-identity-in-christ",
    title: "A Healing Journey: Identity in Christ",
    summary: "Finding wholeness by embracing who God says you are.",
    content:
      "True healing begins with identity. We examine forgiveness, renewal of the mind, and the daily practices that restore joy...",
    date: "2025-06-05T00:00:00.000Z",
    author: "EELI Team",
    tags: ["healing", "identity", "wholeness"],
  },
];

export const sampleResources: ResourceItem[] = [
  {
    id: "mental-health-handbook",
    title: "Guide To Managing Mental Health Issues",
    description:
      "Practical tools and supportive strategies for anxiety, depression, and burnout.",
    fileUrl: "/downloads/mental-health-handbook.pdf",
    category: "guide",
  },
  {
    id: "prayer-guide",
    title: "Daily Prayer Guide",
    description: "A simple, powerful framework for daily prayer and devotion.",
    fileUrl: "/downloads/prayer-guide.pdf",
    category: "devotional",
  },
];



