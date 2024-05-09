function UserForm() {
  return (
    <form>
      <label htmlFor="username">User name</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" name="age" />
    </form>
  );
}

export default UserForm;
