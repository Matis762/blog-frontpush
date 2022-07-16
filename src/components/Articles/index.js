import Posts from '../Posts';

function Artcle() {

    return (
        <section className='container mt-5'>
            <h1>Article.js</h1>
            <div className='container-posts'>
                <Posts />
                <Posts />
                <Posts />
               
            </div>

        </section>
    );
}

export default Artcle;