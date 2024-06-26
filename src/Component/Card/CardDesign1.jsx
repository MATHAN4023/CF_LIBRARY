import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CardDesign1 = () => {
    return (
        <>
            <Container>
                <Row className='body'>
                    <Col xs={12} md={6} lg={4} className='card' style={{ border: '1px solid #B3261E', height: '20rem', display: 'flex', justifyContent: 'space-around' }}>
                        <Row className="heading">
                            <Col xs={8} className='PR_name--PR_id'>
                                <div className="projectname">SARAVANAPATTI</div>
                                <div className="Product_id">(1002)</div>
                            </Col>
                            <Col xs={4} className="Client_name">
                                PEPSI
                            </Col>
                        </Row>
                        <div className="CEName" style={{ width: '100%', color: '#828282', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>NitheshWaran T</div>
                        <div className="box-text">
                            <div className="box-text1 " >
                                <div className="sub-head">
                                    <div className='D_name'>Designer Name</div>
                                    <div className='GLU_name'>GL User Name</div>
                                </div>
                                <div className="sub-head1">
                                    Color is used to express style and communicate meaning. With dynamic color, Material puts personal color preferences and individual needs....
                                </div>
                            </div>
                            <div className="box-text2">
                                <div className='--date alighdata' > <i class="bi bi-calendar3-week alighicon" style={{ color: '#B3261E' }}></i>
                                    <div className='date_data --dat' > 18/06/2024</div>
                                </div>
                                <div className='--time alighdata'><i class="bi bi-stopwatch alighicon" style={{ color: '#B3261E' }}></i>
                                    <div className='time_data --dat' > 09:30 PM</div>
                                </div>
                                <div className='--phone-no alighdata'><i class="bi bi-telephone-forward alighicon" style={{ color: '#B3261E' }}></i>
                                    <div className='phone_data --dat' > 1234567890</div>
                                </div>
                                <div className='--location alighdata'><i class="bi bi-geo-alt alighicon" style={{ color: '#B3261E' }}></i>
                                    <div className='locetion_data --dat' > Saravanapatti</div>
                                </div>
                            </div>
                        </div>
                        <div className='Button-container'>
                            <Button className="Red-btn" variant="contained" color="error" style={{ display: 'flex', alignItems: 'center' }}>
                                <i className="bi bi-pen" style={{ marginRight: '8px' }}></i>
                                Contained
                            </Button>
                            <Button className='Blue-btn' variant="outlined" style={{ backgroundColor: '#FEF7FF', border: '1px solid #B3261E' }}><i className="bi bi-briefcase-fill" style={{ color: 'black' }}></i>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`.heading {
    display: flex;
    justify-content: space-between;
}

.PR_name--PR_id {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.projectname {
    color: #B3261E;
    font-size: 30px;
}

.Product_id {
    color: #828282;
    font-size: xx-small;
}

.Client_name {
    color: #828282;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: end;
}

.Button-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
}

.Red-btn {
    width: 83%;
}

.Blue-btn {
    width: 15%;
    background-color: rgba(103, 80, 164, 0.11);
}

.CEName {
    margin: 10px 0;
}

.box-text {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.box-text1 {
    width: 65%;
    border: 1px solid #B3261E;
    height: 20vh;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.sub-head {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    color: #625B71;
    width: 100%;
    padding: 0px 5px 0px 5px;

}

.sub-head1 {
    font-size: small;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 10px 5px 10px 5px;
}

.box-text2 {
    width: 30%;
    /* border: 1px solid #B3261E; */
    height: 20vh;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px 0px 10px 0px;
}

.alighdata {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.alighicon {
    display: flex;
    justify-content: start;
}

.--dat {
    font-size: small;
    font-weight: 600;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .sub-head {
        font-size: 12.5px;
    }

    .sub-head1 {
        font-size: auto;
    }

    .Red-btn {
        width: 75%;
    }

    .--dat {
        font-size: x-small;
        font-weight: 700;
    }
    .projectname{
        font-size: xx-large;
    }
    
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .sub-head {
        font-size: 12.5px;
    }

    .sub-head1 {
        font-size: 11px;
    }

    .Red-btn {
        width: 75%;
    }

    .--dat {
        font-size: x-small;
        font-weight: 700;
    }
    
}
@media only screen and (max-width: 300px) {
    .sub-head {
        font-size: 1px;
    }

    .sub-head1 {
        font-size: 11px;
    }

    .Red-btn {
        width: 65%;
    }

    .--dat {
        font-size: xx-small;
        font-weight: 700;
    }
    .projectname{
        font-size: medium;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .sub-head {
        font-size: 12.5px;
    }

    .sub-head1 {
        font-size: 11px;
    }

    .Red-btn {
        width: 75%;
    }

    .--dat {
        font-size: x-small;
        font-weight: 700;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .sub-head {
        font-size: 12.5px;
    }

    .sub-head1 {
        font-size: 11px;
    }

    .Red-btn {
        width: 75%;
    }

    .--dat {
        font-size: x-small;
        font-weight: 700;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .sub-head {
        font-size: 15px;
    }

    .sub-head1 {
        font-size: small;
    }
    .Red-btn {
        width: 80%;
    }
}`}</style>
        </>
    );
}

export default CardDesign1;
