import React from 'react'

export default function TableBody({data,index,update,deleteUser}) {
    const isDelete = window.localStorage.getItem('isDeletee') === "true" ? true : false;
    const isUpdate = window.localStorage.getItem('isUpdate') === "true" ? true : false;
    return (
        <tr className='text-white'>
            <th scope="row">{index + 1}</th>
            <td>{data.fullname}</td>
            <td>{data.user_email}</td>
            <td>{data.user_login}</td>
            <td>{data.user_rol}</td>
            <td><input type={'checkbox'} readOnly checked={data.admin}/> </td>
            <td><input type={'checkbox'} readOnly checked={data.create}/></td>
            <td><input type={'checkbox'} readOnly checked={data.update}/></td>
            <td><input type={'checkbox'} readOnly checked={data.deletee}/></td>
            <td><input type={'checkbox'} readOnly checked={data.read}/></td>
            <td>
                {isUpdate?( <button  className="btn btn-primary" onClick={()=>update(index)} data-bs-toggle="modal" data-bs-target="#updateModal" data-index={index}> <i className="fa-solid fa-pen" data-index={index}></i></button>
                ):(<></>)}
               {isDelete?(
                <button  className="btn btn-danger" onClick={()=>deleteUser(data._id)} > <i className="fa-solid fa-trash"></i></button>
               ):(<></>)}
                
            </td>
        </tr>
    )
}




// onClick={updatePost({index})}   data-id="{data._id}"
// onClick={deleteUser({index})}   data-id="{data._id}"