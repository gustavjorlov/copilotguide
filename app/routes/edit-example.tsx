import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "GitHub Copilot Edit Mode Example" },
    { name: "description", content: "See GitHub Copilot's edit mode in action with real-world examples" },
  ];
};

interface CodeExample {
  title: string;
  before: string;
  after: string;
  explanation: string;
}

const examples: CodeExample[] = [
  {
    title: "Adding TypeScript Types",
    before: `function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}`,
    after: `interface CartItem {
  price: number;
  quantity: number;
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}`,
    explanation: "Converting a JavaScript function to TypeScript by adding type definitions"
  },
  {
    title: "Adding Input Validation",
    before: `function updateUserProfile(name, email) {
  database.update({ name, email });
}`,
    after: `function updateUserProfile(name: string, email: string): void {
  if (!name?.trim()) {
    throw new Error('Name is required');
  }
  if (!email?.match(/^[^@]+@[^@]+\\.[^@]+$/)) {
    throw new Error('Invalid email format');
  }
  database.update({ name: name.trim(), email: email.toLowerCase() });
}`,
    explanation: "Adding input validation and data sanitization"
  },
  {
    title: "Converting to Modern Syntax",
    before: `var UserList = React.createClass({
  getInitialState: function() {
    return { users: [] };
  },
  componentDidMount: function() {
    this.fetchUsers();
  },
  render: function() {
    return <div>{this.state.users.map(function(user) {
      return <div key={user.id}>{user.name}</div>;
    })}</div>;
  }
});`,
    after: `const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};`,
    explanation: "Converting a class component to a functional component with hooks"
  }
];

export default function EditExample() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header style={{ viewTransitionName: 'page-header' }}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" style={{ viewTransitionName: 'page-title' }}>
            Copilot Edit Mode in Action
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            See how Copilot's edit mode transforms code with these real-world examples.
            Simply select the code you want to modify and describe the changes needed.
          </p>
        </header>

        <div className="space-y-12">
          {examples.map((example, index) => (
            <section 
              key={example.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {example.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{example.explanation}</p>
              </div>

              <div className="grid md:grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Before:</h3>
                  <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      {example.before}
                    </code>
                  </pre>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">After:</h3>
                  <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded overflow-x-auto">
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      {example.after}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
            How to Use Edit Mode
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
            <li>Select the code you want to modify in your editor</li>
            <li>Open Copilot (usually with Ctrl+I or Cmd+I)</li>
            <li>Describe the changes you want to make in natural language</li>
            <li>Review the suggested changes</li>
            <li>Apply the changes if they meet your requirements</li>
          </ol>
        </section>
      </div>
    </div>
  );
}