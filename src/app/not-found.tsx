import React from 'react';
import {Orbitron} from "next/font/google"
import { Noto_Sans_JP } from 'next/font/google';
import styles from "./styles/not-found.module.css"
import RedirectButton from './components/redirectbutton';


const Orbitronfont = Orbitron({
    weight: "400",
    subsets: ["latin"],

})

const NotoSansJPfont = Noto_Sans_JP({
	weight: "400",
	subsets: ["latin"],
})

export default function NotFound() {
    return(
        <div className={styles.div}>
            <div className={Orbitronfont.className}>
                <h1 className={styles.error404}>Error: 404 Face Not Found</h1>    
            </div>
            <p className={styles.noface}>(エラー: 顔ないなった)</p>
            <hr />
            <div className={NotoSansJPfont.className}>
                <p>申し訳ございません。お探しの将来の希望が見つかりませんでした。</p>
                <p>あなたの信じる未来は削除されたか、頑張る方向性が間違っている可能性があります。<br />
                諦めて別の方向性を模索してください。</p>
            </div>
						<RedirectButton />
            {/* <button >諦めて人生をやりなおす。</button> */}
        </div>
    )
}
