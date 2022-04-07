function Selectd({ nameClick }) {
  let object = {
    name: nameClick.name,
    email: nameClick.email,
    phone: nameClick.phone,
  };
  console.log(object);
  return (
    <div>
      <span>name</span>&nbsp;
      {object.name}
      &nbsp;&nbsp;
      <br />
      <span>email</span>&nbsp;
      {object.email}
      &nbsp;&nbsp;
      <br />
      <span>phone</span>&nbsp;
      {object.phone}
    </div>
  );
}
export default Selectd;
