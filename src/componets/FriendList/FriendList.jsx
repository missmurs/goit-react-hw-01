import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
