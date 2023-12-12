import  { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound:FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl">Page not found</p>
        <Link to="/">
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;