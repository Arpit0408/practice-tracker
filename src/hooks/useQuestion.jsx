import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../features/dataSlice";

const useQuestion = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  let { data } = useSelector((state) => state.data);

  const [editId, setEditId] = useState(null);
  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsModalOpen(!isModalOpen);
  };

  const handleAddQuesForm = () => {
    setIsModalOpen(!isModalOpen);
    console.log("ques form is open");
  };

  const handleModalClose = () => {
    setIsModalOpen(!isModalOpen);
    console.log("modal is close");
  };

  return {
    isModalOpen,
    setIsModalOpen,
    data,
    editId,
    handleDelete,
    handleEdit,
    handleAddQuesForm,
    handleModalClose,
  };
};

export default useQuestion;
