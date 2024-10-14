import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BriefcaseIcon, ChatIcon, DocumentIcon, UserIcon, ImportIcon,MenuIcon} from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen shadow-md p-4">
      <div className="mb-8">
        <MenuIcon className="h-6 w-6" />      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center text-lg font-semibold hover:text-blue-500">
              <HomeIcon className="h-6 w-6 mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/network" className="flex items-center text-lg font-semibold hover:text-blue-500">
              <UserIcon className="h-6 w-6 mr-2" />
              Network
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="flex items-center text-lg font-semibold hover:text-blue-500">
              <BriefcaseIcon className="h-6 w-6 mr-2" />
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/messages" className="flex items-center text-lg font-semibold hover:text-blue-500">
              <ChatIcon className="h-6 w-6 mr-2" />
              Messages
            </Link>
          </li>
          <li>
            <Link to="/documents" className="flex items-center text-lg font-semibold hover:text-blue-500">
              <DocumentIcon className="h-6 w-6 mr-2" />
              Documents
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex items-center text-lg font-semibold hover:text-blue-500">
              <UserIcon className="h-6 w-6 mr-2" />
              Users
            </Link>
          </li>
          <li>
            <button className="mt-8 bg-red-500 text-white w-full py-2 rounded-lg flex justify-center items-center">
              <span>Import</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
