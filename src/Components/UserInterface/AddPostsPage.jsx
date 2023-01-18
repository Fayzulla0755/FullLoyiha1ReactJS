import React from 'react'

export default function AddPostsPage({addData,shubmitNewPost,addChangeHendler}) {
  const { title, comment, country, prise }= addData
  return (
    <React.Fragment>
      <div className="modal fade" id="addPosts" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">

          <div className="card bg-dark text-white modal-content p-5" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-3 text-center">

              <div className="mb-md-3 mt-md-4 pb-2">

                <h4 className="fw-bold mb-2 text-uppercase">Update post</h4>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeEmaiasdlX1">Title</label>
                  <input type="text" id="typeEmaiasdlX1" className="form-control form-control-lg" onChange={addChangeHendler} value={title} name='title' />

                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeEmafdsfsilX22">Comment</label>
                  <textarea type="text" id="typeEmafdsfsilX22" className="form-control form-control-lg" onChange={addChangeHendler} value={comment} name='comment'></textarea>

                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeEvxdvmailX222">Country</label>
                  <input type="text" id="typeEvxdvmailX222" className="form-control form-control-lg" onChange={addChangeHendler} value={country} name='country' />

                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeEmvfdsailX123">Prise</label>
                  <input type="text" id="typeEmvfdsailX123" className="form-control form-control-lg" onChange={addChangeHendler} value={prise} name='prise' />

                </div>




                <button className="btn btn-outline-light btn-lg px-5 mx-2" type="button" onClick={shubmitNewPost} data-bs-dismiss="modal">Add post</button>

              </div>



            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}
