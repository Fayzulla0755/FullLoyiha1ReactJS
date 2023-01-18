import React from 'react'

export default function TableBody({data,index,productDelete,updateHendler}) {
    const isDelete = window.localStorage.getItem('isDeletee') === "true" ? true : false;
    const isUpdate = window.localStorage.getItem('isUpdate') === "true" ? true : false;
  
    return (
        <tr className='text-white'>
            <th scope="row">{index + 1}</th>
            <td>{data.title}</td>
            <td>{data.comment}</td>
            <td>{data.country}</td>
            <td>{data.prise}</td>
            <td>
                {isUpdate?(
                    <button  className="btn btn-primary" onClick={()=>updateHendler(index)} data-bs-toggle="modal" data-bs-target="#updatePosts" > <i className="fa-solid fa-pen"></i></button>
                ):(<></>)}
                {isDelete?(<button  className="btn btn-danger" onClick={()=>productDelete(data._id)} > <i className="fa-solid fa-trash"></i></button>):(<>  </>)}
                
            </td>
        </tr>

    )
}


// onclick="deletePost({i})"  data-id={data._id}
// onclick="updatePost({i})"  data-id="${data._id}"
