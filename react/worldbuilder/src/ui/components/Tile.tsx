import React from "react";
import { cn } from "@/lib/utils.ts";

type BaseTileProps = {
  width?: number;
  height?: number;
  displaySize?: number;
  spriteSheet: string;
  className?: string;
};
type TilePropsXY = BaseTileProps & {
  x: number;
  y: number;
};
type TilePropsRowColumn = BaseTileProps & {
  row: number;
  column: number;
  padding?: number;
  offset?: number;
};
type TileProps = TilePropsXY | TilePropsRowColumn;

function isXY(props: TileProps): props is TilePropsXY {
  return (
    typeof (props as TilePropsXY).x !== "undefined" &&
    typeof (props as TilePropsXY).y !== "undefined"
  );
}

function getBackgroundPositionXY(props: TilePropsXY): string {
  const { x, y } = props;
  return `-${x}px -${y}px`;
}
function getBackgroundPositionRowColumn(props: TilePropsRowColumn): string {
  const {
    width = 64,
    height = 64,
    column,
    row,
    padding = 32,
    offset = 32,
  } = props;
  return `-${column * (width + padding) + offset}px -${row * (height + padding) + offset}px`;
}

const Tile: React.FC<TileProps> = (props) => {
  const {
    width = 64,
    height = 64,
    displaySize = 24,
    spriteSheet,
    className,
  } = props;

  const backgroundPosition = isXY(props)
    ? getBackgroundPositionXY(props)
    : getBackgroundPositionRowColumn(props);

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${spriteSheet})`,
    backgroundPosition,
    transform: `scale(${displaySize / width})`,
  };

  return (
    <div
      className={cn("overflow-hidden relative inline-block", className)}
      style={{
        width: displaySize,
        height: displaySize,
      }}
    >
      <div className={`bg-no-repeat transform origin-top-left`} style={style} />
    </div>
  );
};

export default Tile;
