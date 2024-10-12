import { GameTile } from "@/features/gametile/GameTile.tsx";

export function GameBoard() {
  return (
    <div>
      Game Board:
      <div className={"inline-grid grid-cols-5 grid-rows-5"}>
        <GameTile name={"grass01"} className={"border border-black"} />
        <GameTile name={"grass02"} className={"border border-black"} />
        <GameTile name={"road15"} className={"border border-black"} />
        <GameTile name={"grass01"} className={"border border-black"} />
        <GameTile name={"grass02"} className={"border border-black"} />
        <GameTile name={"grass01"} className={"border border-black"} />
        <GameTile name={"grass02"} className={"border border-black"} />
        <GameTile name={"road01"} className={"border border-black"} />
        <GameTile name={"grass01"} className={"border border-black"} />
        <GameTile name={"grass02"} className={"border border-black"} />
        <GameTile name={"road13"} className={"border border-black"} />
        <GameTile name={"road02"} className={"border border-black"} />
        <GameTile name={"road05"} className={"border border-black"} />
        <GameTile name={"road02"} className={"border border-black"} />
        <GameTile name={"road02"} className={"border border-black"} />
        <GameTile name={"grass01"} className={"border border-black"} />
        <GameTile name={"grass02"} className={"border border-black"} />
        <GameTile name={"grass01"} className={"border border-black"} />
        <GameTile name={"grass02"} className={"border border-black"} />
        <GameTile name={"grass01"} className={"border border-black"} />
      </div>
    </div>
  );
}
