function Text({ name, email, id, name_selected }) {
  return (
    <div className="nameAndEmail">
      <button onClick={() => name_selected({ id })}>
        <span>name</span>&nbsp;
        {name}
        &nbsp; &nbsp;
        <span>email</span> &nbsp;
        {email}
      </button>
    </div>
  );
}
export default Text;
