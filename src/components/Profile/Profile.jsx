import css from "../Profile/Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <div className={css.description}>
          <img src={image} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsli}>
            <span className={css.label}>Followers </span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css["statsLiViews"]}>
            <span className={css.label}>Views </span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.statsli}>
            <span className={css.label}>Likes </span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
