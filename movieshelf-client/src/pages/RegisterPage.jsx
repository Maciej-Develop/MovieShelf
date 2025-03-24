function RegisterPage() {
    return <>
    <div className="container d-flex justify-content-center">
    <form className="shadow p-4 rounded w-50">
        <h3 className="text-center mb-4">Register</h3>
        <div className="form-group mb-4">
            <label className="mb-2">Username</label>
            <input type="text" className="form-control" placeholder="Enter an username" />
        </div>
        <div className="form-group mb-4">
            <label className="mb-2">Password</label>
            <input type="text" className="form-control" placeholder="Enter a password"/>
        </div>
        <button className="btn btn-primary w-100 mb-3">Sign up</button>
    </form>
    </div>
    </>
}

export default RegisterPage;