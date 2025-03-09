import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "GitHub Copilot Agent Mode Guide" },
    { name: "description", content: "Learn how to supercharge your development with GitHub Copilot agent mode" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col items-center gap-6 mb-16" style={{ viewTransitionName: 'page-header' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center" style={{ viewTransitionName: 'page-title' }}>
            Master GitHub Copilot Agent Mode
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Unlock the full potential of AI-powered development with GitHub Copilot's agent mode -
            your intelligent coding companion that understands context and helps you write better code.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16" style={{ viewTransitionName: 'features-grid' }}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Context-Aware</h3>
            <p className="text-gray-600 dark:text-gray-300">Understands your entire codebase and project structure for more accurate suggestions</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Interactive</h3>
            <p className="text-gray-600 dark:text-gray-300">Engage in meaningful dialogue about your code and receive intelligent responses</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Proactive</h3>
            <p className="text-gray-600 dark:text-gray-300">Suggests improvements and identifies potential issues before they become problems</p>
          </div>
        </div>

        <div className="flex justify-center" style={{ viewTransitionName: 'cta-button' }}>
          <Link
            to="/agent"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Learn How to Use Agent Mode →
          </Link>
        </div>
      </div>
    </div>
  );
}
