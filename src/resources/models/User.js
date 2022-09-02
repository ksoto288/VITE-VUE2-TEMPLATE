// Example model that we can simply call like creating a new instance of a class.
// This will guarantee that all User Objects will look the same across our whole application.
// Ex:
// import User from "../resources/models/User";
// let user = User(1, "name", "email", "url");
export default function User(name = null, age = null, species = null) {
  return {
    name: name,
    age: age,
    species: species,
  };
}
