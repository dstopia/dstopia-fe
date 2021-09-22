import React from 'react'
import Media from 'react-media'

export default function Photos() {
    return (
        <div>
            <Media queries= {{ small : {maxWidth: 700}}}>{
                matches => 
                    matches.small ? (
                        <div className='card card-success'>
                            <div className='card-body'>
                                <div className="container-fluid">
                                    <div className='row row-cols-1 baris'>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='card card-success'>
                            <div className='card-body'>
                                <div className="container-fluid">
                                    <div className='row row-cols-2 baris'>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop'}/>
                                        </div>
                                        <div className='col'>
                                            <Photo url={'https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }</Media>
        </div>
    )
}

const Photo = (props) => {

        return (
            <div className='card mb-2 mt-3 shadow'>
            <img
                className='card-img-top '
                src={props.url}
                alt='not found 3'
            />
        </div>
        )
    
}
