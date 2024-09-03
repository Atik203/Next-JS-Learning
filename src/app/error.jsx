"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="p-10 text-center text-red-500">
      <h1 className="text-4xl text-center mt-20">
        Something went wrong. Please try again later.
      </h1>
      <h2 className="text-2xl text-center mt-20">{error.message}</h2>
      <button className="btn btn-primary mt-10" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
