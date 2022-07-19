import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({src, hasBorder = true, alt}: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar }
    />
  )
}
