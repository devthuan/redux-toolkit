
import { useSelector, useDispatch } from "react-redux";
import { userDeleted } from "../counter/usersSlice";
import { Link } from "react-router-dom";

const UserList = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {

        dispatch(userDeleted(
            id
        ))
    }

    return (
        <div className="container">
            <div className="row">
                <h1>Redux CRUD User app</h1>
            </div>

            <div className="row">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ id, name, email }, i) => (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <button onClick={() => handleDelete(id)}>Delete</button>
                                    <Link to={`/edit-user/${id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;