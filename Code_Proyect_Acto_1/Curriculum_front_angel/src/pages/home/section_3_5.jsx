import Img_1_Section_3_5 from './../../../public/assets/pruebas/Random_Star_Assistant_Background.jpg';
import Img_12_Section_3_5 from './../../../public/assets/pruebas/Stormy_Sales_Background.jpg';
import Img_3_Section_3_5 from './../../../public/assets/pruebas/Illustrations_Portfolio.jpg';
import Img_4_Section_3_5 from './../../../public/assets/pruebas/Movil_Inventario_background.jpg';


import Img_1_2_Section_3_5 from './../../../public/assets/pruebas/Random_assistant_Logo.png';
import Img_12_2_Section_3_5 from './../../../public/assets/pruebas/Movil_logo.png';
import Img_3_2_Section_3_5 from './../../../public/assets/pruebas/Stormy_Sales_Logo.png';
import Img_4_2_Section_3_5 from './../../../public/assets/pruebas/Illustrations_Portfolio_Chi.png';

import './styleSection_3_5.css';

const Section_3_5 = () => {
    return (
        <div className="father_all">
            
            <div className="slider" reverse="true" style={{
                '--width': '150px',
                '--height': '100px',
                '--quantity': '16', 
            }}>
                <div className="list">
                    <div className="item_2" style={{ '--position': 1 }}>
                        <img src={Img_1_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 2 }}>
                        <img src={Img_12_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 3 }}>
                        <img src={Img_3_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 4 }}>
                        <img src={Img_4_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 5 }}>
                        <img src={Img_1_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 6 }}>
                        <img src={Img_12_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 7 }}>
                        <img src={Img_3_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 8 }}>
                        <img src={Img_4_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 9 }}>
                        <img src={Img_1_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 10 }}>
                        <img src={Img_12_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 11 }}>
                        <img src={Img_3_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 12 }}>
                        <img src={Img_4_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 13 }}>
                        <img src={Img_1_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 14 }}>
                        <img src={Img_12_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 15 }}>
                        <img src={Img_3_2_Section_3_5} alt="" />
                    </div>
                    <div className="item_2" style={{ '--position': 16 }}>
                        <img src={Img_4_2_Section_3_5} alt="" />
                    </div>
                </div>
            </div>
            <div className="slider" style={{
                '--width': '300px',
                '--height': '400px',
                '--quantity': '8',
            }}>
                <div className="list">
                    <div className="item" style={{ '--position': 1 }}>
                        <img src={Img_1_Section_3_5} alt="" />
                        <span className="textCard">Random Star Assistant</span>
                    </div>
                    <div className="item" style={{ '--position': 2 }}>
                        <img src={Img_12_Section_3_5} alt="" />
                        <span className="textCard">Stormy Sales</span>
                    </div>
                    <div className="item" style={{ '--position': 3 }}>
                        <img src={Img_3_Section_3_5} alt="" />
                        <span className="textCard">Ilustraciones</span>
                    </div>
                    <div className="item" style={{ '--position': 4 }}>
                        <img src={Img_4_Section_3_5} alt="" />
                        <span className="textCard">Proyecto Móvil Inventario</span>
                    </div>
                    <div className="item" style={{ '--position': 5 }}>
                        <img src={Img_1_Section_3_5} alt="" />
                        <span className="textCard">Random Star Assistant</span>
                    </div>
                    <div className="item" style={{ '--position': 6 }}>
                        <img src={Img_12_Section_3_5} alt="" />
                        <span className="textCard">Stormy Sales</span>
                    </div>
                    <div className="item" style={{ '--position': 7 }}>
                        <img src={Img_3_Section_3_5} alt="" />
                        <span className="textCard">Ilustraciones</span>
                    </div>
                    <div className="item" style={{ '--position': 8 }}>
                        <img src={Img_4_Section_3_5} alt="" />
                        <span className="textCard">Proyecto Móvil Inventario</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section_3_5;
