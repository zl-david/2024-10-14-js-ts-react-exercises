import spriteSheetImage from "./medieval_tilesheet.png";
import Tile from "@/ui/components/Tile.tsx";
export enum Category {
  TILE,
  ENVIRONMENT,
  STRUCTURE,
  UNIT,
}
const config = {
  grass01: {
    row: 0,
    column: 0,
    category: Category.TILE,
  },
  grass02: {
    row: 0,
    column: 1,
    category: Category.TILE,
  },
  sand01: {
    row: 0,
    column: 2,
    category: Category.TILE,
  },
  sand02: {
    row: 0,
    column: 3,
    category: Category.TILE,
  },
  dirt01: {
    row: 1,
    column: 0,
    category: Category.TILE,
  },
  dirt02: {
    row: 1,
    column: 1,
    category: Category.TILE,
  },
  stone01: {
    row: 1,
    column: 2,
    category: Category.TILE,
  },
  stone02: {
    row: 1,
    column: 3,
    category: Category.TILE,
  },
  ice01: {
    row: 2,
    column: 0,
    category: Category.TILE,
  },
  ice02: {
    row: 2,
    column: 1,
    category: Category.TILE,
  },
  snow01: {
    row: 2,
    column: 2,
    category: Category.TILE,
  },
  snow02: {
    row: 2,
    column: 3,
    category: Category.TILE,
  },
  road01: {
    row: 0,
    column: 4,
    category: Category.TILE,
  },
  road02: {
    row: 0,
    column: 5,
    category: Category.TILE,
  },
  road03: {
    row: 0,
    column: 6,
    category: Category.TILE,
  },
  road04: {
    row: 0,
    column: 7,
    category: Category.TILE,
  },
  road05: {
    row: 0,
    column: 8,
    category: Category.TILE,
  },
  road06: {
    row: 1,
    column: 4,
    category: Category.TILE,
  },
  road07: {
    row: 1,
    column: 5,
    category: Category.TILE,
  },
  road08: {
    row: 1,
    column: 6,
    category: Category.TILE,
  },
  road09: {
    row: 1,
    column: 7,
    category: Category.TILE,
  },
  road10: {
    row: 1,
    column: 8,
    category: Category.TILE,
  },
  road11: {
    row: 2,
    column: 4,
    category: Category.TILE,
  },
  road12: {
    row: 2,
    column: 5,
    category: Category.TILE,
  },
  road13: {
    row: 2,
    column: 6,
    category: Category.TILE,
  },
  road14: {
    row: 2,
    column: 7,
    category: Category.TILE,
  },
  road15: {
    row: 2,
    column: 8,
    category: Category.TILE,
  },
};
export const gameTileNames = Object.keys(config) as (keyof typeof config)[];
export type GameTileName = keyof typeof config;

type Props = {
  name: GameTileName;
  className?: string;
};
export function GameTile({ name, className }: Props) {
  const tileConfig = config[name];

  return (
    <Tile
      {...tileConfig}
      spriteSheet={spriteSheetImage}
      className={className}
    />
  );
}
