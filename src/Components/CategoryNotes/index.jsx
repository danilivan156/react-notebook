import CategoryItem from '../CategoryItem'
import useRead from '../../hoocks/useRead'

const Index = () => {
  const countYotube = useRead("YouTube").length
  const countFigma = useRead("Figma").length
  const countTikTok = useRead("TikTok").length
  const countOtherLinks = useRead("OtherLinks").length
  const countOtherNotes = useRead("OtherNotes").length
  
  return (
    <div className="flex-category">
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="/youtube" 
        title="YouTube links" 
        count={countYotube}/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="/tiktok" 
        title="TikTok links" 
        count={countTikTok}/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="/figma" 
        title="Figma links" 
        count={countFigma}/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="/otherlinks" 
        title="Other links" 
        count={countOtherLinks}/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="/othernotes" 
        title="Other notes" 
        count={countOtherNotes}/>
    </div>
  )
}

export default Index
