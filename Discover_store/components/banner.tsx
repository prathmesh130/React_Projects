import React from 'react'
import Head from 'next/head'
import styles from '../styles/banner.module.css'
export default function Banner() {
    return (
        <div className={styles.cont}>
            <Head>
                <title>Alibancous Shopcisps</title>
            </Head>
            <h1>Alibancous Shopcisps</h1>
            <p>Discover nearby Shopes</p>
            <button>Save Changes</button>
        </div>
    )
}
