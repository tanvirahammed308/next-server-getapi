import React from 'react';
const getSigleUser=async(id)=>{
    let data=await fetch(`http://localhost:3000/userapi/${id}`);
    data =await data.json();
    return data.result;

}

const page = async({params}) => {
    console.log(params.userid)
    const user=await getSigleUser(params.userid);
    console.log(user)
   
    return (
        <div>
            <h2>user details</h2>
            <h3>Name:{user.name}</h3>
        </div>
    );
};

export default page;