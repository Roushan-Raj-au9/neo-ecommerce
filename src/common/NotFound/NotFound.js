import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="">
                                <div className="four_zero_four_bg">
                                    <h1 style={{ fontSize: '80px' }}>404</h1>
                                </div>
                                <div className="content_box_404">
                                    <h3 style={{  fontSize: '80px' }}>Looks Like You're Lost</h3>
                                    <p>The page you are looking for not available.</p>
                                    <Link  className='navigation_link' to='/' >Go Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NotFound;
