import Posts from '../Posts';

function Artcle() {

    return (
        <section className='container mt-5'>
            <h1>Article.js</h1>
            <div className='container-posts'>
                <Posts subtitle="Tecnologia" title="O guia definitivo sobre o blog">
                    {/* Esses não são atributos do html, são parametros da função Post()*/}

                    1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquid itaque quam
                    laborum assumenda eos tenetur officia et. Nisi in id vitae odit ab iusto molestiae odio,
                    aliquid omnis.
                    {/* Esse texto vai ser aplicado no parametro children */}
                </Posts>

                <Posts subtitle="Fotografia" title="Quais as melhores cameras para 2021?">
                    2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquid itaque quam
                    laborum assumenda eos tenetur officia et. Nisi in id vitae odit ab iusto molestiae odio,
                    aliquid omnis.
                </Posts>

                <Posts subtitle="Cinema" title="Os 10 filmes com maior bilheteria de 2021?">
                    3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquid itaque quam
                    laborum assumenda eos tenetur officia et. Nisi in id vitae odit ab iusto molestiae odio,
                    aliquid omnis.
                </Posts>

            </div>

        </section>
    );
}

export default Artcle;