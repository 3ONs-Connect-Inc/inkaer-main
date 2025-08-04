import { FlickeringGrid } from "../ui/flickering-grid";

const FlickeringGridWrapper = () => (
    <div className="absolute inset-0 opacity-30">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="rgb(0, 170, 254)"
          maxOpacity={0.1}
          flickerChance={0.05}
        />
      </div>
);

export default FlickeringGridWrapper;
