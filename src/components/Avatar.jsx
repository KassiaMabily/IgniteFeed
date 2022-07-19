import styles from './Avatar.module.css';

export function Avatar({src, hasBorder = true}) {
  return (
    <img
      src={src}
      alt="Avatar"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar }
    />
  )
}
