import Profile from "@components/Profile";
import React, { useEffect, useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState();
  const handleDelete = async () => {};
  const handleEdit = () => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();

      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <Profile
      name="my"
      desc="welcome to my personalized profile"
      data={posts}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

const MyProfileWithSession = () => (
  <SessionProvider>
    <MyProfile />
  </SessionProvider>
);

export default MyProfileWithSession;
