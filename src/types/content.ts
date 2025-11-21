export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string; // ISO string
  author: string;
  tags: string[];
  coverImageUrl?: string;
};

export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  fileUrl: string; // external or public link
  category: "devotional" | "guide" | "worksheet" | "report";
};



