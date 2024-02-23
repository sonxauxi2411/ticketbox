const Organizational = () => {
  return (
    <div className="p-5 d-flex  flex-column">
      <label>name</label>
      <input type="text" name="name" />

      <label>img</label>
      <input type="file" name="img" />

      <label>description</label>
      <input type="text" name="description" />

      <button type="submit">submit</button>
    </div>
  );
};

export default Organizational;
