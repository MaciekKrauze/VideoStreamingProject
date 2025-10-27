const Login = () => {
    return (
        <>
            <header></header>
            <main>
                <section className="section">
                    <h2>Zaloguj się</h2>
                    <article>
                        <form>
                            <div>
                                <input type={"text"} placeholder={"E-mail lub numer telefonu komórkowego"}/>
                                <label>E-mail lub numer telefonu komórkowego</label>
                                <p hidden>Wprowadź prawidłowy adres e-mail lub numer telefonu komórkowego.</p>
                            </div>
                            <div>
                                <input type={"password"} placeholder={"Hasło"}/>
                                <label>Hasło</label>
                                <p hidden>Hasło musi mieć długość od 4 do 60 znaków.</p>
                            </div>
                            <p><a>Zaloguj się</a></p>
                        </form>
                    </article>
                    <p>LUB</p>
                    <article>
                        <button>Użyj kodu logowania</button>
                        <button>Nie pamiętasz hasła?</button>
                    </article>
                    <article>
                        
                    </article>
                </section>
            </main>
            <footer>
                <section>
                    <h2 className={"text-red-600 bg-amber-500"}>Pytania? Zadzwoń pod numer <a>111 111 111</a> (bezpłatnie)</h2>
                    <ul>
                        <li><a>Często zadawane pytania</a></li>
                        <li><a>Centrum pomocy</a></li>
                        <li><a>Warunki korzystania</a></li>
                        <li><a>Prywatność</a></li>
                        <li><a>Ustawienia plików cookie</a></li>
                        <li><a>Informacje o firmie</a></li>
                        <li><a>Ustawienia reklam</a></li>
                    </ul>
                </section>
                <section>
                    <select>
                        <option>Polski</option>
                        <option>English</option>
                    </select>
                </section>
            </footer>
        </>
    )
}

export default Login