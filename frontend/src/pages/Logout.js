import { redirect } from "react-router-dom";

export function loader() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    console.log("hi");
    return redirect('/');
}