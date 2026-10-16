import React, { useEffect } from "react";
import categories from "../data/category.json";
import difficulty from "../data/difficulty.json";
import statuses from "../data/status.json";
import {
  X,
  Plus,
  Sparkles,
  Code2,
  Terminal,
  GitBranch,
  Laptop,
  CheckCircle2,
  Clock,
  CircleDot,
} from "lucide-react";
import { useForm } from "react-hook-form";
import CustomSelect from "./CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../features/dataSlice";

const getCategoryIcon = (category) => {
  switch (category) {
    case "DSA":
      return Code2;
    case "Interview Questions":
      return Terminal;
    case "Git Questions":
      return GitBranch;
    case "Machine Coding":
      return Laptop;
    default:
      return Code2;
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return CheckCircle2;
    case "In Progress":
      return Clock;
    case "Pending":
      return CircleDot;
    default:
      return CircleDot;
  }
};

const AddQuestionsForm = ({ onclose, updateid }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      category: "DSA",
      difficulty: "Easy",
      status: "Pending",
    },
  });

  useEffect(() => {
    register("category", { required: "Category is required" });
    register("difficulty", { required: "Difficulty is required" });
    register("status", { required: "Status is required" });
  }, [register]);

  const selectedCategory = watch("category");
  const selectedDifficulty = watch("difficulty");
  const selectedStatus = watch("status");

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.data);
  const questiontoEdit = data.find((item) => {
    return item.id === updateid;
  });
  console.log("questiontoEdit", questiontoEdit);

  useEffect(() => {
    if (questiontoEdit) {
      reset(questiontoEdit);
    }
  }, [questiontoEdit, reset]);

  const onSubmit = (data) => {
    const newQuestion = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    console.log("form submitted", newQuestion);
    dispatch(addData(newQuestion));
    reset();
    onclose();
  };

  const handleEdit = (data) => {
    const updatedQuestion = {
      ...data,
      id: updateid,
    };
    dispatch(updateData(updatedQuestion));
    reset();
    onclose();
  };

  return (
    <div
      onClick={onclose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-surface-card border border-borderline rounded-2xl shadow-2xl p-6 sm:p-7 flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex items-start justify-between pb-4 border-b border-borderline">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-brand-light text-brand">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold font-montserrat text-content-primary">
                Add New Question
              </h2>
            </div>
            <p className="text-xs text-content-muted mt-1 ml-8">
              Track a problem, concept, or machine coding challenge.
            </p>
          </div>

          <button
            type="button"
            onClick={onclose}
            className="p-2 rounded-xl text-content-muted hover:text-content-primary hover:bg-surface-muted transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          className="flex flex-col gap-5"
          onSubmit={
            updateid ? handleSubmit(handleEdit) : handleSubmit(onSubmit)
          }
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
              Question Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Question title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
              placeholder="e.g., Reverse Linked List, Implement Debounce, Event Loop..."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-borderline text-content-primary placeholder:text-content-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
            />
            {errors.title && (
              <p className="text-rose-500 text-xs font-medium">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomSelect
              label="Category"
              value={selectedCategory}
              onChange={(val) =>
                setValue("category", val, { shouldValidate: true })
              }
              options={categories}
              placeholder="Select Category"
              getIcon={(cat) => {
                const Icon = getCategoryIcon(cat);
                return <Icon className="w-4 h-4" />;
              }}
              error={errors.category?.message}
            />

            <CustomSelect
              label="Difficulty"
              value={selectedDifficulty}
              onChange={(val) =>
                setValue("difficulty", val, { shouldValidate: true })
              }
              options={difficulty}
              placeholder="Select Difficulty"
              error={errors.difficulty?.message}
            />
          </div>

          <CustomSelect
            label="Current Status"
            value={selectedStatus}
            onChange={(val) =>
              setValue("status", val, { shouldValidate: true })
            }
            options={statuses}
            placeholder="Select Status"
            getIcon={(status) => {
              const Icon = getStatusIcon(status);
              return <Icon className="w-4 h-4" />;
            }}
            error={errors.status?.message}
          />

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-borderline mt-1">
            <button
              type="button"
              onClick={onclose}
              className="px-4 py-2.5 rounded-xl border border-borderline text-content-secondary hover:text-content-primary hover:bg-surface-muted text-sm font-medium transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover active:scale-95 text-white text-sm font-medium shadow-md shadow-brand/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Save Question</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionsForm;
