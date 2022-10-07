import Head from 'next/head'

const Header = ({directory}) => {
    //  Since directory sometimes received as an array. Title can only have text nodes as children.
    const headerTitle = `Long Nguyen | ${directory}`
    return (
        <Head>
            <title>{headerTitle}</title>
        </Head>
    )
}

export default Header
