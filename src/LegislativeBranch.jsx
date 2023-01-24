import Senate from "./Senate"
import HouseofRepresentatives from "./HouseofRepresentatives"

const LegislativeBranch = (props) => {
  return (
    <>
      <Senate />
      <HouseofRepresentatives />
    </>
  )
}

export default LegislativeBranch