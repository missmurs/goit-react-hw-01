import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <div className={css.friendContainer}>
        <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={clsx(css.friend, isOnline && css.isOnline)}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
}
