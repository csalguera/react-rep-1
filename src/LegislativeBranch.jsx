import Senate from "./Senate"
import HouseofRepresentatives from "./HouseofRepresentatives"

const LegislativeBranch = (props) => {
  return (
    <>
      <h1>LegislativeBranch</h1>
      <div>
        <Senate members={100}/>
      </div>
      <div>
        <HouseofRepresentatives members={435}/>
      </div>
    </>
  )
}

export default LegislativeBranch