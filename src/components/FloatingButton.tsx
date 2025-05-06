import { Link } from 'react-router-dom';

const FloatingButton = () => {
  return (
    <Link
      to="https://appdoers.co.nz"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-gray-600 hover:text-clean-blue transition-colors z-50"
    >
      <img src="/favicon.png" alt="Appdoers Logo" className="h-6 w-auto" />
      <span className="text-sm font-medium">Powered by Appdoers</span>
    </Link>
  );
};

export default FloatingButton; 