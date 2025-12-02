import Footer from '../Components/Not_logged/Footer';
import Header from "@/app/Components/Not_logged/Header";


function ErrorX () {
    return (
        <svg viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" data-icon-id=":rc:"
             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
            <path fill="currentColor" fillRule="evenodd"
                  d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1
                                           16 0M4.47 5.53 6.94 8l-2.47 2.47 1.06 1.06L8 9.06l2.47 2.47 1.06-1.06L9.06
                                            8l2.47-2.47-1.06-1.06L8 6.94 5.53 4.47z">
            </path>
        </svg>
    )
}

export default function LoginPage() {
    return (
        <>
            <Header/>
            <main className="flex flex-col">
                <section className="bg-black">
                    <h2 className="text-white h-2">Zaloguj się</h2>
                    <form>
                        <div>
                            <div className="relative">
                                <input type="text" id="email_or_tel" placeholder=" "
                                       className="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading
                                       bg-neutral-secondary-medium border-0 border-b-2 border-default-medium
                                       appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"/>
                                <label htmlFor="email_or_tel"
                                       className="absolute text-sm text-body duration-300 transform -translate-y-4
                                       scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                       peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                                       text-gray-400">
                                    E-mail lub numer telefonu komórkowego</label>
                            </div>
                            <span id="email_error_span" className="text-red-600 flex flex-row items-center">
                                <ErrorX/>Wprowadź prawidłowy adres e-mail lub numer telefonu komórkowego.
                            </span>
                        </div>
                        <div>
                            <div className="relative">
                                <input type="password" id="password" placeholder=" "
                                       className="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading
                                       bg-neutral-secondary-medium border-0 border-b-2 border-default-medium
                                       appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"/>
                                <label htmlFor="password"
                                       className="absolute text-sm text-body duration-300 transform -translate-y-4
                                       scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                       peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                                       text-gray-400">
                                    Hasło
                                </label>
                            </div>
                            <span id="password_error_span" className="text-red-600 flex flex-row items-center">
                                <ErrorX/>Hasło musi mieć długość od 4 do 60 znaków
                            </span>
                        </div>
                        <button type="submit" className="text-white bg-red-600">Zaloguj się</button>
                        <div>
                            <input type="checkbox" id="to_remember_checkbox" checked/>
                            <label htmlFor="to_remember_checkbox">Zapamiętaj mnie</label>
                        </div>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    )
}