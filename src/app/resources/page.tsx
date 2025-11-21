import { sampleResources } from "@/lib/content";
import { Download } from "lucide-react";

export const metadata = {
  title: "Resources | EELI - Free Downloads and Guides",
  description: "Download free resources from EELI including mental health guides, prayer guides, devotionals, and educational materials to support your journey of healing and empowerment.",
  keywords: "EELI resources, free downloads, mental health guide, prayer guide, devotionals, women empowerment resources, faith-based materials",
  openGraph: {
    title: "Resources | EELI - Free Downloads and Guides",
    description: "Download free resources from EELI including mental health guides, prayer guides, and educational materials.",
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-purple-600 font-semibold">Free Downloads</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Devotionals, guides, and tools to support your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sampleResources.map((r) => (
            <a
              key={r.id}
              href={r.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm uppercase tracking-wide text-gray-500">{r.category}</div>
              <h2 className="mt-2 text-xl font-bold text-gray-900">{r.title}</h2>
              <p className="mt-2 text-gray-600">{r.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-purple-600 font-semibold">
                <Download className="w-4 h-4" /> Download
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


