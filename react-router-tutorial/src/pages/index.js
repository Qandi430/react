import React from 'react';
import Loadable from 'react-loadable';
// import withSplitting from '../withSplitting';

// export { default as Home } from './Home';
// export { default as About } from './About';
// export {default as Posts} from './Posts';
// export {default as Post} from './Post';

// export const Home = withSplitting(() => import('./Home'));
// export const About = withSplitting(() => import('./About'));
// export const Posts = withSplitting(() => import('./Posts'));
// export const Post = withSplitting(() => import('./Post'));

const Loading = () => {
    return <div>로딩중...</div>;
}

export const Home = Loadable({
    loader : () => import('./Home'),
    loading:Loading
});

export const About = Loadable({
    loader : () => import('./About'),
    loading:Loading
});

export const Posts = Loadable({
    loader : () => import('./Posts'),
    loading:Loading
});

export const Post = Loadable({
    loader : () => import('./Post'),
    loading:Loading
});