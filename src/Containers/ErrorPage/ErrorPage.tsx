import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <section className="min-h-errorContainerWidth flex flex-col items-center justify-center font-body gap-4">
        <h1 className="text-2xl font-semibold text-blue-400 mb-4">
          This page cannot be found
        </h1>
        <Button>Keep exploring other itinerary</Button>
      </section>
    </Layout>
  );
};

export default ErrorPage;
