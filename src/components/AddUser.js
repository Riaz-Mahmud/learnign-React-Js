import { useState } from "react";
import { useParams } from "react-router-dom";

const AddUser = ({ status, callback }) => {
    const { id: eid } = useParams();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        callback({ id: id, name: name, dept: dept });
        console.log(id);
        console.log(name);
        console.log(dept);
    };
    return (
        <div>
            <h2>
                This is {status} user page id: {eid}
            </h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <td>
                            <label>
                                Id:
                                
                            </label>
                        </td>
                        <td>
                            <input
                                type="number"
                                name="name"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                            Name:
                            </label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                            Department:
                            </label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={dept}
                                onChange={(e) => setDept(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default AddUser;