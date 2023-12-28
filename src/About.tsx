import useInputChange from "./useInputChange";

export default function About() {
  const { value, handleChange } = useInputChange("");
  return (
    <div>
      <input type="text" name="fullname" onChange={handleChange} />
    </div>
  );
}
