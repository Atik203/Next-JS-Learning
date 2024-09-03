
export const metadata = {
  title: "Home page",
  description: "This is the home page",
}

const HomePage = async () => {

  const res = await fetch('http://localhost:5000/shoes')
  const data = await res.json()



  return (
    <div className="p-10">

      <div className="grid grid-cols-4 gap-10 items-center justify-center">
        {data.map((shoe) => (
         <div
         key={shoe.id}
         className="card shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {shoe.title}
      <div className="badge badge-secondary py-4"> {shoe.price} </div>
    </h2>
    <p>{shoe.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-primary">Buy</button>
<button className="btn btn-outline btn-secondary">Details</button>
      
    </div>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;