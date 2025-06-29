import css from "./VoteOptions.module.css";
import type{ VoteType, Votes } from "../../types/votes";
interface VoteOptionsProps {
  value: Votes;
  onUpdate: (type: VoteType) => void;
  onReset: () => void;
}
export default function VoteOptions({value, onUpdate, onReset}:VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onUpdate("good")}>Good: {value.good}</button>
      <button className={css.button} onClick={() => onUpdate("neutral")}>Neutral: {value.neutral}</button>
      <button className={css.button} onClick={() => onUpdate("bad")}>Bad: {value.bad}</button>
      <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
    </div>
  );
}
