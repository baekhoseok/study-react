import PropTypes from "prop-types"
import 'antd/dist/antd.css'
import Head from "next/head"


const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Twitter Clone</title>
            </Head>
            <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default App
