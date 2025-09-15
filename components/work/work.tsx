import { projects } from "@/constants/projects";
// import Double from ""
import styles from "./style.module.\
css"
import Double from "./double/double";

export default function Work() {
    return (
        <main className={styles.main}>
            <h1>my best. thoughtfully curated.</h1>
            <div className={styles.gallery}>
                <Double projects={[projects[0], projects[1]]} />
                <Double projects={[projects[2], projects[3]]} reversed={true} />
                <Double projects={[projects[4], projects[5]]} />
                <Double projects={[projects[6], projects[7]]} reversed={true} />
            </div>
        </main>
    )
}
