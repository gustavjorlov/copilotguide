import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "GitHub Copilot History & Evolution" },
    { name: "description", content: "Explore the history and evolution of GitHub Copilot's AI capabilities and major milestones" },
  ];
};

interface Milestone {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const milestones: Milestone[] = [
  {
    date: "June 2021",
    title: "Technical Preview Launch",
    description: "GitHub Copilot introduced as a technical preview, offering AI-powered code completion based on OpenAI Codex.",
    highlight: true
  },
  {
    date: "October 2021",
    title: "Multi-line Completion",
    description: "Enhanced capabilities to suggest complete functions and larger code blocks."
  },
  {
    date: "February 2022",
    title: "Public Beta Release",
    description: "Expanded access to more developers and added support for more programming languages and IDEs."
  },
  {
    date: "June 2022",
    title: "General Availability",
    description: "Official launch of GitHub Copilot, making it available to all developers.",
    highlight: true
  },
  {
    date: "March 2023",
    title: "Copilot Chat Beta",
    description: "Introduction of Copilot Chat, enabling natural language interactions and code explanations.",
    highlight: true
  },
  {
    date: "July 2023",
    title: "Copilot Enterprise",
    description: "Launch of enterprise-focused features including workspace awareness and improved security."
  },
  {
    date: "November 2023",
    title: "Advanced Capabilities",
    description: "Introduction of agent mode, edit mode, and enhanced contextual understanding.",
    highlight: true
  },
  {
    date: "February 2024",
    title: "Copilot Enterprise GA",
    description: "General availability of Copilot Enterprise with organization-wide AI policies and custom models.",
    highlight: true
  },
  {
    date: "March 2024",
    title: "Mobile Support",
    description: "GitHub Copilot becomes available on mobile devices through GitHub Mobile app."
  },
  {
    date: "April 2024",
    title: "Copilot Community",
    description: "Launch of Copilot Community features enabling sharing and collaboration of AI-powered development practices.",
    highlight: true
  }
];

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header style={{ viewTransitionName: 'page-header' }}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" style={{ viewTransitionName: 'page-title' }}>
            The Evolution of GitHub Copilot
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Explore the journey of GitHub Copilot from its inception to becoming a sophisticated AI programming assistant.
          </p>
        </header>

        {/* Timeline Visualization */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700" />
          
          {/* Timeline entries */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.date}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <div className={`p-6 rounded-lg ${
                    milestone.highlight
                      ? "bg-blue-50 dark:bg-blue-900/30"
                      : "bg-white dark:bg-gray-800"
                  }`}>
                    <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                      {milestone.date}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900" />
              </div>
            ))}
          </div>
        </div>

        {/* Key Capabilities Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Key AI Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Code Generation
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Context-aware code suggestions</li>
                <li>• Multi-line code completion</li>
                <li>• Function and class generation</li>
                <li>• Test case creation</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Natural Language Understanding
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Code explanation in plain English</li>
                <li>• Natural language to code conversion</li>
                <li>• Intelligent code refactoring</li>
                <li>• Documentation generation</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contextual Awareness
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Project-wide code understanding</li>
                <li>• Framework-specific suggestions</li>
                <li>• Dependency awareness</li>
                <li>• Style consistency maintenance</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Learning & Adaptation
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Continuous model improvements</li>
                <li>• User preference learning</li>
                <li>• Codebase-specific patterns</li>
                <li>• Best practices suggestions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}