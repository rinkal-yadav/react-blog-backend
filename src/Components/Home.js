import React,{useEffect,useState} from 'react'
import FeaturedArticle from './FeaturedArticle'
import AllArticles from './AllArticles'
import ArticlesCategory1 from './ArticlesCategory1'
import ArticlesCategory2 from './ArticlesCategory2'
import ArticlesCategory3 from './ArticlesCategory3'
import TopArticle from './TopArticle'
import axios from 'axios'
function Home() {
    const [data, setData] = useState([])
    const art1 = []
    const art2 = []
    const art3 = []
    const artAll = []
    const topArt = []
    const featuredArt = []
    useEffect(() => {
        axios.get("https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details")
            .then((value) => setData(value.data))
            .catch(err => { console.log(err) })
    }, [])

    data.forEach((a) => {
        let key = a.category
        switch (key) {
            case "business":
                art1.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    about: a.about,
                    category: a.category

                })
                break;
            case "tourism":
                art2.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    about: a.about,
                    category: a.category

                })
                break;
            case "technology":
                art3.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    about: a.about,
                    category: a.category

                })
                break;
            case "top":
                topArt.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    about: a.about,
                    category: a.category

                })
                break;
            case "featured":
                featuredArt.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    about: a.about,
                    category: a.category

                })
                break;

            default:
                break;
        }
    })

    data.forEach((a, index) => {
        if (index >= data.length - 3) {
            artAll.push(
                {
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    about: a.about,
                    category: a.category

                }
            )
        }
    })
    // console.log("**", art1);
    // console.log("**", art2);
    // console.log("**", art3);
    // console.log("**", artAll);




    return (
        <div>

            <FeaturedArticle dataObject={[featuredArt]}/>

            <div className='LatestText'><div className='textBorder'>The </div> Latest</div>

            <AllArticles  dataObject={[artAll]}/>
            <div className='LatestText'><div className='articleText'>Latest </div>  Articles</div>
            <div className='FlexContainer'>
                <div className='ArticleFlexColumn'>
                    <ArticlesCategory1  dataObject={[art1]}/>
                    <div >
                        <img className='articleVerticalImg' alt='gallary' src="https://www.planetware.com/wpimages/2021/05/united-arab-emirates-top-attractions-family-fun-them-parks-wild-wadi-park.jpg" />
                    </div>
                </div>

                <div className='marginLeft'>
                    <div className='Advertistement'>Advertistement</div>
                    <div className='LatestText'><div className='textBorder'>The </div> Top</div>
                    <TopArticle  dataObject={[topArt]}/>
                </div>
                <div className='LatestText'><div className='articleText'>Latest </div>  Technology Article</div>

                <ArticlesCategory3 dataObject={[art3]} />
                <div className='LatestText'><div className='articleText'>Latest </div>  Tourism Article</div>

                <ArticlesCategory2 dataObject={[art2]}/>

            </div>

        </div>
    )
}

export default Home