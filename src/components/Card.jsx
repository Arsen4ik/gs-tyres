import { useNavigate } from "react-router-dom";
import cardImage from '../assets/card-imageNew.png'
import './Card.scss'


const Card = (props) => {
    const navigateTo = useNavigate();
    const handleCardButtonClick =() => {
        // console.log(props)
        navigateTo(`/card-details/${props.data.name}`, { state: [props.data]})   
    }

    return <>
        <section className="tc pa3 pa5-ns">
            <article className="hide-child relative ba b--black-20 mw5 center">
                <img src={cardImage} />
                <div className="pa2 bt b--black-20">
                    {/* <a className="f6 db link dark-blue hover-blue" href="#">Jesse Grant</a> */}
                    <h3 className="f4 gray mv1">{ props.data.name }</h3>
                    <h3 className="f6 gray mv1">{ props.data.sizes }</h3>
                   
                    <a className="link tc ph3 pv1 db bg-animate bg-dark-green hover-bg-green white f6 br1 card-button" onClick={handleCardButtonClick}>Описание</a>
                </div>
                {/* <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</a> */}
            </article>
        </section>
    </>
}

export default Card

