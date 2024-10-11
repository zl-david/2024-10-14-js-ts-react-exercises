import { GameTile, gameTileNames } from "./GameTile.tsx";

export function TileSelector() {
  return (
    <div>
      <div>Tile Selector</div>
      {gameTileNames.map((name) => (
        <GameTile name={name} key={name} className={"m-2"} />
      ))}
    </div>
  );
}
