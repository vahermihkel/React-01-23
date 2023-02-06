import { useParams } from "react-router-dom"

function MuudaToode() {
  // muuda-toode/:jrkNr
  const { jrkNr } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[jrkNr];

  return (
    <div>MuudaToode</div>
  )
}

export default MuudaToode