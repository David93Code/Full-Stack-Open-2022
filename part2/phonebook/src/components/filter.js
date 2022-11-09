const Filter = (props) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={(event) => props.setSearch(event.target.value)} />
    </div>
  );
};

export default Filter;
