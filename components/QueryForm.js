"use client";

export default function queryForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);

    const res = await fetch("/query", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };
  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      {/* Concept */}
      <div className="flex justify-center items-center gap-5">
        <p className="">I want to learn</p>
        <div>
          <input
            name="concept"
            type="text"
            placeholder="Concept to learn..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        {/* Analog */}
        <p>Using</p>
        <div>
          <select
            name="analog"
            className="select select-secondary w-full max-w-xs"
          >
            <option disabled selected>
              Pick an analogy
            </option>
            <option>Golf</option>
            <option>Fishing</option>
            <option>Basketball</option>
            <option>Soccer</option>
            <option>American Football</option>
            <option>Programming</option>
          </select>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </div>
    </form>
  );
}