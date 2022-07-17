import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Posts = ({subtitle,title,children}) => {

    
    return (
        <div className='post mx-2'>
            <div className="img-post"></div>
            <h5>{subtitle}</h5>
            <h3>{title}</h3>
            <p className ='mt-1'>
              {children}  
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