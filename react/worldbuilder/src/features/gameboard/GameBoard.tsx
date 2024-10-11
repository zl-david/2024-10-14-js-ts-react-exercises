import { GameTile } from "@/features/gametile/GameTile.tsx";

export function GameBoard() {
  return (
    <div>
      Game Board:
      <div className={"inline-grid grid-cols-5 grid-rows-5"}>
        <GameTile name={"grass01"} />
        <GameTile name={"grass02"} />
        <GameTile name={"road15"} />
        <GameTile name={"grass01"} />
        <GameTile name={"grass02"} />
        <GameTile name={"grass01"} />
        <GameTile name={"grass02"} />
        <GameTile name={"road01"} />
        <GameTile name={"grass01"} />
        <GameTile name={"grass02"} />
        <GameTile name={"road13"} />
        <GameTile name={"road02"} />
        <GameTile name={"road05"} />
        <GameTile name={"road02"} />
        <GameTile name={"road02"} />
        <GameTile name={"grass01"} />
        <GameTile name={"grass02"} />
        <GameTile name={"grass01"} />
        <GameTile name={"grass02"} />
        <GameTile name={"grass01"} />
      </div>
    </div>
  );
}
