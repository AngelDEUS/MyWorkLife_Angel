import HeaderPortfolio from '../../Portfolio_Modal/headerPortfolio'
import ImageGallery from './Gallery/ImageGallery'
import Template_01_Content from './PlantillasContent/template_01_Content'
import Template_02_Content from './PlantillasContent/template_02_Content'
import './stylesMainContentPorfolio.css'

const MainContentPortfolio = () => {
    const images = [
        { src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Genshin-Impact-Summer-Wallpaper.jpg", alt: "Imagen 1" },
        { src: "https://wallpapers.com/images/featured/genshin-impact-wlq3ykrxbaoadjow.jpg", alt: "Imagen 2" },
        { src: "https://upload-os-bbs.hoyolab.com/upload/2021/05/22/21867498/19fb8c0ff0e27428841a05ddbfc0851d_3933469727756591456.jpg", alt: "Imagen 3" },
        { src: "https://wallpapers.com/images/hd/genshin-impact-tree-landscape-nbj4z2tt8nqybfwn.jpg", alt: "Imagen 4" },
        { src: "https://pbs.twimg.com/media/F_6YiUMXMAAutg9?format=jpg&name=large", alt: "Imagen 5" },
        { src: "https://www.siliconera.com/wp-content/uploads/2022/03/yae.jpg", alt: "Imagen 6" },
        { src: "https://preview.redd.it/updated-all-official-wallpapers-up-to-version-3-1-links-in-v0-7rzzwdxgsvu91.jpg?auto=webp&s=c37f320bf6f817167502bab2f00dbfca5e728fd6", alt: "Imagen 7" },
        { src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Best-Genshin-Impact-Wallpapers-Of-Sumeru-Characters---Tighnari-Nilou-Nahida-Dehya--Alhaitham.jpg", alt: "Imagen 8" },
        { src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Genshin-Impact-Summer-Wallpaper.jpg", alt: "Imagen 9" },
        { src: "https://wallpapers.com/images/featured/genshin-impact-wlq3ykrxbaoadjow.jpg", alt: "Imagen 10" },
        { src: "https://upload-os-bbs.hoyolab.com/upload/2021/05/22/21867498/19fb8c0ff0e27428841a05ddbfc0851d_3933469727756591456.jpg", alt: "Imagen 11" },
        { src: "https://wallpapers.com/images/hd/genshin-impact-tree-landscape-nbj4z2tt8nqybfwn.jpg", alt: "Imagen 12" },
        { src: "https://pbs.twimg.com/media/F_6YiUMXMAAutg9?format=jpg&name=large", alt: "Imagen 13" },
        { src: "https://www.siliconera.com/wp-content/uploads/2022/03/yae.jpg", alt: "Imagen 14" },
        { src: "https://preview.redd.it/updated-all-official-wallpapers-up-to-version-3-1-links-in-v0-7rzzwdxgsvu91.jpg?auto=webp&s=c37f320bf6f817167502bab2f00dbfca5e728fd6", alt: "Imagen 15" },
        { src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Best-Genshin-Impact-Wallpapers-Of-Sumeru-Characters---Tighnari-Nilou-Nahida-Dehya--Alhaitham.jpg", alt: "Imagen 16" },
        { src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Best-Genshin-Impact-Wallpapers-Of-Sumeru-Characters---Tighnari-Nilou-Nahida-Dehya--Alhaitham.jpg", alt: "Imagen 16" },
    ];

    return (
        <div className='mainContainer__ContentPortfolio'>
            <div className="headerAlwaysTOP">
                <HeaderPortfolio />
            </div>
            <div className="content_TopPortfolio">
                <Template_01_Content />
                <Template_02_Content />
            </div>
            <div className="galleryDivider" />
            <div className="content_BottomPortfolio__Galery">
                <h3 className="tittleGallery_S1">Galeria de Imagenes <span className="tagColor__S1">(Interfaz)</span></h3>
                <p className="paragraph_gallery_S1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda praesentium ab provident veniam excepturi doloribus exercitationem debitis quos at?
                </p>
                <div className="galleryContainer" style={{marginTop: '30px'}}>
                    <ImageGallery images={images} />
                </div>
            </div>
        </div>
    )
}

export default MainContentPortfolio
