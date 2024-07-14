// components/SocialShare.tsx
import { FaTwitter, FaFacebook, FaPinterest, FaTumblr, FaEnvelope } from 'react-icons/fa';

export default function SocialShare() {
  return (
    <div className="fixed top-1/3 left-5 flex flex-col items-center space-y-4 text-yellow-400">
      <span>Share:</span>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-yellow-400 hover:text-blue-400" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-yellow-400 hover:text-blue-600" />
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterest className="text-yellow-400 hover:text-red-600" />
      </a>
      <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer">
        <FaTumblr className="text-yellow-400 hover:text-blue-700" />
      </a>
      <a href="mailto:example@example.com">
        <FaEnvelope className="text-yellow-400 hover:text-gray-700" />
      </a>
    </div>
  );
}
