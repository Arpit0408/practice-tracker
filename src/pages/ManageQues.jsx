import React, { useState } from "react";
import { Plus, LayoutGrid, List } from "lucide-react";
import QuestionList from "../components/QuestionList";
import AddQuestionsForm from "../components/AddQuestionsForm";
import QuesGrid from "../components/QuesGrid";
import SearchFilterBar from "../components/SearchFilterBar";
import useQuestionFilters from "../hooks/useQuestionFilters";
import useQuestion from "../hooks/useQuestion";
const ManageQues = () => {
  const [gridStyle, setGridStyle] = useState(false);

  const {
    searchTerm,
    filteredques,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedStatus,
    setSelectedStatus,
  } = useQuestionFilters();

  const { isModalOpen, handleAddQuesForm, handleModalClose } =
    useQuestion();

  return (
    <div className="w-full space-y-6 px-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-borderline">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-montserrat text-content-primary">
            Manage Questions
          </h1>
          <p className="text-sm text-content-secondary mt-1">
            Organize, track, and filter your interview preparation questions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAddQuesForm}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover active:scale-95 text-white font-medium text-sm shadow-sm shadow-brand/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add Question</span>
          </button>

          <div className="flex items-center p-1 rounded-xl bg-surface-card border border-borderline shadow-2xs">
            <button
              type="button"
              onClick={() => setGridStyle(false)}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                !gridStyle
                  ? "bg-brand text-white shadow-xs"
                  : "text-content-muted hover:text-content-primary hover:bg-surface-muted"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setGridStyle(true)}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                gridStyle
                  ? "bg-brand text-white shadow-xs"
                  : "text-content-muted hover:text-content-primary hover:bg-surface-muted"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <SearchFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <div className="pt-2">
        {filteredques.length === 0 ? (
          <div className="text-center py-12 text-content-muted">
            <p className="text-base font-medium">
              No questions found matching your filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedDifficulty("All");
                setSelectedStatus("All");
              }}
              className="mt-2 text-sm text-brand underline cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        ) : gridStyle ? (
          <QuesGrid questions={filteredques} />
        ) : (
          <QuestionList questions={filteredques} />
        )}
      </div>

      {isModalOpen && <AddQuestionsForm onclose={handleModalClose} />}
    </div>
  );
};

export default ManageQues;
