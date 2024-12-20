import { useSearchParams } from "react-router-dom";

export default function SearchParamPage() {
  const [searchParam] = useSearchParams();
  const name = searchParam.get("name");
  const last_name = searchParam.get("last_name");

  return <div>SearchParamPage

    <br />
    name: {name}
    <br />
    last name: {last_name}
  </div>;
}
