
import './CustomerReview.css';
const CustomerReview = ({data}) => {
 
    return (
        <section className="col-md-4 pb-3">
            <div style={{height:'18rem'}} className="card border">
               <div className="d-flex mx-3 my-3">
                    <div>
                        <img src={data.photoURL} alt="" className="img-fluid rounded-circle px-3" />
                    </div>
                    <div>
                        <h5>{data.name}</h5>
                        <p>Designer</p>
                    </div>
               </div>
               <div className="text-center card-body">
                   <h6>{data.message.review}</h6>
               </div>
            </div>
            
        </section>
    );
};

export default CustomerReview;