import React from 'react';
import ReactDOM from 'react-dom';
import { MainSection } from './index.js';
import './index.css';
import 'bulma/css/bulma.min.css';

export class Article extends React.Component {
    render(){
        const article = this.props.article;
        const articleJSx = (
            <section className = "Article">
                <img src = {article.image1} style = {{ objectFit: 'contain', width: '100%'}}></img>
                <p className='Caption'>{article.image1caption}</p>
                <h1 className='AnimatedTextSide'>{article.header}</h1>
                <hr></hr>
                <PictureBox title = {article.p1header} paragraph = {article.p1} picture = {article.image2 !== '' ? article.image2 : undefined}/>
                <PictureBox title = {article.p2header} paragraph = {article.p2}/>
            </section>
        )
        return <MainSection view = {articleJSx}/>
    }
}
export class ExtracurricularArticle extends React.Component {
    render(){
        const article = this.props.article;
        const videoExists = article.video !== '';
        const articleJSx = (
            <section className = "Extracirricular-Article">
                <div>
                    <img src = {article.image1} style = {{width: '60%', padding: 20}}></img>
                    <p className='Caption'>{article.image1caption}</p>
                </div>
                <h1 className='AnimatedTextSide'>{article.header}</h1>
                <div>
                    <hr></hr>
                    <p className = "is-size-2" style = {{padding: "10px"}}>{article.p1header}</p>
                    <p className = "TextBoxInner">{article.p1}</p>
                    <p className = "is-size-2" style = {{padding: "10px"}}>{article.p2header}</p>
                    <p className = "TextBoxInner">{article.p2}</p>
                    {videoExists ? <VideoBox video = {article.video} caption = {article.videocaption}/>:''}
                </div>
            </section>
        )
        return <MainSection view = {articleJSx}/> 
    }
}
function PictureBox(props){
    const pictureExists = props.picture === undefined;
    return (
        <div className = "TextBox">
            <div className = "TextBoxInner"> 
                <p className = "is-size-2">{props.title}</p> {props.paragraph}
            </div>
            {pictureExists ? <div className="TextBoxImage">
                <img src = {props.picture}></img>
                <p className='Caption'>{props.caption}</p>
            </div> : ''}
        </div>
    )
}
function VideoBox(props){
    return (
        <div>
            <video style={{width:'40%'}} controls>
                <source src={props.video} type="video/mp4"></source>
            </video>
            <p className='Caption' style={{padding:'1em'}}>{props.caption}</p>
        </div>
    )
}