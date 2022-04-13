import React, {useRef} from 'react';
import './home.scss'

const Home = ()=>{
    const searchInput = useRef('')

    return (
        <div id={'home'}>
            <div className={'top'}>
                <div className={'nav'}>
                    <div className={'title'}>Travel ——</div>
                    <div className={'content'}>
                        Travel makes one modest, you see what a tiny place you occupy in the world.
                    </div>
                    <div className={'more-button bg-Pink'}>
                        ReadMore
                    </div>
                </div>
            </div>

            <div className={'bottom'}>
                <div className={'introduce'}>
                    <div className={'title text-Pink'}>Travel —</div>
                    <div className={'content'}>Take only memories, leave only footprints</div>
                    <div className={'img'} />
                </div>
                <div className={'right'}>
                    <div className={'search'} placeholder={'Search'}>
                        <div className={'input'} contentEditable={true}/>
                        <div className={'iconfont icon-search search-img'} />
                    </div>
                    <div className={'person'}>
                        <div className={'title'}>About author</div>
                        <div className={'avatar'} />
                        <div className={'username'}>John Doe</div>
                        <div className={'detail'}>One advanced diverted domestic repeated bringing you old.Possible procured her trifling laughter though</div>
                        <div className={'icon-group'}>
                            <div className={'iconfont icon-wechat icon'} />
                            <div className={'iconfont icon-twitter icon'} />
                            <div className={'iconfont icon-github icon'} />
                            <div className={'iconfont icon-QQ'} />
                        </div>
                    </div>
                    <div className={'img'} />
                </div>

            </div>
        </div>
    )
}

export default Home