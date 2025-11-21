import { MessageCircle, Send, Facebook, Instagram, Users } from "lucide-react";

export const metadata = {
  title: "Join Community | EELI - Connect with Women and Children",
  description: "Join EELI's supportive community through WhatsApp, Telegram, Facebook, and Instagram. Be part of a strong network where women and children thrive together.",
  keywords: "join EELI community, women support groups, mentorship community, faith-based community, WhatsApp group, Telegram channel, Facebook group",
  openGraph: {
    title: "Join Community | EELI - Connect with Women and Children",
    description: "Join EELI's supportive community through social media groups. Be part of a strong network where women and children thrive together.",
    type: "website",
  },
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-25">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold">Join Our Community</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Be Part of EELI</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Become part of a strong, supportive network where women and children thrive. Join our groups with one click.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="https://chat.whatsapp.com/JA058BbNzXiLUsvlULq1s8?mode=ems_share_c" 
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <span className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </span>
            <h3 className="mt-4 font-semibold text-gray-900">WhatsApp</h3>
            <p className="text-gray-600 text-sm mt-2">Join our WhatsApp community</p>
          </a>

          <a
            href="#" 
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <span className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Send className="w-6 h-6" />
            </span>
            <h3 className="mt-4 font-semibold text-gray-900">Telegram</h3>
            <p className="text-gray-600 text-sm mt-2">Join our Telegram channel</p>
          </a>

          <a
            href="https://www.facebook.com/share/1AeVLRGLYo/" 
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <span className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Facebook className="w-6 h-6" />
            </span>
            <h3 className="mt-4 font-semibold text-gray-900">Facebook</h3>
            <p className="text-gray-600 text-sm mt-2">Join our Facebook group</p>
          </a>

          <a
            href="https://www.instagram.com/real_eeli?utm_source=qr&igsh=MWgxazY1b2Y5cjhyNQ==" 
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <span className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
              <Instagram className="w-6 h-6" />
            </span>
            <h3 className="mt-4 font-semibold text-gray-900">Instagram</h3>
            <p className="text-gray-600 text-sm mt-2">Follow us on Instagram</p>
          </a>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center">
              <Users className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Community Guidelines</h2>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Be respectful, kind, and supportive.</li>
            <li>Maintain confidentiality and protect each other's stories.</li>
            <li>No harassment, spam, or harmful content.</li>
            <li>Encourage growth, healing, and faith-based values.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


