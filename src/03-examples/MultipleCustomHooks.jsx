import { useCounter, useFetch } from "../hooks/index"
import { LoadingQuote, Quote } from "./components/index"

export const MultipleCustomHooks = () => {

  const { increment, counter } = useCounter()

  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  //console.log(data, isLoading, hasError);

  const {author, quote} = !!data && data[0]

  return (
    <>
        <h1>Breaking Quotes</h1>
        <hr />  

        {
          (isLoading) 
          ? <LoadingQuote />
          : <Quote quote={quote} author={author}/>
        }

        <button onClick={() => increment()} className="btn btn-primary" disabled={isLoading}>
          Next quote
        </button>
    </>
  )
}
