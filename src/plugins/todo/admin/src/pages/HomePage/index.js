import React, { memo, useEffect, useState } from "react";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";

import Plus from "@strapi/icons/Plus";
import TodoModal from "../../components/TodoModal";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";
import todoReqs from "../../api/todo";

// import PropTypes from 'prop-types';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);
    const todo = await todoReqs.getAllTodos();
    setTodoData(todo);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function addTodo(data) {
    await todoReqs.addTodo(data);
    await fetchData();
  }
  async function toggleTodo(data) {
    await todoReqs.toggleTodo(data.id);
  }
  async function deleteTodo(data) {
    await todoReqs.deleteTodo(data.id);
    await fetchData();
  }
  async function editTodo(id, data) {
    await todoReqs.editTodo(id, data);
    await fetchData();
  }

  if (isLoading) return <LoadingIndicatorPage />;

  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <>
            <TodoCount count={todoData.length} />
            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>

      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </>
  );
};

export default HomePage;
