const Newsletter = () => {
  return (
    <div className="bg-green-700 bg-[url('Newsletter.png')] bg-cover bg-center py-16">
      <div className="max-w-4xl mx-auto text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe Our Newsletter!</h2>
        <p className="mb-6 text-sm md:text-base">
          Lorem Ipsum is simply dummy text printing and type setting industry. Lorem Ipsum has been the industry
          standard dummy text ever since when unknown printer took a galley.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md w-full max-w-md">
            <span className="p-3 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v12"/>
              </svg>
            </span>
            <input
              type="email"
              placeholder="Enter your Email..."
              className="flex-1 px-4 py-2 outline-none text-black"
            />
          </div>
          <button className="cursor-pointer bg-white text-green-600 font-semibold px-6 py-2 rounded-md border-2 border-white hover:bg-green-600 hover:text-white transition">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
