import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <section>
      <h1>{error.status}</h1>
      <p>{error.data.errMessage}</p>
    </section>
  );
}

export default ErrorPage;
