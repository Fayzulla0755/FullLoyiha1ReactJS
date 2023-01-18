import React from 'react'

export default function UpdatePostsPage({changeHendler,update,shubmitUpdate}) {
    const {title,comment,country,prise}= update
  return (
    <div className="modal fade" id="updatePosts" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">

        <div className="card bg-dark text-white modal-content p-5" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-3 text-center">

            <div className="mb-md-3 mt-md-4 pb-2">

              <h4 className="fw-bold mb-2 text-uppercase">Update post</h4>

              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typeEmaiasdlX1">Title</label>
                <input type="text" id="typeEmaiasdlX1" className="form-control form-control-lg" onChange={changeHendler} value={title} name='title'/>

              </div>

              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typeEmailX22">Comment</label>
                <textarea type="text" id="typeEmailX22" className="form-control form-control-lg" onChange={changeHendler} value={comment} name='comment'></textarea>

              </div>
              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typeEmailX222">Country</label>
                <input type="text" id="typeEmailX222" className="form-control form-control-lg" onChange={changeHendler} value={country} name='country'/>

              </div>
              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typeEmailX123">Prise</label>
                <input type="text" id="typeEmailX123" className="form-control form-control-lg" onChange={changeHendler} value={prise} name='prise'/>

              </div>


             

              <button className="btn btn-outline-light btn-lg px-5 mx-2" type="button" onClick={shubmitUpdate} data-bs-dismiss="modal">Update</button>
             
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}
