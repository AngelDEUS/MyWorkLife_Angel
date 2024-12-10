import IMGImportTest from './../../../../../public/assets/portfolioContent/Test/Test-Mualani-Genshin-Impact-thumbnail.jpg'
import './styleTemplate_01_Content.css'

const Template_01_Content = () => {
  return (
    <div className='mainTemplate_01_Porfolio'>
      <div className="imgContainer_Style_S1">
        <div className="degradedImgTemplate" />
        <img src={IMGImportTest} alt="imagenTemplate.png" className="imgTemplate_S1" />
      </div>
      <div className="textContainer_PortfS1">
        <h3 className="titleTemplate01_S1">Título de Prueba</h3>
        <p className="textParagraph_S1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum mollitia neque sequi, quos autem exercitationem commodi omnis nostrum fuga excepturi est in, molestias tenetur voluptas saepe quo repellat. Ut eos, corrupti asperiores iure rerum eaque velit quaerat inventore consectetur quo. Omnis fuga iusto consectetur? Voluptatum accusamus ratione qui facilis ut unde alias cumque totam a animi, repellendus maiores eveniet, inventore, neque corporis laboriosam ipsa earum recusandae architecto iusto nemo ducimus. Iure, magni maxime recusandae deleniti sequi saepe quis repellat ducimus possimus hic, excepturi labore sed molestiae quos nesciunt explicabo consectetur natus provident consequuntur nihil quaerat sit amet mollitia illum!</p>
        <div className="text_Template01_S1">
          <h4 className="tittleListItems_S1">Mi lista Preview</h4>
          <ul className="listItems_template01">
            <li className="itemTemplate_S1">Item text view 01</li>
            <li className="itemTemplate_S1">Item text view 02</li>
            <li className="itemTemplate_S1">Item text view 03</li>
            <li className="itemTemplate_S1">Item text view 04</li>
            <li className="itemTemplate_S1">Item text view 05</li>
            <li className="itemTemplate_S1">Item text view 06</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Template_01_Content