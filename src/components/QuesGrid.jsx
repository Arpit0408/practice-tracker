import { Trash2, Pencil } from "lucide-react";
import useQuestion from "../hooks/useQuestion.jsx";
import useQuestionFilters from "../hooks/useQuestionFilters";
import AddQuestionsForm from "../components/AddQuestionsForm";
import {
  getDifficultyBadge,
  getCategoryDetails,
  getStatusDetails,
} from "../utils/badgeHelpers.js";

const QuesGrid = ({ questions }) => {
  const { filteredques } = useQuestionFilters();
  const displayQuestions = questions || filteredques;

  const { isModalOpen, setIsModalOpen, editId, handleDelete, handleEdit } =
    useQuestion();

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {displayQuestions.map((item) => {
          const categoryMeta = getCategoryDetails(item.category);
          const CategoryIcon = categoryMeta.icon;
          const statusMeta = getStatusDetails(item.status);
          const StatusIcon = statusMeta.icon;

          return (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-surface-card border border-borderline hover:border-brand/40 shadow-xs hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${categoryMeta.color}`}
                  >
                    <CategoryIcon className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </span>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border uppercase ${getDifficultyBadge(
                      item.difficulty,
                    )}`}
                  >
                    {item.difficulty}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-content-primary line-clamp-2 group-hover:text-brand transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="mt-5 pt-3.5 border-t border-borderline/70 flex items-center justify-between">
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${statusMeta.color}`}
                >
                  <StatusIcon className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </div>

                <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-1.5 rounded-lg text-content-muted hover:text-brand hover:bg-brand/10 transition-colors cursor-pointer"
                    title="Edit question"
                    onClick={() => handleEdit(item.id)}
                  >
                    <Pencil className="w-4 h-4" />
                  </button>

                  <button
                    className="p-1.5 rounded-lg text-content-muted hover:text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer"
                    title="Delete question"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
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

export default QuesGrid;
