import React from 'react'
import FeaturedArticle from './FeaturedArticle'
import AllArticles from './AllArticles'
import ArticlesCategory1 from './ArticlesCategory1'
import ArticlesCategory2 from './ArticlesCategory2'
import ArticlesCategory3 from './ArticlesCategory3'
import TopArticle from './TopArticle'
function Home() {
    
    return (
        <div>
            <FeaturedArticle/>
            
            <div className='LatestText'><div className='textBorder'>The </div> Latest</div>
          
            <AllArticles/>  
            <div className='LatestText'><div className='articleText'>Latest </div>  Articles</div>
            <div className='FlexContainer'>
                    <div className='ArticleFlexColumn'>
                        <ArticlesCategory1/>                        
                        <div >
                            <img className='articleVerticalImg' alt='gallary' src="https://www.planetware.com/wpimages/2021/05/united-arab-emirates-top-attractions-family-fun-them-parks-wild-wadi-park.jpg" /> 
                        </div>
                    </div>

                    <div className='marginLeft'>
                        <div className='Advertistement'>Advertistement</div>
                        <div className='LatestText'><div className='textBorder'>The </div> Top</div>
                        <TopArticle/>
                    </div>
                <div className='LatestText'><div className='articleText'>Latest </div>  Technology Article</div>
                
                <ArticlesCategory3/>
                <div className='LatestText'><div className='articleText'>Latest </div>  Tourism Article</div>
                
                <ArticlesCategory2/>
              
            </div>

    </div>
    )
}

export default Home