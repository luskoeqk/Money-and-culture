
import styles from './NavigationBar.module.css';

export const NavigationBar = () => {


    return (

        <nav>
            <div id="main_menu">
                <div className={styles.inner_main_menu}>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                        <li>four</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
