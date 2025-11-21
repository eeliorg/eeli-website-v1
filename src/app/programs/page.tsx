"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, Target, CheckCircle2, Sparkles } from "lucide-react";

type ModuleSection = {
  title: string;
  items: string[];
};

type ProgramModule = {
  id: number;
  name: string;
  summary: string;
  sections: ModuleSection[];
};

const modules: ProgramModule[] = [
  {
    id: 1,
    name: "Healing & Wholeness",
    summary: "Foundations of inner healing, identity in Christ, and emotional wholeness.",
    sections: [
      { title: "Objectives", items: ["Understand root causes of pain", "Learn biblical healing principles", "Build daily practices that restore joy"] },
      { title: "Resources", items: ["Guided prayer prompts", "Healing scriptures list", "Journaling templates"] },
      { title: "Activities", items: ["Weekly reflection", "Peer encouragement circles", "Prayer partner check-ins"] },
      { title: "Spiritual Components", items: ["Forgiveness practice", "Identity affirmations", "Worship & gratitude"] },
    ],
  },
  {
    id: 2,
    name: "Leadership & Purpose",
    summary: "Discovering calling, values, and servant leadership for lasting impact.",
    sections: [
      { title: "Objectives", items: ["Clarify purpose statement", "Learn servant leadership", "Grow confidence in decision-making"] },
      { title: "Resources", items: ["Purpose canvas", "Leadership reading list", "Mentor guide"] },
      { title: "Activities", items: ["Values mapping", "Role model interview", "Purpose presentation"] },
      { title: "Spiritual Components", items: ["Purpose scriptures", "Prayer of commissioning", "Accountability"] },
    ],
  },
  {
    id: 3,
    name: "Mindset & Resilience",
    summary: "Renewing the mind, building resilience, and overcoming limiting beliefs.",
    sections: [
      { title: "Objectives", items: ["Identify limiting beliefs", "Practice renewal disciplines", "Build resilience plan"] },
      { title: "Resources", items: ["Thought record sheet", "Affirmations deck", "Stress toolkit"] },
      { title: "Activities", items: ["Reframing exercises", "Boundaries practice", "Resilience buddy tasks"] },
      { title: "Spiritual Components", items: ["Romans 12:2 study", "Gratitude practice", "Faith confessions"] },
    ],
  },
  {
    id: 4,
    name: "Mentorship & Community",
    summary: "Healthy mentoring relationships and thriving support communities.",
    sections: [
      { title: "Objectives", items: ["Mentor matching basics", "Community care model", "Feedback rhythms"] },
      { title: "Resources", items: ["Mentor handbook", "Session outlines", "Community covenant"] },
      { title: "Activities", items: ["Triad sessions", "Storytelling circle", "Service project"] },
      { title: "Spiritual Components", items: ["Praying together", "Encouragement gifts", "Unity scriptures"] },
    ],
  },
  {
    id: 5,
    name: "Motherhood & Family",
    summary: "Grace-filled parenting, emotional safety, and family rhythms.",
    sections: [
      { title: "Objectives", items: ["Emotional safety at home", "Healthy routines", "Parent-child bonding"] },
      { title: "Resources", items: ["Family meeting template", "Affection language guide", "Bedtime prayers"] },
      { title: "Activities", items: ["Weekly family time", "Affirmation notes", "Gratitude jar"] },
      { title: "Spiritual Components", items: ["Family altar", "Blessing declarations", "Faith traditions"] },
    ],
  },
  {
    id: 6,
    name: "Educational Empowerment for Children",
    summary: "Academic support, character growth, and future-focused learning.",
    sections: [
      { title: "Objectives", items: ["Study skills", "Goal setting", "Reading habit"] },
      { title: "Resources", items: ["Study planner", "Reading list", "Scholarship links"] },
      { title: "Activities", items: ["Homework club", "Book challenge", "Career day"] },
      { title: "Spiritual Components", items: ["Wisdom prayers", "Service learning", "Role models in scripture"] },
    ],
  },
  {
    id: 7,
    name: "Wellness & Mental Health",
    summary: "Practices for emotional regulation, rest, and sustainable living.",
    sections: [
      { title: "Objectives", items: ["Stress awareness", "Self-care plan", "Support pathways"] },
      { title: "Resources", items: ["Burnout guide", "Breathing scripts", "Support directory"] },
      { title: "Activities", items: ["Sabbath practice", "Journaling", "Walk & pray"] },
      { title: "Spiritual Components", items: ["Peace scriptures", "Lament & hope", "Worship reset"] },
    ],
  },
  {
    id: 8,
    name: "Career & Economic Empowerment",
    summary: "Skills, stewardship, and marketplace impact with integrity.",
    sections: [
      { title: "Objectives", items: ["CV & interview skills", "Budgeting", "Micro-enterprise basics"] },
      { title: "Resources", items: ["CV template", "Budget sheet", "Starter business list"] },
      { title: "Activities", items: ["Mock interview", "Savings challenge", "Business pitch"] },
      { title: "Spiritual Components", items: ["Work as worship", "Generosity plan", "Integrity commitments"] },
    ],
  },
  {
    id: 9,
    name: "Faith & Discipleship",
    summary: "Deepening devotion, scriptural literacy, and Christlike character.",
    sections: [
      { title: "Objectives", items: ["Daily devotion", "Bible study rhythm", "Serving others"] },
      { title: "Resources", items: ["Devotional guide", "Reading plans", "Prayer partners"] },
      { title: "Activities", items: ["Scripture memorization", "Testimony night", "Acts of kindness"] },
      { title: "Spiritual Components", items: ["Fruit of the Spirit", "Beatitudes journey", "Communion reflection"] },
    ],
  },
];

function ModuleCard({ module, open, onToggle }: { module: ProgramModule; open: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        aria-expanded={open}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left p-6 hover:bg-gray-50"
      >
        <div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <BookOpen className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-semibold text-gray-900">{module.name}</h3>
          </div>
          <p className="text-gray-600 mt-2 pl-13">{module.summary}</p>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-6 pb-6"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {module.sections.map((section) => (
                <div key={section.title} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    {section.title === "Objectives" ? (
                      <Target className="w-4 h-4 text-purple-600" />
                    ) : section.title === "Resources" ? (
                      <BookOpen className="w-4 h-4 text-purple-600" />
                    ) : section.title === "Activities" ? (
                      <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    )}
                    <h4 className="text-sm font-semibold text-gray-900">{section.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProgramsPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <p className="text-purple-600 font-semibold">EELI Programs</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Modules That Empower and Elevate</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Explore our 9 transformative modules. Each module includes objectives, activities, resources, and spiritual components to guide growth and impact.
          </p>
        </header>

        <div className="grid gap-6">
          {modules.map((m) => (
            <ModuleCard
              key={m.id}
              module={m}
              open={openId === m.id}
              onToggle={() => setOpenId(openId === m.id ? null : m.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


