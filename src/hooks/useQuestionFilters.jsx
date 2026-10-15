import { useState } from "react";
import { useSelector } from "react-redux";

const useQuestionFilters = () => {
  const { data } = useSelector((state) => state.data);
  console.log("formdata is here", data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredques = data.filter((item) => {
    const matchSearch = item.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchDifficulty =
      selectedDifficulty === "All" || item.difficulty === selectedDifficulty;
    const matchStatus =
      selectedStatus === "All" || item.status === selectedStatus;
    return matchSearch && matchCategory && matchDifficulty && matchStatus;
  });

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedStatus,
    setSelectedStatus,
    filteredques,
  };
};

export default useQuestionFilters;
