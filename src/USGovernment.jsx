import ExecutiveBranch from "./ExecutiveBranch"
import JudicialBranch from "./JudicialBranch"
import LegislativeBranch from "./LegislativeBranch"

const USGovernment = (props) => {
  return (
    <>
      <ExecutiveBranch />
      <JudicialBranch />
      <LegislativeBranch />
    </>
  )
}

export default USGovernment