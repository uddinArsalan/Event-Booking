import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}