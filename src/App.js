import { useState } from "react";

export default function App() {
  const [input, setInput] = useState({ director: "", movie: "" });
  const [list, setList] = useState([]);

  const AddItem = () => {
    if (input.director.trim() === "" || input.movie.trim() === "") return;
    setList([...list, input]);
    setInput({ director: "", movie: "" });
  };

  const RemoveItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center",fontFamily: "Arial, sans-serif" }}>Directors and Movies</h2>
      <div style={{ marginTop: "20px" ,padding: "0 20px"}}>
        <input
          value={input.director}
          type="text"
          placeholder="Directors Name"
          style={{ width: "650px", padding: "8px 10px",backgroundColor: "#f0f0f0",border: "1px solid #ccc" }}
          onChange={(e) => setInput({ ...input, director: e.target.value })}
          name="director"
        />
        <input
          value={input.movie}
          type="text"
          placeholder="Movie Name"
          style={{ width: "650px", padding: "8px 10px", marginLeft: "10px" ,backgroundColor: "#f0f0f0",border: "1px solid #ccc"}}
          onChange={(e) => setInput({ ...input, movie: e.target.value })}
          name="movie"
        />
        <button
          onClick={() => AddItem()}
          style={{
            marginLeft: "20px",
            padding: "8px 10px",
            width: "80px",
            backgroundColor: "green",
            color: "white",
            border: "none",
          }}
        >
          Add
        </button>

        <div style={{ marginTop: "30px" }}>
          {list.map((item, index) => (
            <div style={{ display: "flex" }}>
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginBottom: "10px",
                  width: "650px",
                }}
              >
                {item.director}
              </div>
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginBottom: "10px",
                  width: "650px",
                  marginLeft: "10px",
                }}
              >
                {item.movie}
              </div>
              <button
                onClick={() => {
                  RemoveItem(index);
                }}
                style={{
                  marginLeft: "20px",
                  width: "80px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  height: "42px",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
