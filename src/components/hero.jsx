function Hero (){
    return(
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      A task manager you
        <br className="hidden lg:inline-block" />
        can trust for life
      </h1>
      <p className="mb-8 leading-relaxed">
      We’ve been building Todoist for 17 years and 210 days. Rest assured that we’ll never sell out to the highest bidder.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fnarrow%2Fheaderui.en.png"
      />
    </div>
  </div>
</section>

    )
};

export default Hero;