import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "GitHub Copilot Features Guide" },
    { name: "description", content: "Learn about GitHub Copilot's powerful features including Agent Mode and mode comparison" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col items-center gap-6 mb-16" style={{ viewTransitionName: 'page-header' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center" style={{ viewTransitionName: 'page-title' }}>
            GitHub Copilot Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Unlock the full potential of AI-powered development with GitHub Copilot's advanced features.
            Learn about different modes and how to use them effectively.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Agent Mode</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experience the power of context-aware AI assistance. Agent mode understands your entire codebase
              and helps you write better code through intelligent interaction.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Context-Aware</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Understands your entire project structure</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Interactive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Engage in meaningful code dialogue</p>
              </div>
            </div>
            <Link
              to="/agent"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Learn Agent Mode →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Feature Comparison</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Understand the differences between Copilot's various modes and features to choose
              the right tool for your specific development needs.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Clear Overview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare different Copilot modes</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Use Cases</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Find the best tool for each task</p>
              </div>
            </div>
            <Link
              to="/compare"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Compare Features →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
