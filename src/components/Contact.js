const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-4">Contact Us</h1>
      <p className="text-xl font-bold text-center pt-4">
        Welcome to contact us page of food delivery app
      </p>
      <form className="text-center pt-8">
        <label className="font-semibold">Name: </label>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-sm"
          placeholder="Itachi Uchia"
        />
        <label className="font-semibold">Email: </label>
        <input
          type="email"
          className="border border-black p-2 m-2 rounded-sm"
          placeholder="itachiuchia@mail.com"
        />
        <button className="border border-black bg-slate-400 rounded-lg p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
