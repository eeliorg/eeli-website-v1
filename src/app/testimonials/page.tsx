export const metadata = {
  title: "Testimonials & Impact | EELI - Real Stories, Real Strength",
  description: "Read inspiring testimonials from women and children whose lives have been transformed through EELI's programs. Discover the real impact of our mentorship and community support.",
  keywords: "EELI testimonials, women empowerment stories, children success stories, mentorship impact, community support testimonials, faith-based transformation",
  openGraph: {
    title: "Testimonials & Impact | EELI - Real Stories, Real Strength",
    description: "Read inspiring testimonials from women and children whose lives have been transformed through EELI's programs.",
    type: "website",
  },
};

export default function TestimonialsPage() {
  const stats = [
    { label: "Women Empowered", value: "50+" },
    { label: "Children Supported", value: "100+" },
    { label: "Community Events", value: "25+" },
  ];

  const testimonials = [
    {
      quote:
        "EELI helped me rediscover my identity in Christ and find the courage to lead in my community.",
      author: "Sarah M.",
    },
    {
      quote:
        "Through EELI, my children received tools and love that changed our home for the better.",
      author: "Maria L.",
    },
    {
      quote:
        "The mentorship and resources have been life-changing. I'm stronger, wiser, and hopeful.",
      author: "Jennifer K.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold">EELI Impact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Real Stories, Real Strength
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We uplift women and children through mentorship, community care, and faith. Here's a glimpse of the transformation.
          </p>
        </div>

        <section>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-8 text-center">
                <div className="text-4xl font-bold text-purple-600">{s.value}</div>
                <div className="mt-2 text-gray-700 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
                <p className="text-gray-700 italic">"{t.quote}"</p>
                <p className="mt-4 font-semibold text-gray-900">- {t.author}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


