import { useLocation, useParams } from "react-router-dom";

type StateType = {
  name: string;
};

function TestNevigate() {
  const location = useLocation();
  const data_location: StateType | undefined = location.state;
  const {id_data} = useParams();

  return (
    <div>
      TestNevigate <br />
      Hi, {data_location?.name}
      <br />
      id Data: {id_data}
    </div>
  );
}

export default TestNevigate;
