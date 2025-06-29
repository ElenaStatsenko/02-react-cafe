// import { useState } from 'react'

import "./App.module.css";
import Cafeinfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

export default function App() {
  return (
    <>
      <Cafeinfo />
      <VoteOptions />
      <VoteStats />
    </>
  );
}
