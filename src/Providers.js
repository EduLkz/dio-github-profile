import App from "./components/App/App"
import GithubProvider from "./providers/git-provider"

const Providers = () =>{
    return(
        <main>
            <GithubProvider>
                <App/>
            </GithubProvider>
        </main>
    )
}

export default Providers;