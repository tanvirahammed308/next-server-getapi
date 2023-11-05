import Link from 'next/link';
import React from 'react';
const getUsers=async()=>{
    let data=await fetch('http://localhost:3000/userapi')
    data=await data.json()
    return data;

}

const page = async() => {
    const allUsers=await getUsers();
    console.log(allUsers)
    return (
        <div>
            <h2>this is users list</h2>
            {
                allUsers.map((item)=>(
                    <div key="item.id">
                        <Link href={`/users/${item.id}`}>{
                            item.name
                        }
                        </Link>

                    </div>
                ))
            }
        </div>
    );
};

export default page;