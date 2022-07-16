const Posts = () => {
    return (
        <div className='post mx-2'>
            <div className="img-post"></div>
            <h5>Tecnologia</h5>
            <h3>O guia definitivo do Blog</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquid itaque quam
                laborum assumenda eos tenetur officia et. Nisi in id vitae odit ab iusto molestiae odio,
                aliquid omnis.
            </p>

            <div className="flex pt-2">

                <div className="img-profile" />
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">Fulano de tal</h6>

                    <p>
                        Aug 2, 2020 -8 min read
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Posts;