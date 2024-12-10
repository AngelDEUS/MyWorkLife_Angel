import './styleTemplate_02_Content.css'
import IMGImportTest from './../../../../../public/assets/portfolioContent/Test/Test-Mualani-Genshin-Impact-thumbnail.jpg'

const Template_02_Content = () => {
    return (
        <div className='mainTemplate_02_Porfolio'>
            <div className="textContainer02_PortfS1">
                <h3 className="titleTemplate02_S1">Título de Prueba</h3>
                <p className="textParagraph02_S1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum mollitia neque sequi, quos autem exercitationem commodi omnis nostrum fuga excepturi est in, molestias tenetur voluptas saepe quo repellat. Ut eos, corrupti asperiores iure rerum eaque velit quaerat inventore consectetur quo. Omnis fuga iusto consectetur? Voluptatum accusamus ratione qui facilis ut unde alias cumque totam a animi, repellendus maiores eveniet, inventore, neque corporis laboriosam ipsa earum recusandae architecto iusto nemo ducimus. Iure, magni maxime recusandae deleniti sequi saepe quis repellat ducimus possimus hic, excepturi labore sed molestiae quos nesciunt explicabo consectetur natus provident consequuntur nihil quaerat sit amet mollitia illum!</p>
                <div className="text_Template02_S1">
                    <h4 className="tittleListItems02_S1">Mi lista Preview</h4>
                    <ul className="listItems_template02">
                        <li className="itemTemplate02_S1">Item text view 01</li>
                        <li className="itemTemplate02_S1">Item text view 02</li>
                        <li className="itemTemplate02_S1">Item text view 03</li>
                        <li className="itemTemplate02_S1">Item text view 04</li>
                        <li className="itemTemplate02_S1">Item text view 05</li>
                        <li className="itemTemplate02_S1">Item text view 06</li>
                    </ul>
                </div>
            </div>
            <div className="imgContainer02_Style_S1">
                <div className="degradedImgTemplate" />
                <img src={IMGImportTest} alt="imagenTemplate.png" className="imgTemplate02_S1" />
            </div>
        </div>
    )
}

export default Template_02_Content
