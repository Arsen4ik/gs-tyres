import cardImage from '../assets/card-image.png'

const Card = ({sizes, name, speedIndex, loadIndex, description, picture, diameter, pr, rim}) => {

    return <>
        <section className="tc pa3 pa5-ns">
            <article className="hide-child relative ba b--black-20 mw5 center">
                <img src={cardImage} />
                <div className="pa2 bt b--black-20">
                    {/* <a className="f6 db link dark-blue hover-blue" href="#">Jesse Grant</a> */}
                    <h3 className="f6 gray mv1">{ name }</h3>
                    <p className="f6 gray mv1">Размеры: { sizes.toString() }</p>
                    <p className="f6 gray mv1">Индекс Нагрузки: { loadIndex}</p>
                    <p className="f6 gray mv1">Индекс скорости: { speedIndex}</p>
                    { diameter ? <p className="f6 gray mv1">Диаметер: { diameter }</p> : null}
                    { pr ? <p className="f6 gray mv1">Норма слойности: { pr }</p> : null}
                    { rim ? <p className="f6 gray mv1">Ширина обода: { rim }</p> : null}
                    <p className="f6 gray mv1">{ description}</p>
                    <p className="f6 gray mv1">{ picture }</p>
                    {/* <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="#">Описание</a> */}
                </div>
                {/* <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</a> */}
            </article>
        </section>
    </>
}

export default Card

