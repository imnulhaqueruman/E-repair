import React from 'react';
import './From.css';
const From = () => {
    return (
        < div className="container-form my-5 container-fluid">
                 <div className=" col-md-5 col-sm-12  from-layout">
                        <div className="my-5">
                            <h1 className="text-center text-white ">Send Us Message</h1>
                        </div>
                        <form action="" className="col-sm-12">
                        <div className="form-group py-3">
                            <input type="text" className="form-control" placeholder="Email Address *"/>
                        </div>
                        <div className="form-group py-3">
                            <input type="text" className="form-control" placeholder="Subject *"/>
                        </div>
                        <div className="form-group py-3">
                            <textarea name="" className="form-control" id="" cols="20" rows="5" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center py-5">
                            <button type="button" className="btn btn-primary rounded-pill"> Submit </button>
                        </div>
                    </form>
                 </div>
                    
        </div>
    );
};

export default From;