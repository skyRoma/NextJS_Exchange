import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../client/src/components/MyLayout';
import AuthWindow from '../client/src/components/AuthWindow/AuthWindow';

const Index = (props) => (
    <AuthWindow />
)

export default Index
