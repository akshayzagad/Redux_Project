import { useSelector } from "react-redux";

function Customer() {
  // Safely access the fullName property
  const customer = useSelector((store) => store.customer?.fullName || "Guest");

  console.log(customer); // Log the customer name or "Guest" if undefined
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;