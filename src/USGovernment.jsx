import ExecutiveBranch from "./ExecutiveBranch"
import JudicialBranch from "./JudicialBranch"
import LegislativeBranch from "./LegislativeBranch"

const USGovernment = (props) => {
  return (
    <>
      <h1>US Government</h1>
      <div>
        <ExecutiveBranch />
      </div>
      <div>
      <JudicialBranch />
      </div>
      <div>
      <LegislativeBranch />
      </div>
    </>
  )
}

export default USGovernment