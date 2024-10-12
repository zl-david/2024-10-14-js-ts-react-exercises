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
  water01: {
    row: 2,
    column: 0,
    category: Category.TILE,
  },
  water02: {
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
  tree01: {
    row: 3,
    column: 4,
    category: Category.ENVIRONMENT,
  },
  tree02: {
    row: 3,
    column: 5,
    category: Category.ENVIRONMENT,
  },
  tree03: {
    row: 3,
    column: 6,
    category: Category.ENVIRONMENT,
  },
  tree04: {
    row: 3,
    column: 7,
    category: Category.ENVIRONMENT,
  },
  treeLog01: {
    row: 3,
    column: 8,
    category: Category.ENVIRONMENT,
  },
  treeLog02: {
    row: 3,
    column: 9,
    category: Category.ENVIRONMENT,
  },
  rock01: {
    row: 4,
    column: 4,
    category: Category.ENVIRONMENT,
  },
  rock02: {
    row: 4,
    column: 5,
    category: Category.ENVIRONMENT,
  },
  rock03: {
    row: 4,
    column: 6,
    category: Category.ENVIRONMENT,
  },
  rock04: {
    row: 4,
    column: 7,
    category: Category.ENVIRONMENT,
  },
  copper01: {
    row: 4,
    column: 8,
    category: Category.ENVIRONMENT,
  },
  gold01: {
    row: 4,
    column: 9,
    category: Category.ENVIRONMENT,
  },
  berries01: {
    row: 5,
    column: 10,
    category: Category.ENVIRONMENT,
  },
  unit01: {
    row: 3,
    column: 11,
    category: Category.UNIT,
  },
  unit02: {
    row: 3,
    column: 12,
    category: Category.UNIT,
  },
  unit03: {
    row: 3,
    column: 13,
    category: Category.UNIT,
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
