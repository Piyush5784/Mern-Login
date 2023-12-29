function AlertDanger({ message }) {
    return <>
        <div style={{ marginTop: "20px" }} className="alert alert-danger" role="alert">
            {message}
        </div>
    </>
}

export default AlertDanger;

