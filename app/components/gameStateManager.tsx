import React from "react";

import { GameStatePanel } from "./style";

export type GameState = {
  start: boolean;
  changedPlayer: boolean;
  playersResults: PlayerResults;
};
export type PlayerResults = {
  [key in number]?: PlayerScoreCards;
};

export type PlayerScoreCards = { color: string }[];

// x = {
//   1: [],
//   3: [{}]
// }

type GameStateProps = {
  gameState: GameState;
  onGameStart: (value: boolean) => void;
  totalPlayers: number;
};

export const GameStateManager = ({
  totalPlayers,
  gameState,
  onGameStart
}: GameStateProps) => {
  const isDisable = totalPlayers === 0;
  return (
    <div>
      <GameStatePanel
        disabled={isDisable}
        onClick={() => onGameStart(!gameState.start)}
      >
        {gameState.start ? "Resart" : "Start"}
      </GameStatePanel>
    </div>
  );
};
