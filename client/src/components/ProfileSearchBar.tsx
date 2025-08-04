import React, { useState, useEffect, useRef } from 'react';
import { Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock user data - in real app this would come from API
const mockUsers = [
  { id: 1, name: "John Doe", title: "Senior Developer", avatar: "/placeholder.svg" },
  { id: 2, name: "Jane Smith", title: "UX Designer", avatar: "/placeholder.svg" },
  { id: 3, name: "Mike Johnson", title: "Product Manager", avatar: "/placeholder.svg" },
  { id: 4, name: "Sarah Wilson", title: "Frontend Developer", avatar: "/placeholder.svg" },
  { id: 5, name: "David Brown", title: "Backend Developer", avatar: "/placeholder.svg" },
  { id: 6, name: "Emily Davis", title: "Data Scientist", avatar: "/placeholder.svg" },
  { id: 7, name: "Chris Lee", title: "DevOps Engineer", avatar: "/placeholder.svg" },
  { id: 8, name: "Lisa Garcia", title: "Mobile Developer", avatar: "/placeholder.svg" },
];

interface ProfileSearchBarProps {
  className?: string;
}

const ProfileSearchBar: React.FC<ProfileSearchBarProps> = ({ className = "" }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof mockUsers>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = mockUsers.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserClick = (user: typeof mockUsers[0]) => {
    setQuery("");
    setIsOpen(false);
    // Navigate to user profile - in real app would use router
    window.location.href = `/profile/${user.id}`;
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-1 xs:left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search profiles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-5 xs:pl-9 pr-2 xs:pr-4 py-2 w-full bg-gray-50 border-gray-200 focus:bg-white focus:border-inkaer-blue transition-all duration-200"
        />
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {suggestions.map((user) => (
            <button
              key={user.id}
              onClick={() => handleUserClick(user)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-left"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.title}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileSearchBar;