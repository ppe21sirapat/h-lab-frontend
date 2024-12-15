import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile/UserProfile";

const UserProfilePage = () => {
  const { userId } = useParams();
  return (
    <>
      <UserProfile userId={userId} />
    </>
  );
};

export default UserProfilePage;
