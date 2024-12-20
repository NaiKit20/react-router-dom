import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function fnNavigate(path: string) {
    navigate(path, {
      state: {
        name: "kit",
      },
    });
  }

  return (
    <div className="">
      HomePage
      <button
        className="border"
        onClick={() => fnNavigate("/layout/test/hello/?name=a&last_name=b")}
      >
        go to testPage
      </button>
      <br />
      <button
        className="border"
        onClick={() => fnNavigate("/layout/search-param?name=a&last_name=b")}
      >
        go to search param
      </button>
    </div>
  );
}

export default HomePage;
