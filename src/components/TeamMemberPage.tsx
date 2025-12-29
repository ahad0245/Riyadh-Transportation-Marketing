// src/components/TeamMemberPage.tsx
import { useParams, Link } from "react-router-dom";
import { teamMembers, getFirstNameSlug } from "../lib/team";
import {
  ArrowLeft,
  Landmark,
  Users,
  Briefcase,
  Award,
  Shield,
  Globe
} from "lucide-react";

const TeamMemberPage: React.FC = () => {
  const { firstName } = useParams<{ firstName: string }>();

  const member = teamMembers.find(
    (m) => getFirstNameSlug(m) === (firstName ?? "").toLowerCase()
  );

  if (!member) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-navy-800 mb-4">
            Team Member Not Found
          </h1>
          <p className="text-navy-600 mb-6">
            We couldn&apos;t find the profile you were looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold hover:from-gold-600 hover:to-gold-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      {/* Top bar */}
      <header className="w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-white/60">Financial Engineering Corporation</p>
              <h1 className="text-xl font-bold">FE Corporation</h1>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-white/80 hover:text-gold-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to main site
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          {/* Left: Hero card */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 shadow-premium">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gold-400 shadow-2xl"
                />
                <div className="absolute -bottom-3 -right-3 bg-gold-500 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Leadership
                </div>
              </div>

              <div className="flex-1">
                <p className="uppercase tracking-[0.2em] text-xs text-gold-300 mb-3">
                  Leadership Profile
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {member.name}
                </h2>
                <p className="text-gold-300 text-lg font-semibold mb-4">
                  {member.title}
                </p>

                {member.credentials && (
                  <div className="mb-5 inline-flex items-start space-x-3 bg-gold-50/10 border border-gold-400/40 rounded-xl px-4 py-3">
                    <Award className="w-5 h-5 text-gold-300 mt-0.5" />
                    <p className="text-sm text-gold-100">{member.credentials}</p>
                  </div>
                )}

                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {member.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wide">
                    <Shield className="w-3 h-3 mr-2" />
                    Risk & Structuring
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wide">
                    <Globe className="w-3 h-3 mr-2" />
                    Global Markets
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wide">
                    <Briefcase className="w-3 h-3 mr-2" />
                    Capital Solutions
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Side info */}
          <aside className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-premium">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 text-gold-300 mr-2" />
                Role at FE Corporation
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                {member.name.split(" ")[0]} plays a central role in FE Corporation&apos;s
                mission to transform real-world assets into predictable, securable and
                standardized financial instruments.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Leads strategic mandates in their vertical</li>
                <li>• Advises on complex cross-border transactions</li>
                <li>• Connects global capital with real assets</li>
                <li>• Works closely with sovereign and institutional partners</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-premium">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Landmark className="w-5 h-5 text-gold-300 mr-2" />
                Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/60 uppercase mb-1">Domain</p>
                  <p className="text-sm font-semibold">Financial Engineering</p>
                </div>
                <div className="bg-white/5 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/60 uppercase mb-1">Coverage</p>
                  <p className="text-sm font-semibold">Global Infrastructure</p>
                </div>
                <div className="bg-white/5 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/60 uppercase mb-1">Collaboration</p>
                  <p className="text-sm font-semibold">Sovereigns & Institutions</p>
                </div>
                <div className="bg-white/5 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/60 uppercase mb-1">Location</p>
                  <p className="text-sm font-semibold">Toronto & Middle East</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-premium">
              <h3 className="text-lg font-semibold mb-4">Explore the Team</h3>
              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {teamMembers.map((m) => (
                  <Link
                    key={m.name}
                    to={`/${getFirstNameSlug(m)}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                      m.name === member.name
                        ? "bg-gold-500/20 border border-gold-400 text-gold-100"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <span>{m.name}</span>
                    <span className="text-xs text-white/50">{m.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default TeamMemberPage;
