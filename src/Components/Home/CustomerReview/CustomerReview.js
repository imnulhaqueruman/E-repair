
import './CustomerReview.css';
const CustomerReview = ({data}) => {
 
    return (
        <section className="col-md-4 col-sm pb-3">
            <div style={{height:'25rem'}} className="card border">
               <div className="d-flex mx-3 my-3">
                    <div>
                        <img src={data.photoURL} alt="" className="img-fluid rounded-circle px-3" />
                    </div>
                    <div>
                        <h6>{data.name}</h6>
                        <p>Designer</p>
                    </div>
               </div>
               <div className="card-body">
                   <p>{data.message.review}</p>
               </div>
            </div>
            
        </section>
    );
};

export default CustomerReview;