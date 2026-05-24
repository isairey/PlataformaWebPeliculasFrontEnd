import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useBackendApi from "../../../hooks/useBackendApi";
import useLogout from "../../../hooks/useLogout";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminLogo from "../../admin-logo/AdminLogo";
import CircularAvatar from "../../circular-avatar/CircularAvatar";
import "./adminHeader.scss";

const AdminHeader = () => {
  const [user, setUser] = useState();
  const { auth } = useAuth();
  const logout = useLogout();
  const navigator = useNavigate();
  const backendApi = useBackendApi();

  useEffect(() => {
    const fetchUserDetail = async (id) => {
      const { username, profileImage } = (await backendApi.user.getUser(id))
        .data;
      setUser({ username, profileImage });
    };
    fetchUserDetail(auth?.id);
  }, [auth, backendApi]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    navigator("/");
  };

  return (
    <div className="admin-header-container">
      <AdminLogo className="admin-header-mobile-logo" size="small" />
      <div className="profile">
        <CircularAvatar
          avatarUrl={user?.profileImage}
          name={user?.username}
          size="small"
        />
        <p className="username">{user?.username}</p>
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default AdminHeader;
