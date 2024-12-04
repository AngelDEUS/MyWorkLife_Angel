import './stylesDescAndStats.css'

const DescAndStats = () => {
    return (
        <div className='mainContentDescAndStats'>
            <div className="topDesc_DescStats">
                <h5 className="tittleDesc_Project__S1">Descripción del Proyecto</h5>
                <p className="descProject_S1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolores saepe libero aliquam accusantium recusandae quod repellendus magni quidem rem. Omnis sit debitis dolor, illum assumenda temporibus libero numquam quae fugiat veniam dolorem amet officia enim quidem vitae maiores iusto tempore reprehenderit aut provident. Dignissimos consectetur aspernatur ipsum vel odit reiciendis quasi tempore nam magnam maxime impedit cumque corporis eos, modi nihil? Quae veniam fugit ipsum consequuntur dolores odio officia quibusdam maiores molestias ex. Deleniti numquam in maxime, nobis molestias recusandae reiciendis?.</p>
            </div>
            <div className="middleStatsInfo__S1">
                <div className="groupStat_S1">
                    <span className="logoLanguage_S1">
                        <i className="devicon-javascript-plain" />
                    </span>
                    <div className="statSubGroup_S1">
                        <div className="cirClePlusTittle">
                            <div className="circleStat_S1" />
                            <span className="tittleStatMuestra_S1">JavaScript</span>
                        </div>
                        <div className="progressBar_S1" data-percentage="85">
                            <div className="progress_S1" style={{ '--progress': '85%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomTagsInfo__S1">
                <div className="sepTags_S1" />
                <div className="containerTags_S1">
                    <span className="textTagger_S1">Web design</span>
                    <span className="textTagger_S1">Ventas e Inventario</span>
                    <span className="textTagger_S1">Aplicación web</span>
                </div>
            </div>
        </div>
    )
}

export default DescAndStats
