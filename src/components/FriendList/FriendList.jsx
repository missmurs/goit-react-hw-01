import FriendListItem from "./FriendListItem";

import css from "../FriendList/FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendSection}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
