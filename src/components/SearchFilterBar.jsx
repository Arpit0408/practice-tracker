import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import categories from "../data/category.json";
import difficulties from "../data/difficulty.json";
import statuses from "../data/status.json";
import CustomSelect from "./CustomSelect";

const SearchFilterBar = ({
  searchTerm = "",
  setSearchTerm = () => {},
  selectedCategory = "All",
  setSelectedCategory = () => {},
  selectedDifficulty = "All",
  setSelectedDifficulty = () => {},
  selectedStatus = "All",
  setSelectedStatus = () => {},
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const categoryOptions = ["All", ...categories];
  const difficultyOptions = ["All", ...difficulties];
  const statusOptions = ["All", ...statuses];

  return (
    <div className="p-4 rounded-2xl bg-surface-card border border-borderline space-y-3 shadow-xs">
      <div className="flex flex-col md:flex-row items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-content-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions by title or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-muted border border-borderline text-content-primary placeholder:text-content-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
          />
        </div>

        {/* Filter Toggle Button */}
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-muted hover:bg-surface-muted/80 border border-borderline text-content-primary text-sm font-medium transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4 text-content-muted" />
          <span>Filters</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-content-muted transition-transform duration-200 ${
              showFilters ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expandable Filter Selectors using CustomSelect */}
      {showFilters && (
        <div className="pt-3 border-t border-borderline grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in duration-200">
          <CustomSelect
            label="Category"
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={categoryOptions}
            placeholder="Filter Category"
          />

          <CustomSelect
            label="Difficulty"
            value={selectedDifficulty}
            onChange={setSelectedDifficulty}
            options={difficultyOptions}
            placeholder="Filter Difficulty"
          />

          <CustomSelect
            label="Status"
            value={selectedStatus}
            onChange={setSelectedStatus}
            options={statusOptions}
            placeholder="Filter Status"
          />
        </div>
      )}
    </div>
  );
};

export default SearchFilterBar;
