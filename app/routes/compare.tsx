import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Compare GitHub Copilot Modes" },
    { name: "description", content: "Compare different GitHub Copilot modes: Chat, Copilot Edits, Agent Mode, and Edit Mode" },
  ];
};

export default function Compare() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header style={{ viewTransitionName: 'page-header' }}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" style={{ viewTransitionName: 'page-title' }}>
            Comparing GitHub Copilot Modes
          </h1>
        </header>

        <section className="mb-12" style={{ viewTransitionName: 'intro-section' }}>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Understanding Different Copilot Modes
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              GitHub Copilot offers several different modes of interaction, each optimized for specific use cases.
              Understanding these modes helps you choose the right tool for your task.
            </p>
          </div>
        </section>

        <div className="grid gap-8 mb-12">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Copilot Chat</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                A conversational interface for quick coding questions and assistance. Best for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Quick code explanations and documentation lookups</li>
                <li>Debugging help and error resolution</li>
                <li>Small code snippets and examples</li>
                <li>Learning about programming concepts</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Copilot Edits</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                An AI-powered code transformation tool. Ideal for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Refactoring existing code</li>
                <li>Adding types or documentation</li>
                <li>Converting code between languages or frameworks</li>
                <li>Fixing multiple instances of similar issues</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">Agent Mode</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                A powerful, context-aware coding assistant. Perfect for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Complex, multi-file changes</li>
                <li>Project-wide refactoring</li>
                <li>Adding new features that span multiple files</li>
                <li>Deep codebase understanding and analysis</li>
                <li>Interactive problem-solving sessions</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-4">Edit Mode</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                A focused mode for precise file editing. Best suited for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Making specific changes to individual files</li>
                <li>Fine-tuning generated code</li>
                <li>Implementing detailed requirements in a single file</li>
                <li>Quick iterations on code changes</li>
              </ul>
            </div>
          </section>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Choosing the Right Mode
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Choose <strong>Chat</strong> for quick questions and small snippets,
                <strong> Copilot Edits</strong> for code transformations,
                <strong> Agent Mode</strong> for complex tasks requiring project context, and
                <strong> Edit Mode</strong> for focused file-specific changes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}