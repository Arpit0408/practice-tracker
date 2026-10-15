import { Trash2, Pencil } from "lucide-react";
import AddQuestionsForm from "../components/AddQuestionsForm";
import {
  getDifficultyBadge,
  getCategoryDetails,
  getStatusDetails,
} from "../utils/badgeHelpers.js";
import useQuestion from "../hooks/useQuestion.jsx";
import useQuestionFilters from "../hooks/useQuestionFilters";

const QuestionList = ({ questions }) => {
  const { filteredques } = useQuestionFilters();
  const displayQuestions = questions || filteredques;

  const { isModalOpen, setIsModalOpen, editId, handleDelete, handleEdit } =
    useQuestion();

  return (
    <div className="w-full">
      <div className="bg-surface-card border border-borderline rounded-2xl overflow-hidden shadow-xs">
        <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3.5 bg-surface-muted/50 border-b border-borderline text-xs font-semibold uppercase tracking-wider text-content-muted">
          <div className="col-span-6">Question & Category</div>
          <div className="col-span-2 text-center">Difficulty</div>
          <div className="col-span-3 text-center">Status</div>
          <div className="col-span-1 text-right">Action</div>
        </div>

        <div className="divide-y divide-borderline">
          {displayQuestions.map((item) => {
            const categoryMeta = getCategoryDetails(item.category);
            const CategoryIcon = categoryMeta.icon;
            const statusMeta = getStatusDetails(item.status);
            const StatusIcon = statusMeta.icon;

            return (
              <div
                key={item.id}
                className="group p-4 sm:p-5 md:px-6 md:py-4 flex flex-col md:grid md:grid-cols-12 md:items-center gap-3 md:gap-4 hover:bg-surface-muted/40 transition-colors"
              >
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium border ${categoryMeta.color}`}
                    >
                      <CategoryIcon className="w-3 h-3" />
                      <span>{item.category}</span>
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-content-primary group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-2 flex items-center md:justify-center">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border uppercase ${getDifficultyBadge(
                      item.difficulty,
                    )}`}
                  >
                    {item.difficulty}
                  </span>
                </div>

                <div className="md:col-span-3 flex items-center md:justify-center">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${statusMeta.color}`}
                  >
                    <StatusIcon className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <div className="md:col-span-1 flex items-center justify-end gap-1">
                  <button
                    className="p-1.5 rounded-lg text-content-muted hover:text-brand hover:bg-brand/10 transition-colors cursor-pointer"
                    title="Edit Question"
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    <Pencil className="w-4 h-4" />
                  </button>

                  <button
                    className="p-1.5 rounded-lg text-content-muted hover:text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer"
                    title="Delete Question"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isModalOpen && (
        <AddQuestionsForm
          updateid={editId}
          onclose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default QuestionList;
