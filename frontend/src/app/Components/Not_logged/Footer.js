import Language_select from "@/app/Components/Utils/Language_select";

export default function Footer() {
    return (
        <footer>
            <section className="bg-gray-100">
                <h2>Pytania? Zadzwoń pod numer <a href={"tel:11111111"}>11111111</a> (bezpłatnie)</h2>
                <ul>
                    <li><a href={"#"}>Często zadawane pytania</a></li>
                    <li><a href={"#"}>Centrum pomocy</a></li>
                    <li><a href={"#"}>Warunki korzystania</a></li>
                    <li><a href={"#"}>Prywatność</a></li>
                    <li><a href={"#"}>Ustawienia plików cookie</a></li>
                    <li><a href={"#"}>Informacje o firmie</a></li>
                    <li><a href={"#"}>Ustawienia reklam</a></li>
                </ul>
            </section>
            <section>
                <Language_select/>
            </section>
        </footer>
    )
}