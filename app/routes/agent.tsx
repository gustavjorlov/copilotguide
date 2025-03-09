import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "GitHub Copilot Agent Mode - Best Practices" },
    { name: "description", content: "Learn the best practices, dos and don'ts of using GitHub Copilot agent mode" },
  ];
};

export default function Agent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header style={{ viewTransitionName: 'page-header' }}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" style={{ viewTransitionName: 'page-title' }}>
            GitHub Copilot Agent Mode Guide
          </h1>
        </header>

        <section className="mb-12" style={{ viewTransitionName: 'intro-section' }}>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            What is Agent Mode?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Agent mode is an advanced feature of GitHub Copilot that allows you to have an interactive,
              context-aware coding session. Unlike regular completions, the agent understands your entire
              project context and can perform complex tasks through natural conversation.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12" style={{ viewTransitionName: 'features-grid' }}>
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">Do's</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Provide clear, specific context about what you want to achieve</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Break down complex tasks into smaller, focused requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Use follow-up questions to refine and improve suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Let the agent explore your codebase to understand context</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Review and validate generated code before implementing</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Don'ts</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">⨯</span>
                <span>Don't expect the agent to understand context you haven't shared</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">⨯</span>
                <span>Don't ask vague or overly broad questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">⨯</span>
                <span>Don't skip reviewing and testing generated code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">⨯</span>
                <span>Don't ignore suggestions about potential issues or improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">⨯</span>
                <span>Don't use it for sensitive or confidential code without proper review</span>
              </li>
            </ul>
          </section>
        </div>

        <section className="mb-12" style={{ viewTransitionName: 'communication-section' }}>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Effective Communication
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Good Example:</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                  "Can you help me implement form validation for the user registration 
                  component in src/components/Register.tsx? It should validate email format 
                  and ensure the password is at least 8 characters long."
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Poor Example:</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                  "Fix my form validation please"
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ viewTransitionName: 'key-features-section' }}>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Code Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Can analyze your entire codebase to understand dependencies, patterns, and existing implementations
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Interactive Problem Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Engages in back-and-forth dialogue to refine solutions and address edge cases
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                File Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Can create, modify, and manage multiple files while maintaining project consistency
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}