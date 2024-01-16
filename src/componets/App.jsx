import { Profile } from './Profile/Profile';
import userData from '../data/userData.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
export const App = () => {
  return (
    <div>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />

        <FriendList items={friends} />
      </div>
    </div>
  );
};
