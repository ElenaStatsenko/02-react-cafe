import { useState } from "react";

import css from "./App.module.css";
import Cafeinfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import Notification from "../Notification/Notification";
import VoteStats from "../VoteStats/VoteStats";
import type { Votes, VoteType } from "../../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
const totalVotes =({good,neutral, bad}:Votes)=> {
    return good+neutral+bad
}
const positiveRate = totalVotes(votes)
    ? Math.round((votes.good / totalVotes(votes)) * 100)
    : 0
  return (
    <div className={css.app}>
      <Cafeinfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes(votes)} />
      { totalVotes(votes)>0 ? <VoteStats votes={votes} totalVotes={totalVotes(votes)} positiveRate={positiveRate}/>: < Notification/>}
     
    </div>
  );
}
