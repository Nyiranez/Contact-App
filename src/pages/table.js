import React, { useState } from 'react'

export const Table = () => {
    const [contacts, setContacts] = useState([
        {
            fullName: "Marie Louise",
            profile: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        },
        {
            fullName: "Mbabazi Alpha",
            profile: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        },
        {
            fullName: "Usanase Sndrine",
            profile: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        }
    ]);

    return (
        <div>
            <table>
                <tr>

                    <th>Full Name</th>
                    <th>Profile</th>
                    <th>Action</th>

                </tr>
                {
                    contacts.map((contact,index) => {
                        return <tr key={index}>
                            <td>{contact.fullName}</td>
                            <td><img src="{contact.profile} " alt=""/></td>
                            <td>
                                <button>View</button>
                                <button>Update</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    })
                }
            </table >
        </div >
    )
}
