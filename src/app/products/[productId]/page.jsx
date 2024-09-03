const Page = ({ params, searchParams }) => {
  return (
    <div>
      <h1>This is dynamic component{params.productId} </h1>
    </div>
  );
};

export default Page;
