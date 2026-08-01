import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  onSearch?: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => (
  <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-4 shadow-card backdrop-blur md:flex-row md:items-center">
    <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3">
      <FaSearch className="text-gold" />
      <input
        type="text"
        placeholder="Search conferences"
        className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
        onChange={(event) => onSearch?.(event.target.value)}
      />
    </div>
    <select className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none">
      <option>All Categories</option>
      <option>AI</option>
      <option>Healthcare</option>
      <option>Technology</option>
    </select>
    <select className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none">
      <option>All Countries</option>
      <option>Singapore</option>
      <option>UK</option>
      <option>USA</option>
    </select>
    <button className="rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accentDark">
      Search
    </button>
  </div>
)

export default SearchBar
