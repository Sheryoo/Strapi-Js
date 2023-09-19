/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import {
  BaseHeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
} from "@strapi/design-system";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";

import { Illo } from "../../components/Illo/Illo";
import { Plus } from "@strapi/icons";

import UserModal from "../../components/UserModal/UserModal";
import UserCount from "../../components/UserCount/UserCount";
import UserTable from "../../components/UserTable/UserTable";
import userReqs from "../../api/userReqs";

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);
    const user = await userReqs.getAllUsers();
    setUserData(user);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function addUser(data) {
    await userReqs.addUser(data);
    await fetchData();
  }

  async function deleteUser(data) {
    await userReqs.deleteUser(data.id);
    await fetchData();
  }

  if (isLoading) return <LoadingIndicatorPage />;
  return (
    <>
      <BaseHeaderLayout
        title="Add User And Age"
        subtitle="Your Users Data In One Place."
        as="h2"
      />
      <ContentLayout>
        {userData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You Don't Have Any Users"
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add Your User
              </Button>
            }
          />
        ) : (
          <>
            <UserCount count={userData.length} />
            <UserTable
              userData={userData}
              setShowModal={setShowModal}
              deleteUser={deleteUser}
            />
          </>
      )}
      {showModal && <UserModal setShowModal={setShowModal} addUser={addUser} />}
      </ContentLayout>
    </>
  );
};

export default HomePage;
