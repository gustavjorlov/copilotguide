import { Link, useLocation } from "@remix-run/react";

export function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  if (pathSegments.length === 0) return null;

  return (
    <nav className="text-sm mb-4 text-gray-600 dark:text-gray-400">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-gray-900 dark:hover:text-gray-200">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          
          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </span>
              ) : (
                <Link 
                  to={path}
                  className="hover:text-gray-900 dark:hover:text-gray-200"
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}