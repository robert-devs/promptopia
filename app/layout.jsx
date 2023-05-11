import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

// import Provider from "@components/Navbar";

export const metadata = {
  title: 'Prompter',
  description: 'Discover & Share prompts',
}

const RootLayout =({ children })=> {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Navbar/>
            {children}
          </main>
        </Provider>
      </body>   
    </html>
  )
}
export default RootLayout