import { Link } from "react-router-dom";

function LoginPage() {
    return <>
    <div className="container d-flex justify-content-center">
    <form className="shadow p-4 rounded w-50">
        <h3 className="text-center mb-4">Sign in</h3>
        <div className="form-group mb-4">
            <label className="mb-2">Username</label>
            <input type="text" className="form-control" placeholder="Enter your username" />
        </div>
        <div className="form-group mb-4">
            <label className="mb-2">Password</label>
            <input type="text" className="form-control" placeholder="Enter your password"/>
        </div>
        <button className="btn btn-primary w-100 mb-3">Log in</button>
        <div className="text-center">
            <span>Don't have an account yet ? <Link to="/register">Sign up</Link> </span>
        </div>
    </form>
    </div>
    </>
}

export default LoginPage;