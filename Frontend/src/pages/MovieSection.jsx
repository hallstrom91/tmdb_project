import styles from "@css/SnakeBtn.module.css";
import SnakeBtn from "@buttons/SnakeBtn";

export default function MovieSection() {
  return (
    <>
      <div className="p-4 bg-stone-400">
        <SnakeBtn classname={styles.SnakeBtn} />
      </div>
    </>
  );
}
