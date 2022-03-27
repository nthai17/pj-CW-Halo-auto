import './userList.scss'

function UsersList({users}) {    

    return ( 
        <div className="admin__users__table"> 
            <table>
                <thead>
                    <tr>
                        <td>User name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length ?
                        users.map(user => {
                            const { userName, phoneNumber, address, id, mail } = user
                            return (
                                <tr className="ta-left" key={id}>
                                    <td>{userName}</td>
                                    <td>{phoneNumber}</td>
                                    <td>{mail}</td>
                                    <td>{address || 'Chưa cập nhật địa chỉ'}</td>
                                </tr>
                            )
                        })
                    : 
                    <tr>
                        <td colSpan='5'>Không có tài khoản nào.</td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;
